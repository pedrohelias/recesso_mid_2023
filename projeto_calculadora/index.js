function soma(){
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;    
    let resultadonumber = parseFloat(num1) + parseFloat(num2)
    
    resultado = "o valor é: " + resultadonumber 
    document.querySelector(".resultado").innerHTML = resultado
    
}

function subtracao(){
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;    
    let resultadonumber = parseFloat(num1) - parseFloat(num2)
    
    resultado = "o valor é: " + resultadonumber 
    document.querySelector(".resultado").innerHTML = resultado


}

function multiplicacao(){
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;    
    let resultadonumber = parseFloat(num1) * parseFloat(num2)
    
    resultado = "o valor é: " + resultadonumber 
    document.querySelector(".resultado").innerHTML = resultado


}

function divisao(){
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;    
    let resultadonumber = parseFloat(num1) / parseFloat(num2)
    
    resultado = "o valor é: " + resultadonumber 
    document.querySelector(".resultado").innerHTML = resultado

}

function jokenpo(){
    let userValue = document.querySelector(".jokenpo").value
    let opcoes = ["pedra", "papel", "tesoura"]
    let randomCPU = opcoes[Math.floor(Math.random() * opcoes.length)]
    document.querySelector(".resultadoArmazena").innerHTML = "usuario: " + userValue + " | CPU: " + randomCPU

}