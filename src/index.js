import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"
import path, { resolve } from "path";
import router from "./router.js";
import cookieParser from "cookie-parser";
import ejs from "express-ejs-layouts";
import Vendedor from './model/Vendedores.js';

const porteiro = process.env.PORT || 8080
const app = express();
app.use(cookieParser(process.env.SEGREDO_GIGATONICO))
app.use(async (req,res,next)=>{
    let usuario;
        let user;
        
        if(req.cookies['vendedor'] == "true"){
            usuario = new Vendedor()
        }
        if(req.cookies['id_usuario']){

            user = (await usuario.getById(Number(req.cookies['id_usuario'])));
            
            res.locals.user = user
            next();
        }else{
            res.locals.user = false
            next();
        }
})
app.use(ejs)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
app.use("/bootstrap", express.static(resolve("./node_modules/bootstrap/dist")))
app.set("views", resolve('./src/views'))
app.set("view engine", "ejs")
app.use("/public", express.static(resolve("./src/public")))

app.listen(porteiro, () => console.log('Rodando')) 
