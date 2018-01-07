/*
    Function can access variables defined outside the function.
    
    Closures are generally cleaner
*/

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementPL = retirement(66)(1985);


// Challenge rewrite interviewQuestion into Closure

// Generic function with nested functions
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            return (name + ', what is UX?');
        } else if (job === 'driver') { 
            return (name + ', what is your speed?');
        } else {
            return ('Hello ' + name + ', what do you do?');
        }
    }
}

// Trigger generic fn with nested function argument
var designerQuestion = interviewQuestion('designer')('mike');
var driverQuestion = interviewQuestion('driver')('mike');

// Output
console.log(designerQuestion);
console.log(driverQuestion);