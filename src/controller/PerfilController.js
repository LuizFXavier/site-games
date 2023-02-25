import Usuarios from "../model/Usuarios.js";
import Endereco from "../model/Endereco.js";

class PerfilController {
    async perfil(req, res) {

        res.render("perfil")
    }
    async logout(req, res) {
        res.clearCookie('vendedor')
        res.clearCookie('id_usuario')
        res.redirect("/")
    }
    async login(req, res){
        const usuario = new Usuarios()

        let user = usuario.getByEmail(req.body.email)
        if (user) {
            
        }

        res.render('login')
    }
}
export default new PerfilController();