import db from "../database/connection.js"

class Games{
    async create(){
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
            plataforma character varying NOT NULL
        )
        `).then(()=>console.log("Dale"))
    }
}
export default Games