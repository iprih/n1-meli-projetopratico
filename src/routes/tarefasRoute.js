const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)

router.get("/tarefaconcluida",controller.getTarefaConcluida)


router.get("/data/filtrar", controller.getMaisRecentes)
router.get("/dias/filtrar", controller.getDiferencaDias)

router.get("/:funcionario/busca",controller.getTarefaFuncionario)
router.get("/:id",controller.getById)




module.exports = router