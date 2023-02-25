import Games from "../model/Games.js";
import Vendedor from "../model/Vendedores.js";

class IndexController{
    async index(req, res){
        const jogos = new Games();
        const games = await jogos.list()
         
        res.render("index", {games})
    }
}

export default new IndexController();