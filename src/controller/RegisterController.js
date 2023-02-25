import Usuarios from "../model/Usuarios.js";
import Endereco from "../model/Endereco.js";
class RegisterController {
    async register(req, res) {

        res.render("register")
    }
    async registerVendedor(req, res) {

        res.render("registerVendedor")
    }
    async salvarVendedor(req, res) {
        const usuario = new Usuarios();
        const endereco = new Endereco();
        const id = await usuario.save(req.body, true)
        endereco.save(req.body, Number(id))
        res.clearCookie()
        res.cookie("vendedor", true)
        res.cookie("id_usuario", id)
        res.redirect("/")
    }
    async registerComprador(req, res) {

        res.render("registerComprador")
    }
}
export default new RegisterController(); 