// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.

const { ask } = require('../helpers/input');

async function main() {
  const num1 = Number(await ask('Ingresa el primer número: '));
  const num2 = Number(await ask('Ingresa el segundo número: '));

  const suma = num1 + num2;
  // TODO: Implementar la resta, multiplicación y división

  console.log('Suma:', suma);
  // TODO: Mostrar el resultado de la resta, multiplicación y división

  const resta = num1 - num2;

  console.log('Resta:', resta);


  const multiplicacion = num1 * num2;

  console.log('Multiplicación:', multiplicacion);


  const division = num1 / num2;

  console.log('División:', division);



}

main();
