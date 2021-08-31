class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Suppprt extends TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        consdol
            .consdol(this.name, 'start a support session');
    }
}

class StudentCare {
    name;
    designation = 'Student Care Web Dev'
    address = 'Bd';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutin(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}
class NeptuneDev {
    name;
    designation = 'Student Care Web Dev'
    address = 'Bd';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}
const aamir = new Suppprt('Aamir Khan ', 'Bd');
const salman = new Suppprt('Solaiman Khan', 'Dubai');
const sharuk = new Suppprt('srk khan', 'Dubai');
const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);