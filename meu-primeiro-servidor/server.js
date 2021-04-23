const express = require("express")// chamei o express

const app = express()// executar
app.get("/" , (request, response)=>{ 
    response.status(200).json(["Salve, mundão"])

})
app.get("/url" , (request, response)=> {
    response.status(200).json(["Karlla" , "Carol", "Ana" ])
})


app.listen(3000, ()=>{   // app (chmando a execução) escute a porta 300 e faça algo
console.log("meu primeiro servidor rodando na porta 3000")
})