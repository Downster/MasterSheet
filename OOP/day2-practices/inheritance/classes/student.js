const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    if (student1.GPA === student2.GPA){
      return 'Both students have the same GPA.'
    } else {
      let bestStudent = (student1.GPA > student2.GPA) ? student1 : student2
      return `${bestStudent.firstName} ${bestStudent.lastName} has the higher GPA.`
    }
  }
}

let newGuy = new Student('bob', 'dole', '45', 'swe', 3.9)
console.log(newGuy);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
