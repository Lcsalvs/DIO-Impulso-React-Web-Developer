/* ## Atividade

Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2

Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20. */

// Minha solução:

function compNum(num1, num2) {
  let isEqual = (num1 === num2) ? `Os numeros ${num1} e ${num2} são iguais` : `Os numeros ${num1} e ${num2} não são iguais`;
  let sum = Number(num1 + num2);
  let a = (sum > 10) ? "é maior que 10" : "é menor que 10";
  let b = (sum > 20) ? "é maior que 20" : "é menor que 20";
  console.log(`${isEqual}. Sua soma é ${sum}, que ${a} e ${b}.`)
}
try { 
  compNum();
}catch {
  console.log("Defina dois números!");
}