let resultado = 0

function count(){
    let button = document.querySelector("#button")
    let number = document.querySelector("#number")
    


    button.addEventListener('click', ()=>{
        resultado = resultado + 1
        number.innerHTML = resultado
    })
}

function decrease(){
    let button = document.querySelector("#button1")
    let number = document.querySelector("#number")
    


    button.addEventListener('click', ()=>{
        resultado = resultado - 1
        number.innerHTML = resultado
    })

}

function reset(){
    let button = document.querySelector("#button2")
    let number = document.querySelector("#number")
    let value = 0

    button.addEventListener('click', (e)=>{
        
        number.innerHTML = value
        //console.log(e.target.id)
    })

}

