import Games from "../model/Games.js";
import Usuarios from "../model/Usuarios.js";

class JogoController {
    async jogo_detalhes(req, res) {

        res.render("jogo_detalhes")
    }
    async jogo_adicionar(req, res) {

        res.render("jogo_add")
    }
    async salvar(req, res) {
        const game = new Games()
        const usuario = new Usuarios()

        const quantidade = Number(req.body.quantidade)
        const valor = Number(req.body.valor)

        console.log("quantidade:"+quantidade);
        console.log("valor:"+valor);
        console.log(req.body.plataforma); 
        if (quantidade < 1) {
            console.log("quantidade < 1");
            return res.render("jogo_add", { error: "Deve-se ter ao menos um jogo" })
        }
        if (!Number.isInteger(quantidade)) {
            console.log("quantidade not inteiro");
            return res.render("jogo_add", { error: "Informe um valor inteiro para a quantidade" })
        }
        if (!(valor >= 0)) {
            console.log("valor < 0");
            return res.render("jogo_add", { error: "O valor não pode ser negativo" })
        }
        const id_usuario = Number(req.cookies['id_usuario'])
        await usuario.saveGame(id_usuario, await game.save(req.body, quantidade, valor))
        res.redirect("/");
    }
}
export default new JogoController();