// Atividade 2: Sets
// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

//Minha solução:

const myArr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(arr) {
  const mySet = new Set(arr);

  return [...mySet];
}

console.log(uniqueValues(myArr));