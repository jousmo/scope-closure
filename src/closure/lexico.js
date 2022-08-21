function padre() {
  let numero = 5
  function hijo(){
    numero = numero + 1
    return numero
  }

  return hijo
}

const closure = padre()

//


function contador ( i ) {
  let acumulador = i
  function aumentar () {
    console.log(acumulador);
    acumulador = acumulador + 1
  }
  return aumentar
};

const closure = contador(1)
closure() // 1
closure() // 2
closure() // 3

const closure2 = contador(10);
closure2() // 10
closure2() // 11

closure() // 4