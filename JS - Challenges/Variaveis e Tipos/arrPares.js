/* Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1 */

//Minha solução:
function arrayEven(arr) {
  if(!arr) return console.log(-1);
  if(!arr.length) return console.log(-1);

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      console.log(`Substituindo ${arr[i]} por 0...`)
      arr[i] = 0;
    }else if (arr[i] === 0) {
      console.log("O número já é igual a 0")
    }
  }
  console.log(arr)
}
arrayEven(null)
