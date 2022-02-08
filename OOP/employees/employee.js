class Employee {
    constructor(name, salary, title, boss) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;
        if (boss && boss !== null) boss.addEmployee(this);

    }

    bonus(multiplier) {
        let bonus = 0;
        if (!(this instanceof Manager)) {
            bonus = this.salary * multiplier
        } else {
            bonus = (this.salary + this.calculateEmployeeSalary()) * multiplier;
        }
        return bonus;
    }

}

class Manager extends Employee {
    constructor(name, salary, title, boss) {
        super(name, salary, title, boss);
        this.employees = []
    }

    addEmployee(employee) {
        this.employees.push(employee);
        return employee;
    }

    calculateEmployeeSalary() {
        return this.employees.reduce((output, employee) => {
            if (employee instanceof Manager) {
                return output += employee.salary + employee.calculateEmployeeSalary()
            } else {
                return output += employee.salary;
            }
        }, 0)
    }

}

module.exports = { Employee, Manager }
