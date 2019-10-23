const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)

router.get("/tarefaconcluida",controller.getTarefaConcluida)

router.get("/:funcionario/busca",controller.getTarefaFuncionario)
router.get("/:id",controller.getById)




module.exports = router