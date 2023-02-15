import db from "../database/connection.js"

class Endereco{
    async create(){
        await db.query(`
        DROP TABLE IF EXISTS Endereco CASCADE;
        CREATE TABLE IF NOT EXISTS Endereco
        (
            CEP int PRIMARY KEY,
            estado varchar NOT NULL,
            cidade varchar NOT NULL, 
            bairro character varying NOT NULL,
            rua varchar NOT NULL,
            numero int NOT NULL,
            id_usuario int,
            id_vendedor int,
            constraint fk_usuario foreign key(id_usuario) references Usuario(id),
            constraint fk_vendedor foreign key(id_vendedor) references Vendedor(id)
        )
        `).then(()=>console.log("Dale"))
    }
}
export default Endereco