class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(peopleArray) {
    let allPeople = true;
    if (Array.isArray(peopleArray)) {
      for (let i = 0; i < peopleArray.length; i++) {
        if (!(peopleArray[i] instanceof Person)) {
          allPeople = false;
          break;
        }
      }
      if (!allPeople) {
        console.log('All items in array must be Person class instances.')
      } else {
        peopleArray.forEach(person => person.introduce())
      }
    } else {
      console.log('introducePeople only takes an array as an argument.')
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
