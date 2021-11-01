const person = {
  name: "Lucas",
  lastname: "Alves",
  fullName: function() {return console.log(`${this.name} ${this.lastname}`)},
  id: 1
}

person.fullName("Irineu")