function fruits() {
  if (true) {
    var fruit1 = 'Apple'; // function scope
    let fruit2 = 'Kiwi'; // block scope
    const fruit3 = 'Banana'; // block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}

fruits();




if (true){
  var saludo = "hola"     // var no tiene block scope, se tomara como global scope
  let despedida = "chao"
}

console.log(saludo)
console.log(despedida)

/*
var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
// "hola"
console.log(despedida)
// ReferenceError: despedida is not defined
* */



var x = 1
{
  var x = 2
  console.log(x)
}

console.log(x)


/*

# Hoisting
var x = 1
var x = undefined // redeclaración
{
  x = 2 // reasignación
  console.log(x)  // 2
}

console.log(x) // 2
* */




let x = 5
{
  console.log(x) // ReferenceError: Cannot access 'x' before initialization
  let x = 10
}





function example() {
  for (var i =0; i < 10; i++){
    setTimeout(function(){
      console.log(i)
    }, 1000)
  }
}

example()



/*
function example() {
 var i = undefined

  for (i =0; i < 10; i++){
    setTimeout(function(){
      console.log(i)
    }, 1000)
  }
}

example()
* */