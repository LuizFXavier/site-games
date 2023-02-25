import Games from "../model/Games.js";
import Usuarios from "../model/Usuarios.js";

class IndexController {
    async index(req, res) {
        const jogos = new Games();
        const games = await jogos.list()

        res.render("index", { games })
    }
}

export default new IndexController();