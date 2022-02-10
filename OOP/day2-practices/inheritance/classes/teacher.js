const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience){
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teacherArray) {
    let totalYearsExperience = 0;
    teacherArray.forEach(teacher => {
      if (teacher instanceof Teacher){
        totalYearsExperience += teacher.yearsOfExperience;
      }
    })
    return totalYearsExperience;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
