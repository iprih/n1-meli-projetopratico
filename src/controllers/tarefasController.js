//pegar o arquivo json
const tarefas = require("../model/tarefas.json")

//mandar o jason pro status 200
exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

//criar tarefas por id

exports.getById = (req,res) => {
    const id = req.params.id
    res.status(200).send(tarefas.find(item => item.id == id))
}

//criar pessoas que tenham concluido a tarefa


exports.getConcluido = (req, res) => {
    
    const tarefaConcluida = tarefas.filter(item => item.concluido == "true")
    const tarefaConcluidaa = tarefaConcluida.map(item => item.funcionario)
    
    res.status(200).send(tarefaConcluidaa)
}