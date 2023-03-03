import Usuarios from "../model/Usuarios.js";
import Endereco from "../model/Endereco.js";
import bcrypt from "bcryptjs"

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
        
        res.render('login')
    }

    async logar(req, res){ 
        const usuario = new Usuarios()
        console.log(req.body); 
        let user = await usuario.getByEmail(req.body.email)
        console.log(user); 
        if (!user) {
            console.log("sus");
            return res.render("login",{error:"E-mail ou senha incorretos"})
        }
        console.log(await bcrypt.compare( await req.body.senha, user.senha))
        console.log(await bcrypt.hash(req.body.senha, await bcrypt.genSalt(10)));
        if (! await bcrypt.compare(req.body.senha, user.senha)){
            return res.render("login",{error:"E-mail ou senha incorretos"})
        }
        res.cookie("id_usuario", user.id)
        res.redirect("/")
    }
}
export default new PerfilController();