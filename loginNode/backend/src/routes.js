//vamos colocar as rotas aqui
//aqui novamente importa o express e faz toda aquela configuração 
const express = require("express");
const routes = express.Router(); //agora configurando o express para as rotas

const users = [
    {
        id: 0,
        name: "Pedro",
        email: "pedro@teste",
        password: 123456
    },
    {
        id: 1,
        name: "Anne",
        email: "annelinda@gmail.com",
        password: 654321
    },
    {
        id: 2,
        name: "Zeusa",
        email: "zzdopapai@gmail.com",
        password: 131313
    },
    {
        id: 3,
        name: "Osíris",
        email: "osoriodiabolico@gmail.com",
        password: 666666
    }

];


routes.post("/login", (req,res) => {
    const {email, password} = req.body;
    const user = users.find(user => user.email === email && user.password === password); //retorna true se for valido
    if(user){
        
        return res.status(200).send("email: " + email + " e senha: " + password + " funcionando"); //teste para envio de requisição
    }else{
        return res.status(401).json({message: "credenciais invalidas"}); //vai retornar credenciais invalidas e o status de erro
        
    }
     



})


module.exports = routes; //para utilizar em outras partes do projeto


