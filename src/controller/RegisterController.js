import Vendedor from "../model/Vendedores.js";
import Endereco from "../model/Endereco.js";
class RegisterController {
    async register(req, res) {
        
        res.render("register")
    }
    async registerVendedor(req,res){
        
        res.render("registerVendedor")
    }
    async salvarVendedor(req, res){
        const vendedor = new Vendedor();
        const endereco = new Endereco(); 
        const id = await vendedor.save(req.body)
        endereco.saveFromVendedor(req.body, Number(id))
        res.clearCookie()
        res.cookie("vendedor",true)
        res.cookie("id_usuario",id)
        res.redirect("/")
    }
    async registerComprador(req,res){

        res.render("registerComprador")
    }
}
export default new RegisterController();  