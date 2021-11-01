//Minha solução:

// let frase = ["subi no onibus"]
// let fraseInvertida = frase.reverse()
// let isPalindrome = frase === fraseInvertida
// console.log(isPalindrome)

function checkPalindrome(string) {
  if(!string) return console.log("String do not exist!");
  // if(typeof string !== String) return console.log("ERROR! Insert a string.")

  for(let i = 0; i < string.length; i++) {
    if(string[i] !== string[string.length - 1 - i]) 
      return console.log(false);
  }
  return console.log(string, true);
}

checkPalindrome(3);