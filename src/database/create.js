import Games from "../model/Games.js";
import Endereco from "../model/Endereco.js"
import Usuario from "../model/Usuario.js";
import Vendedor from "../model/Vendedores.js";
import Historico from "../model/Historico.js";

const games = new Games();
const endereco = new Endereco();
const usuario = new Usuario();
const vendedor = new Vendedor();
const historico = new Historico();

async function criar(){
    await historico.create()
    await games.create()
    await usuario.create()
    await vendedor.create()
    await endereco.create()
    return
}
criar()