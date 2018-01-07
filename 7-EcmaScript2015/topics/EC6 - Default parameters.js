// Default parameters
// Przypisywanie obiektom domyślnych wartości

function SmithPerson (firstName, yearOfBirth, lastName = 'Smith', nationality = 'spanish') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson ('John', 1990);
var emily = new SmithPerson ('Emily', 1922);

console.log(john);
console.log(emily);














