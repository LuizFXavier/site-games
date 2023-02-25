import Vendedor from "../model/Vendedores.js";
import Endereco from "../model/Endereco.js";

class PerfilController{
    async perfil(req, res){

        res.render("perfil")
    }
    async logout(req,res){
        res.clearCookie('vendedor')
        res.clearCookie('id_usuario')
        res.redirect("/")
    }
}
export default new PerfilController();