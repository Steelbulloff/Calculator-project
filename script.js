let calculator = document.querySelector(".calculator")
function del(){
    screen.innerHTML = "";
}
function plus(){
    screen.innerHTML+= `+`;
}
function minus(){
    screen.innerHTML+= `-`;
}
function divided(){
    screen.innerHTML+= `/`;
}
function multyply(){
    screen.innerHTML+= `*`;
}
function equally(){
    screen.innerHTML= eval(screen.innerHTML);
}
function createCalculator(){
    calculator.innerHTML += `<div type="content" class="screen"></div>`
    let createNumbers = function(){
        for(let x=0;x<10;x++){
            calculator.innerHTML+= `<div class="number">${x}</div>`
        }
    }
    let createSymbols = () =>{
        calculator.innerHTML+= `<div class="symbols" onclick = "plus()">+</div>`
        calculator.innerHTML+= `<div class="symbols" onclick = "minus()">-</div>`
        calculator.innerHTML+= `<div class="symbols" onclick = "divided()">/</div>`
        calculator.innerHTML+= `<div class="symbols" onclick = "multyply()">*</div>`
        calculator.innerHTML+= `<div class="symbols" onclick = "equally()">=</div>`
        calculator.innerHTML+= `<div class="symbols" onclick = "del()">delete</div>`

    }
    createNumbers()
    createSymbols()
}
createCalculator()
let screen = document.querySelector(".screen")
let numbers = document.querySelectorAll(".number")
let symbols = document.querySelectorAll(".symbols")
function addtoscreen(zaloopa){
    screen.innerHTML+=`${zaloopa}`
}
function usenumber(){
    numbers.forEach(element => {
        element.addEventListener(`click`,()=> addtoscreen(element.innerHTML))
    });
}
function usesymbol(){
    Symbol.forEach(element => {
        element.addEventListener(`click`,()=> addtoscreen(element.innerHTML))
    });
}
usenumber()
