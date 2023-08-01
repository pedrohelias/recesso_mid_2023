//config express
const express = require("express");
const app = express();
const routes = require("./routes")

//aqui colocamos tudo que o app vai usar
app.use(express.json()); 
app.use(routes);

//rotas

app.get("/", (req,res) => {
    res.send("hellow world");
}); //estabelecimento de rotas. No caso a /

//resposta do callback da utilização da porta 3000
app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})