const users = [
    {
        email: "pedrohelias95@hotmail.com",
        password: 170995,
    },
    {
        email: "anezita16@gmail.com",
        password: 123456,
    },
]

let email = document.getElementById("emailArea");
let password = document.getElementById("passwordArea");
let submit = document.getElementById("loginButton");
let registration = document.getElementById("createRegistration");

function checkUsers(users, email, password){
    for(let i = 0; i < users.length; i++){
        if(users[i].email == email.value && users[i].password == password.value){
            console.log("login realizado com sucesso");
            return;
        }
    }
    console.log("acesso não autorizado");
}

function createAccount(users, email, password){
    email = emailReg.value;
    password = passwordReg.value;

    const newElement = {
        email: email,
        password: password,
    };
    
    // Adicionando o novo objeto ao array 'database'
    users.push(newElement);
}

function helloworld(){
    console.log("hello")
}

submit.addEventListener("click", function(){
    checkUsers(users, email, password);
})

//redirecionar para a pagina de cadastro
registration.addEventListener("click", function(){
    window.location = "pageReg/pageReg.html"
})

