// Spread operator
// (funkcjonalność separowania zmiennej)


// Przykład 1:
// Załóżmy, że napisaliśmy funkcję przyjmującą 4 argumenty
// Mając tablicę ich wartości, należy zasilić ją nimi.


function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

const ages = [18, 30, 12, 21];

// ES5
var sum1 = addFourAges.apply(null, ages);

// ES6
const sum2 = addFourAges(...ages);

console.log('Sum1: ' + sum1 + '. Sum2: ' + sum2);

// Przykład 2:
// Połączyć 2 tablice w jedną dodając trzeci element między nimi
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Mike', ...familyMiller];

console.log(bigFamily);

// Przykład 3:
// a) Znaleźć elementy h1 i zapisać je jako zmienną h
// b) Znaleźć wszystkie elementy box i zapisać je jako zmienną boxes
// c) Połączyć 2 zestawy w jedną zmienną all
// d) Zmienić kolor czcionki wszystkim jednocześnie

// a)
const h = document.querySelector('h1');

// b)
const boxes = document.querySelectorAll('.box');

// c)
const all = [h, ...boxes];

// d) Przekształcenie node w tablicę po której można iterować
Array.from(all).forEach(cur =>
    cur.style.color = 'grey'
);






















