import { Router } from "express";
import indexController from "./controller/IndexController.js";
import jogoController from "./controller/JogoController.js";
import registerController from "./controller/RegisterController.js";

const router = Router();
router.get("/", indexController.index)
router.get("/jogo/detalhes", jogoController.jogo_detalhes)
router.get("/jogo/adicionar", jogoController.jogo_adicionar)
router.get("/register", registerController.register)
router.get("/register/vendedor", registerController.registerVendedor)
router.get("/register/comprador", registerController.registerComprador)
router.post("/save/vendedor", registerController.salvarVendedor)
export default router