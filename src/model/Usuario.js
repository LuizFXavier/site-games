import db from "../database/connection.js"

class Usuario{
    async create(){
        await db.query(`
        DROP TABLE IF EXISTS Usuario CASCADE;
        CREATE TABLE IF NOT EXISTS Usuario
        (
            id serial PRIMARY KEY,
            nome_usuario character varying NOT NULL,
            nome_real character varying NOT NULL,
            senha character varying NOT NULL,
            email character varying NOT NULL,
            telefone int NOT NULL
        )
        `).then(()=>console.log("Dale"))
    }
}
export default Usuario