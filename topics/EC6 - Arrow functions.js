// Arrow functions

// Postać funckcji EC5 poniżej zamieniamy na formę EC6
function (a, b, c) {
    // line 1
    // line 2
} 

// EC6

// Jeśli jeden argument oraz jedna linia kodu
(a) => // line 1

// Jeśli wiele argumentów oraz wiele linii kodu
(a, b, c) => {
    // line 1
    // line 2
}



// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function () {
//             var str = 'This box number' + self.position + ' and it is ' + self.color;
//             alert(str);
//         })
//     }
// };

// box5.clickMe();

// ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             let str = 'This box number' + this.position + ' and it is ' + this.color;
//             alert(str);
//         })
//     }
// };

// box6.clickMe();

// Example 2

// Function constructor
function Person(name) {
    this.name = name;
}

// ES5 
// Person.prototype.myFriends5 = function (friends) {
//     var arr = friends.map (function (el) 
//     {
//         return this.name + ' is friend with ' + el;
//     }.bind(this));

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends5 = function (friends) {
    let arr = friends.map (el => `${this.name} is friend with ${el}`);

    console.log(arr);
}

let friends = ['Heniek', 'Filip', 'Andrzej'];
new Person('Mike').myFriends5(friends);











