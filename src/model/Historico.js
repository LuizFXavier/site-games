import db from "../database/connection.js"

class Historico{
    async create(){
        await db.query(`
        DROP TABLE IF EXISTS Historico CASCADE;
        CREATE TABLE IF NOT EXISTS Historico
        (
            id serial PRIMARY KEY,
            id_game int NOT NULL,
            id_usurio int NOT NULL,
            hora_compra time NOT NULL,
            data_compra date NOT NULL,
            constraint fk_Games foreign key(id_game) references Games(id),
            constraint fk_Usuario foreign key(id_usurio) references Usuario(id)
        )
        `).then(()=>console.log("Dale"))
    }
}
export default Historico