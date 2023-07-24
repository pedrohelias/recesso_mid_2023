let add = document.getElementById("buttonSoma");
let remove = document.getElementById("buttonSub");
let reset = document.getElementById("buttonReset");
let number = document.getElementById("number");
let value = 0;

add.addEventListener("click", function(){
    value++;
    number.innerHTML = value;
})

remove.addEventListener("click", function(){
    value--;
    number.innerHTML = value;
})

reset.addEventListener("click", function(){
    value = 0;
    number.innerHTML = value;
})