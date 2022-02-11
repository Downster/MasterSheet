const User = require('./user')
class Doctor extends User{
    constructor(name, month, day, year, hour) {
    super(name, month, day, year, hour)
    this.insurance = []
    this.appointments = [];
    }

    addInsurance(insurance) {
        this.insurance.push(insurance);
    }

    canAcceptAppointment(appointment){
        let canDo = true;
        for (let i = 0; i < this.appointments.length; i++){
            if ((Doctor.compareArray(appointment, this.appointments[i]))){
                canDo = false;
                break;
            }
        }
        this.addAppointment(appointment);
        return canDo;

    }

    addAppointment(appointment) {
        this.appointments.push(appointment);
    }

    acceptsInsurance(insurance) {
        return this.insurance.includes(insurance);
    }

    removeInsurance(insurance) {
        this.insurance = this.insurance.filter(typesOfInsurance => typesOfInsurance !== insurance)
    }

    static compareArray(a, b) {
            if (a === b) return true;
            if (a == null || b == null) return false;
            if (a.length !== b.length) return false;

            // If you don't care about the order of the elements inside
            // the array, you should sort both arrays here.
            // Please note that calling sort on an array will modify that array.
            // you might want to clone your array first.

            for (var i = 0; i < a.length; ++i) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        }



}

module.exports = Doctor

//30 min so far
