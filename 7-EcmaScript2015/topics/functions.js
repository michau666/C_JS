/*
    1st class functions
    Definition: 
    A programming language is said to have First-class functions when functions in that language 
    are treated like any other variable. For example, in such a language, a function can be passed as an argument 
    to other functions, can be returned by another function and can be assigned as a value to a variable

*/

var years = [1990, 1965, 1937, 2005, 1998];

/*
    Functions accepting other functions (FAOF)
*/

// Generic function
function arrayCalc(arr, fn) {
    var arrRes = [];
    for(i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// Callback functions: called inside other functions
function calculateAge(el) {
    return (2017 - el);
}

function isEven(el) {
    return el % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
 }

 // Output
console.log(years);
console.log(arrayCalc(years, isEven));
console.log(arrayCalc(years, isOdd));

/*
    Functions returning other functions (FROF)
*/

// Generic function with nested functions
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) { return (name + ', what is UX?');}
    } else if (job === 'driver') { 
        return function(name) { return (name + ', what is your speed?');}
    } else {
        return function(name) { return ('Hello ' + name + ', what do you do?');}
    }
}

// Trigger generic fn with nested function argument
var designerQuestion = interviewQuestion('designer')('mike');
var driverQuestion = interviewQuestion('driver')('mike');

// Output
console.log(designerQuestion);
console.log(driverQuestion);

/*
    Immediately invoked function expressions (IIFE)
    Definition:
    It executes immediately after it’s created.It has nothing to do with any event-handler for any events (such as document.onload).
    The first pair of parentheses (function(){...}) turns the code within (in this case, a function) into an expression, 
    and the second pair of parentheses (function(){...})() calls the function that results from that evaluated expression.

    In order to HIDE variables you can apply IIFE, thus make it private.
*/

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);









