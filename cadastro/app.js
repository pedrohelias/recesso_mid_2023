const database = [
    {
        nome: "Anne Mikaele",
        idade: 26,
        email: "anne@teste.com",
    },
    {
        nome: "Zeusa Michele",
        idade: 5,
        email: "zeusa@teste.com",
    },
    {
        nome: "Osiris Michel",
        idade: 3,
        email: "osiris@teste.com",
    },

];

let nomeInsert = document.getElementById("nome");
let idadeInsert = document.getElementById("idade");
let emailInsert = document.getElementById("email");
let number = database.length-1;
let send = document.getElementById("sendCad");
let list = document.getElementById("listCad");
let nomeProj = document.getElementById("nomeCad");
let idadeProj = document.getElementById("idadeCad");
let emailProj = document.getElementById("emailCad");
const listaDiv = document.getElementById("lista");
//vai adicionar na ultima posicação o cadastro
function addDatabase(nome, idade, email, database){
   
    const novoElemento = {
        nome: nome.value,
        idade: idade.value,
        email: email.value,
    };
    
    // Adicionando o novo objeto ao array 'database'
    database.push(novoElemento);

};

send.addEventListener("click", function(){
    if(nomeInsert.value == "" || idadeInsert.value == " " || emailInsert.value == ""){
        alert("Preencha os campos");
    }else{
        console.log(nomeInsert.value + " e" + idadeInsert.value + " e" + emailInsert.value);
        number++;
        addDatabase(nomeInsert, idadeInsert, emailInsert, database);
        nomeInsert.value = "";
        idadeInsert.value = ""; 
        emailInsert.value = "";
        console.log("nome: " + database[number].nome + " " + database[number].idade + " " + database[number].email + " numero agora:" + database.length );
        //console.log(database)      
    }

    
});

list.addEventListener("click", function(){
    //console.log(database)
    for(let i = 0; i < database.length; i++){
        // nomeProj.innerHTML = database[i].nome
        // idadeProj.innerHTML = database[i].idade
        // emailProj.innerHTML = database[i].email
        console.log(database[i].nome)
        console.log(database[i].idade)
        console.log(database[i].email)
        console.log("")

        //alterar daqui
       
    }
    }
);

