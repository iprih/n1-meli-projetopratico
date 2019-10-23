# {reprograma} - Projeto API

### Descrição do Projeto

Desenvolver uma API a fim de disponibilizar uma lista de tarefas a ser compartilhada entre os funcionários de uma empresa. Os dados da tarefa que deverão aparecer, são:
Descrição da tarefa
Data de Inclusão 
Check para verificar se o item já foi concluído.

### Planejamento

 1º Instalar pacotes:
 
`npm init -y`

 `npm install --save express debug`

 `npm install --save -dev moon`
obs.: no package.json inserir o comando no "script: start:"nodemoon /.server.js"

 2º Separar as pastas:
 A pasta src é a pasta principal que irá conter "controler", "model", "routes".
 
 Depois criar app.js e server.js

 3º

### Estrutura

![alt text] (https://raw.githubusercontent.com/reprograma/n1-meli-projetopratico/master/revisao/n1-meli-estrutura-nodejs.png)

#### Usando Express
Express é uma lib que facilita a criação de servidores HTTP
`npm install --save express`

### Rotas

Rotas são usadas para determinar como uma aplicação responde a um request de um cliente em um determinado endpoint, que é uma URI e método HTTP específico (ex: GET).

Um endpoint de um web service é a URL(o final dela) onde seu serviço pode ser acessado por uma aplicação cliente.   