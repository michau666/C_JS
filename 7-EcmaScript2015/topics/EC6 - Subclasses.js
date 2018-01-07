// Subclasses

// Declare class
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

// const john6 = new Person6 ('John', 1990, 'teacher');
// john6.calculateAge();

// Inheritance
class Athlete6 extends Person6 {
    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal () {
        this.medals++;
        console.log(this.medals);
    }
}

const JohnAthlete6 = new Athlete6 ('John', 1990, 'swimmer', 3, 10);

JohnAthlete6.wonMedal();
JohnAthlete6.calculateAge();
