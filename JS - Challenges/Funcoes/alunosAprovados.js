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