import Games from "../model/Games.js";

class JogoController {
    async jogo_detalhes(req, res) {
        res.render("jogo_detalhes")
    }
    async jogo_adicionar(req,res){
        res.render("jogo_add")
    }
}
export default new JogoController();