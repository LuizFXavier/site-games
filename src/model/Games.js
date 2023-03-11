import db from "../database/connection.js"

class Games {
    async create() {
        await db.query(`
        DROP TABLE IF EXISTS Games CASCADE;
        CREATE TABLE IF NOT EXISTS Games
        (
            id serial PRIMARY KEY,
            quantidade int NOT NULL, 
            nome character varying NOT NULL,
            descricao text NOT NULL,
            marca character varying NOT NULL,
            valor float NOT NULL,
            genero character varying NOT NULL,
            plataforma character varying NOT NULL,
            imagem bytea
        )
        `).then(() => console.log("Dale"))
    }
    async list() {
        try {

            const games = await db.query(`
            SELECT * FROM Games
            `);
            return games.rows;
        } catch (error) {
            console.log(error);
        }
    }
    async save(game, quantidade, valor) {
        let id
        await db.query(`
        INSERT INTO Games(
            nome, descricao, marca, plataforma, genero, valor, quantidade
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id;
        `, [game.nome, game.descricao, game.marca, game.plataforma, game.genero, valor, quantidade]
        ).then((usuario) => id = usuario.rows[0].id);

        return id;
    }
}
export default Games