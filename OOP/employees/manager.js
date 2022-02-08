// const { Employee } = require('./employee')

// class Manager extends Employee{
//     constructor(name, salary, title, boss){
//         super(name, salary, title, boss);
//         this.employees = []
//     }

//     addEmployee(employee) {
//         this.employees.push(employee);
//         return employee;
//     }

//     calculateEmployeeSalary(){
//         let total = 0;
//         this.employees.forEach((employee) => {
//             if (employee instanceof Manager){
//                 employee.calculateEmployeeSalary()
//             } else {
//                 total += employee.salary;
//             }
//         })
//         return total;
//     }

// }

// module.exports = { Manager }

// let annie = new Manager('Annie', 100000, 'Director')
// let alvy = new Employee('Alvy', 75000, 'Analyst', annie)
// console.log(annie);
