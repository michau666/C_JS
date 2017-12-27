
/*
    Primitives hold value until they are changed directly
    wherease objects get the available current state  
*/

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
}

var obj2 = obj1;
obj1.age = 1;
console.log(obj1.age);
console.log(obj2.age);

/*
    Functions WITH parameters can change object properties but cannot change primitives.
*/

var age = 20;
var obj3 = {
    name: 'mike',
    city: 'Barcelona',
}

function change(a, b) {
    a = 30;
    b.city = 'Lisbon';
}

change(age, obj3);

console.log(age);
console.log(obj3.city);