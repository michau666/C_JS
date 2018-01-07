
/* 
    1. OBJECT LITERAL
    Basic method for object creation - in complex projects very impractical/illegible
*/
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};


/*
    2. FUNCTION CONSTRUCTOR
    Popular in practice. Offers clear way for defining separate methods/properties in protote layer.
*/
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Instanciation
var jane = new Person ('Jane', 1960, 'driver');
var mike = new Person ('Mike', 1985, 'designer');
var john = new Person ('John', 1990, 'teacher');

// Prototyping
Person.prototype.calculateAge = function() { console.log(2017 - this.yearOfBirth);} 
Person.prototype.lastName = 'Czarnecki';

// Calling functions & proterties
jane.calculateAge();
mike.calculateAge();
john.calculateAge();

console.log(mike.lastName);

/*
    3. OBJECT.CREATE
    This way is a bit strange for beginners and not clear syntactically
    Basically the same as method #2
*/

var personProto = {
    calculateAge: function() { console.log(2017 - this.yearOfBirth);}
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1985;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1990},
        job: {value: 'designer'},
    }
);