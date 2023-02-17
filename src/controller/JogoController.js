import Games from "../model/Games.js";

class JogoController {
    async jogo_detalhes(req, res) {
        res.render("jogo_detalhes")
    }
}
export default new JogoController();