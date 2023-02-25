import { query } from "express"
import db from "../database/connection.js"
import bcrypt from "bcryptjs"
class Vendedor {
    async create() {
        await db.query(`
        DROP TABLE IF EXISTS Vendedor CASCADE;
        CREATE TABLE IF NOT EXISTS Vendedor
        (
            id serial PRIMARY KEY,
            game_id int,
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
    async save(vendedor) {

        const hash = await bcrypt.hash(vendedor.senha, await bcrypt.genSalt(10));
        let id;
        await db.query(`
        INSERT INTO Vendedor(
            CPF, nome_usuario, nome_real, email, telefone, senha
        ) VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id;`,
            [vendedor.CPF, vendedor.nome_usuario, vendedor.nome_real, vendedor.email, vendedor.telefone, hash]
        ).then((usuario) => id = usuario.rows[0].id);

        return id;
    }
    async getById(id) {
        try {

            const vendedores = await db.query(`
            SELECT * FROM Vendedor
            WHERE id = ${id}
            `);
            return vendedores.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
}
export default Vendedor