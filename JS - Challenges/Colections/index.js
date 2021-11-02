const myMap = new Map();

myMap.set('blue', 'color'); //Insere o dado na forma chave:valor
myMap.delete('blue') //Deleta a chave
console.log(myMap.get('blue')); //Retorna o valor ao informar a chave

const mySet = new Set();

mySet.add(10);
mySet.add(5);
console.log(mySet.has(3))
mySet.delete(10)