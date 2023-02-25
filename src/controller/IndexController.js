import Games from "../model/Games.js";

class IndexController{
    async index(req, res){
        const jogos = new Games();
        const games = await jogos.list()
             
        console.log(req.cookies);
        res.render("index", {games}) 
    }
}

export default new IndexController();