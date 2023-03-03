import { query } from "express"
import db from "../database/connection.js"
import bcrypt from "bcryptjs"
class Usuarios {
    async create() {
        await db.query(`
        DROP TABLE IF EXISTS Usuarios CASCADE;
        CREATE TABLE IF NOT EXISTS Usuarios
        (
            id serial PRIMARY KEY,
            game_id int,
            vendedor boolean,
            CPF varchar not null,
            nome_usuario character varying NOT NULL,
            nome_real character varying NOT NULL,
            senha character varying NOT NULL,
            email character varying NOT NULL,
            telefone varchar NOT NULL,
            constraint fk_Games foreign key(game_id) references Games(id)
        )
        `).then(() => console.log("Dale"))
    }
    async save(user, vendedor) {

        const hash = await bcrypt.hash(user.senha, await bcrypt.genSalt(10));
        let id;
        await db.query(`
        INSERT INTO Usuarios(
            CPF, nome_usuario, nome_real, email, telefone, senha, vendedor
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id;`,
            [user.CPF, user.nome_usuario, user.nome_real, user.email, user.telefone, hash, vendedor]
        ).then((usuario) => id = usuario.rows[0].id);

        return id;
    }
    async getById(id) {
        try {

            const usuario = await db.query(`
            SELECT * FROM Usuarios
            WHERE id = ${id}
            `);
            return usuario.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
    async getByEmail(email) {
        try {
            const usuario = await db.query(`
            SELECT id, senha FROM Usuarios
            WHERE email = $1
            `,[email]);
            return usuario.rows[0]; 
        } catch (error) {
            console.log(error);
        }
    }
}
export default Usuarios