import Games from "../model/Games.js";
import Endereco from "../model/Endereco.js"
import Usuarios from "../model/Usuarios.js";
import Historico from "../model/Historico.js";


const games = new Games();
const endereco = new Endereco();
const usuarios = new Usuarios();
const historico = new Historico();

async function criar() {
    await historico.create()
    await games.create()
    await usuarios.create()
    await endereco.create()
    return
}
criar()