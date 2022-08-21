var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
// "hola"
console.log(despedida)
// ReferenceError: despedida is not defined




//


console.log( saludar() )

function saludar() {
  return "Hola"
}


//


var saludar = undefined

console.log( saludar() ) // TypeError: saludar is not a function

saludar = function saludar() {
  return "hola"
}