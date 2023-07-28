const database = [
    {  
        id: 0,
        nome: "Anne Mikaele",
        idade: 26,
        email: "anne@teste.com",
    },
    {
        id: 1,
        nome: "Zeusa Michele",
        idade: 5,
        email: "zeusa@teste.com",
    },
    {
        id: 2,
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
let teste = document.getElementById("teste");
let inputInsert = document.getElementById("testeInput");
let nomeProj = document.getElementById("nomeCad");
let idadeProj = document.getElementById("idadeCad");
let emailProj = document.getElementById("emailCad");
const listaDiv = document.getElementById("generateList");
let holdList = 0; //se holdlist for 0, a lista de dados não foi exibida. Se for 1, foi exibida. Para desbloquear, é necessario fazer uma adição de usuario
let requisitionsAdd = 0; //vai contabilizar a quantidade de adições de um cadastro sem listagem de dados. 


function addDatabase(tam, nome, idade, email, database){
   
    const novoElemento = {
        id: tam++,
        nome: nome.value,
        idade: idade.value,
        email: email.value,
    };
    
    // Adicionando o novo objeto ao array 'database'
    database.push(novoElemento);

};

function initDatabaseList(database){
    for(let i = 0; i < database.length; i++ ){
        let botaoDelete = document.createElement('button');
        let id = document.createElement('p');
        let nome = document.createElement('p');
        let idade = document.createElement('p');
        let email = document.createElement('p');
        let salto = document.createElement('hr');
    
        botaoDelete.className = "t"+database[i].id + "class"
        let conteudoButton = document.createTextNode("delete");
        let conteudoId = document.createTextNode('id: ' + database[i].id)
        let conteudoIdade  = document.createTextNode('Idade: ' + database[i].idade);
        let conteudoNome  = document.createTextNode('Nome: ' + database[i].nome);
        let conteudoEmail  = document.createTextNode('Email: ' + database[i].email);
    
        botaoDelete.appendChild(conteudoButton);
        id.appendChild(conteudoId);
        nome.appendChild(conteudoNome);
        idade.appendChild(conteudoIdade);
        email.appendChild(conteudoEmail);
        
        listaDiv.appendChild(id);
        listaDiv.appendChild(nome);
        listaDiv.appendChild(idade);
        listaDiv.appendChild(email);
        listaDiv.appendChild(botaoDelete);
        listaDiv.appendChild(salto);
    }

};

//REFAZER
function deleteNode(database, node){
    database.splice(node.value, database[node.value].id)

}

function listarTudo(database){
    for(let i = 0; i < database.length; i++){
        console.log(database[i]);
    }
}

send.addEventListener("click", function(){

    if(nomeInsert.value == "" || idadeInsert.value == " " || emailInsert.value == ""){
        alert("Preencha os campos");
    }else{
        console.log(nomeInsert.value + " e" + idadeInsert.value + " e" + emailInsert.value);
        number++;
        addDatabase(database.length, nomeInsert, idadeInsert, emailInsert, database);
        nomeInsert.value = "";
        idadeInsert.value = ""; 
        emailInsert.value = "";
        //console.log("nome: " + database[number].nome + " " + database[number].idade + " " + database[number].email + " numero agora:" + database.length );
        //console.log(database)      
    }

    holdList = 1
    requisitionsAdd++ //conta a quantidade de requisições de adicionar dados foram realizadas 

});

initDatabaseList(database)

teste.addEventListener("click", function(){
    if(inputInsert.value == ""){
        alert("digita o id que deseja excluir")
    }else{
        console.log("input com valor de" + inputInsert.value)
        deleteNode(database, inputInsert)
        listarTudo(database)
    }
    
    //deleteNode(database, input)
    //  listarTudo(database)
});

list.addEventListener("click", function(){
    
    if(holdList == 1){
        if(requisitionsAdd == 1){

        //for(let i = 0; i < database.length; i++ ){
            let botaoDelete = document.createElement('button');
            let id_number = document.createElement('p');
            let nome = document.createElement('p');
            let idade = document.createElement('p');
            let email = document.createElement('p');
            let salto = document.createElement('hr');
            
            botaoDelete.className = "t"+database[database.length-1].id+ "class"
            let conteudoButton = document.createTextNode("delete");
            let conteudoId = document.createTextNode('id: ' + database[database.length-1].id);
            let conteudoIdade  = document.createTextNode('Idade: ' + database[database.length-1].idade);
            let conteudoNome  = document.createTextNode('Nome: ' + database[database.length-1].nome);
            let conteudoEmail  = document.createTextNode('Email: ' + database[database.length-1].email);
            
            botaoDelete.appendChild(conteudoButton);
            id_number.appendChild(conteudoId)
            nome.appendChild(conteudoNome);
            idade.appendChild(conteudoIdade);
            email.appendChild(conteudoEmail);
            
            listaDiv.appendChild(id_number)
            listaDiv.appendChild(nome);
            listaDiv.appendChild(idade);
            listaDiv.appendChild(email);
            listaDiv.appendChild(botaoDelete);
            listaDiv.appendChild(salto);

        }else{
            for(let s = database.length - requisitionsAdd; s < database.length; s++){
                let botaoDelete = document.createElement('button');
                let id_number = document.createElement('p');
                let nome = document.createElement('p');
                let idade = document.createElement('p');
                let email = document.createElement('p');
                let salto = document.createElement('hr');

                botaoDelete.className = "t"+database[s].id+ "class"
                let conteudoButton = document.createTextNode("delete");
                let conteudoId = document.createTextNode('id: ' + database[s].id);
                let conteudoIdade  = document.createTextNode('Idade: ' + database[s].idade);
                let conteudoNome  = document.createTextNode('Nome: ' + database[s].nome);
                let conteudoEmail  = document.createTextNode('Email: ' + database[s].email);
            
                botaoDelete.appendChild(conteudoButton);
                id_number.appendChild(conteudoId)
                nome.appendChild(conteudoNome);
                idade.appendChild(conteudoIdade);
                email.appendChild(conteudoEmail);
            
                listaDiv.appendChild(id_number)
                listaDiv.appendChild(nome);
                listaDiv.appendChild(idade);
                listaDiv.appendChild(email);
                listaDiv.appendChild(botaoDelete);
                listaDiv.appendChild(salto);
            }
        }       
        holdList = 0;
        requisitionsAdd = 0;
    }else{
        alert("adicione um novo usuario para alterar a lista")
    }

});



