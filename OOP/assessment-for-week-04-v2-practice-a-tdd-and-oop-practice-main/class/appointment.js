const Doctor = require("./doctor")
const User = require("./user")
const Patient = require('./patient')

class Appointment {
    constructor(doctor, patient, month, date, year, hour) {
        this.doctor = doctor
        this.patient = patient
        this.month = month;
        this.date = date;
        this.year = year;
        this.hour = hour;
        this.checkDate();
        this.checkInsurance();
        this.checkTime();
        this.checkIfAvaliable([month, date, year, hour])
    }

     addAppointment(appt) {
        this.doctor.appointments.push(appt);
    }
    checkDate() {
        let today = new Date();
        let currentMonth = today.getMonth();
        let currentDay = today.getDate();
        let currentYear = today.getFullYear();
        if (currentMonth > this.month || currentDay > this.date || currentYear > this.year) {
            throw new AppointmentError('Appointment must be in the future')
        }
    }

    checkTime() {
        if (this.hour < 8 || this.hour > 17) {
            throw new AppointmentError('Invalid time slot')
        }
    }

    checkInsurance() {
        if (!this.doctor.acceptsInsurance(this.patient.insurance)) {
            throw new AppointmentError("Patient's insurance not supported")
        }
    }

    checkIfAvaliable(appointment) {
        if (!(this.doctor.canAcceptAppointment(appointment))) throw new AppointmentError("Invalid time slot")
    }






}

class AppointmentError extends Error {
    constructor(message, ...params) {
        super(...params)
        this.message = message;
    }


}






module.exports = { Appointment, AppointmentError }
