// Atividade 1: Alunos Aprovados
// Crie uma função que recebe o array alunos e um número que irá representar a média final;
// Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

//Minha solução:
const alunos = [
 {
   nome: "Irineu",
   nota: 7
 },
 {
   nome: "Katrina",
   nota: 9
 },
 {
  nome: "Johnson",
  nota: 3
 },
 {
   nome: "Lucas",
   nota: 5
 },
 {
   nome: "Maria",
   nota: 6
 }
]

function alunosAprovados(arr, media) {
  let aprovados = [];

  for(i = 0; i < arr.length; i++) {
    
    const {nome, nota} = arr[i];

    if(nota >= media) {
      aprovados.push(nome)
    }
  }
  return console.log(aprovados);
}

alunosAprovados(alunos, 6);