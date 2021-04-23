const filmes = require("./data/ghibli.json")// importando o json da ghibli
const estadosCidades = require("./data/estados-cidades.json")


const express = require("express")// importando o express



const app = express() // executando express

app.get("/", (request, response) => {
    response.status(200).json([{
        "mensagem": "Salve, mundão"
    }])
})
// "/filmes" retorna lista de todos os filmes
app.get("/filmes", (request, response) => {
    console.log(request.url)
    response.status(200).json(filmes)
})
//"/filmes/filtro" pesquisa por nome , usando query params
//query params manda tudo
app.get("/filmes/filtro", (request, response) => {
    const tituloRequisitado = request.query.titulo // recebendo request acessando as query enviadas e aceitando somente
    //array.find(elemento=> titulo dentro de elemnto tem que ser igual ao titulo requisistado )
    response.status(200).json(filmes.find(filme => filme.title == tituloRequisitado))
})
// aqui usou path params por id , vai direto na rota , bem especifico , não aceita espaços essas coisas 
app.get("/filmes/:id", (request, response) => {
    console.log(request.url)
    const id = request.params.id // recebendo o request já com a identificação direto na URL
    console.log(id)
    response.status(200).send(filmes.find(filme => filme.id == id))

})


app.get("/estados/todos", (request, response) => {
    response.status(200).json(estadosCidades)
})

// essa rota retorna somente 
app.get("/estados", (request, response) => {
    let listaEstados = estadosCidades.estados
    let estadosJson = []
    //ARRAY.forEach(elemento=>{FUNÇãO})
    listaEstados.forEach(estado => {
        console.log(estado.sigla)
        console.log(estado.nome)
        //array.push
        estadosJson.push({
            "sigla": estado.sigla,
            "nome": estado.nome
        })       

    })
   response.status(200).send(estadosJson)
})

app.listen(8080, () => {
    console.log("Uhull ta ok na porta 8080")

})
