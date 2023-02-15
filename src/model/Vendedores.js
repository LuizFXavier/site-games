import db from "../database/connection.js"

class Vendedor{
    async create(){
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
            telefone int NOT NULL,
            constraint fk_Games foreign key(game_id) references Games(id)
        )
        `).then(()=>console.log("Dale"))
    }
}
export default Vendedor