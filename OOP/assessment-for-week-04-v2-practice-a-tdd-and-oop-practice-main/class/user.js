class User {
    constructor(name, month, day, year){
        this.name = name;
        this.month = month;
        this.day = day;
        this.year = year;
    }

    getBirthday() {
        let date = new Date(this.year, this.month - 1, this.day);
        return date.toDateString();
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.year;

        if (today.getMonth() < 9 ||
            today.getMonth() === 9 && today.getDate() < 17) {
            age--;
        }

        return age;
    }
}


module.exports = User
