function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: "Irineu",
  idade: 23
}
const pessoa2 = {
  nome: "Katrina",
  idade: 19
}

const pessoa3 = {
  nome: "Johnson",
  idade: 17
 }

const animal = {
  nome: "Cachorro Caramelo",
  idade: 10
}

// console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.apply(pessoa2, [30]));
