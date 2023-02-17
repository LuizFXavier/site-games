import { Router } from "express";
import indexController from "./controller/IndexController.js";
import jogoController from "./controller/JogoController.js";

const router = Router();
router.get("/", indexController.index)
router.get("/jogo_detalhes", jogoController.jogo_detalhes)

export default router