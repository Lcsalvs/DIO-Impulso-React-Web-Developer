// Atividade 1: Maps
// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

// Crie uma função getAdmins que recebe um Map;
// Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
// Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.


//Minha solução:
function getAdmins(map) {
  const admins = [];

  for([key, value] of map) {
    if(value === 'Admin') {
      admins.push(key)
    }
  }
  return admins;
}

const users = new Map();

users.set('Lucas', 'Admin');
users.set('Ishikawa', 'Admin');
users.set('Nishida', 'Admin');
users.set('Irineu', 'User');

console.log(getAdmins(users));