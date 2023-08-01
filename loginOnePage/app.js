let users = [
    {
        email: "teste",
        password: 123456
    },
    {
        email: "email",
        password: 654321
    }
];

let email = document.getElementById("emailArea");
let password = document.getElementById("passwordArea");
let submit = document.getElementById("submit");
let emailCad = document.getElementById("emailAreaCad");
let passwordCad = document.getElementById("passwordAreaCad");
let submitCad = document.getElementById("submitCad");

function checkDatabase(database, email, password){
    for(let i = 0; i < database.length; i++){
        //console.log("email: " + users[i].email + " e senha: " + users[i].password)
        if(database[i].email == email.value && database[i].password == password.value){
            console.log("acesso permitido");
            return;
        }

    }
    console.log("acesso naõ permitido")
}

function addDatabase(database, email, password){   
    const newElement = 
        {
            email: email.value,
            password: password.value
        }
    
    
    // Adicionando o novo objeto ao array 'database'
    database.push(newElement);
    console.log("usuario cadastrado com sucesso!")


}

submit.addEventListener("click", function(){
    checkDatabase(users, email, password);
});

submitCad.addEventListener("click", function(){
    addDatabase(users, emailCad, passwordCad);
    console.log(users)
})