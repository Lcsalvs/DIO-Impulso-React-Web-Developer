// IIFE - Immediately Invoked Function Expression
// (
//   function() {
//     let name = "DIO";
//     return console.log(name);
//   }
// )();

// Rest Operator
// function checkLength(...args) {
//   console.log(args.length)
// }
// checkLength()

//FOR IN
function getValueOfProp(obj) {
  for(prop in obj) {
    console.log(obj[prop])
  }
}

const myObj = {
  name: "Lucas",
  age: 22,
  city: "Vila Velha"
}

getValueOfProp(myObj)