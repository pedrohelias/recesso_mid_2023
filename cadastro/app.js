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
const listaDiv = document.getElementById("generateList");
let holdList = 0;
let requisitionsAdd = 0;
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

function initDatabaseList(database){
    for(let i = 0; i < database.length; i++ ){
        let nome = document.createElement('p');
        let idade = document.createElement('p');
        let email = document.createElement('p');
        let salto = document.createElement('hr');
    
        let conteudoIdade  = document.createTextNode('Idade: ' + database[i].idade);
        let conteudoNome  = document.createTextNode('Nome: ' + database[i].nome);
        let conteudoEmail  = document.createTextNode('Email: ' + database[i].email);
    
        nome.appendChild(conteudoNome);
        idade.appendChild(conteudoIdade);
        email.appendChild(conteudoEmail);
        
        listaDiv.appendChild(nome);
        listaDiv.appendChild(idade);
        listaDiv.appendChild(email);
        listaDiv.appendChild(salto);
    }

}

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

    holdList = 1
    requisitionsAdd++ //conta a quantidade de requisições de adicionar dados foram realizadas 

});

initDatabaseList(database)

list.addEventListener("click", function(){
    
    if(holdList == 1){
        if(requisitionsAdd == 1){

        //for(let i = 0; i < database.length; i++ ){
            let nome = document.createElement('p');
            let idade = document.createElement('p');
            let email = document.createElement('p');
            let salto = document.createElement('hr');
        
            let conteudoIdade  = document.createTextNode('Idade: ' + database[database.length-1].idade);
            let conteudoNome  = document.createTextNode('Nome: ' + database[database.length-1].nome);
            let conteudoEmail  = document.createTextNode('Email: ' + database[database.length-1].email);
        
            nome.appendChild(conteudoNome);
            idade.appendChild(conteudoIdade);
            email.appendChild(conteudoEmail);
            
            listaDiv.appendChild(nome);
            listaDiv.appendChild(idade);
            listaDiv.appendChild(email);
            listaDiv.appendChild(salto);

        }else{
            for(let s = database.length - requisitionsAdd; s < database.length; s++){
                let nome = document.createElement('p');
                let idade = document.createElement('p');
                let email = document.createElement('p');
                let salto = document.createElement('hr');
            
                let conteudoIdade  = document.createTextNode('Idade: ' + database[s].idade);
                let conteudoNome  = document.createTextNode('Nome: ' + database[s].nome);
                let conteudoEmail  = document.createTextNode('Email: ' + database[s].email);
            
                nome.appendChild(conteudoNome);
                idade.appendChild(conteudoIdade);
                email.appendChild(conteudoEmail);
                
                listaDiv.appendChild(nome);
                listaDiv.appendChild(idade);
                listaDiv.appendChild(email);
                listaDiv.appendChild(salto);
            }
        }       
        holdList = 0;
        requisitionsAdd = 0;
    }else{
        alert("adicione um novo usuario para alterar a lista")
    }

});



