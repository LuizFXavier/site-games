import db from "../database/connection.js"

class Endereco {
    async create() {
        await db.query(`
        DROP TABLE IF EXISTS Endereco CASCADE;
        CREATE TABLE IF NOT EXISTS Endereco
        (
            id serial primary key,
            CEP varchar NOT NULL,
            estado varchar NOT NULL,
            cidade varchar NOT NULL, 
            bairro character varying NOT NULL,
            rua varchar NOT NULL,
            numero int NOT NULL,
            id_usuario int,
            constraint fk_usuario foreign key(id_usuario) references Usuarios(id)
        )
        `).then(() => console.log("Dale"))
    }
    async save(endereco, id) {
        await db.query(`
        INSERT INTO Endereco(
            CEP, estado, cidade, bairro, rua, numero, id_usuario
        ) VALUES ($1, $2, $3, $4, $5, $6, $7);
        `, [endereco.CEP, endereco.estado, endereco.cidade, endereco.bairro, endereco.rua, endereco.numero, id])
    }
}
export default Endereco