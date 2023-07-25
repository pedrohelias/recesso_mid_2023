let add = document.getElementById("buttonSoma");
let remove = document.getElementById("buttonSub");
let reset = document.getElementById("buttonReset");
let number = document.getElementById("number");
let value = 0;
number.style.color = "blue"

add.addEventListener("click", function(){
    value++;
    if(checkParity(value) == "par"){
        number.style.color = "blue"
    }else{
        number.style.color = "red"
    }
    number.innerHTML = value;
})

remove.addEventListener("click", function(){
    value--;
    if(checkParity(value) == "par"){
        number.style.color = "blue"
    }else{
        number.style.color = "red"
    }
    number.innerHTML = value;
})

reset.addEventListener("click", function(){
    value = 0;
    if(checkParity(value) == "par"){
        number.style.color = "blue"
    }else{
        number.style.color = "red"
    }
    number.innerHTML = value;
})


function checkParity(value){
    let calculus = value%2
    if(calculus == 0){
        return "par"
    }else{
        return "impar"
    }

}