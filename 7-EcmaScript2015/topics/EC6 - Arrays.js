// Arrays

// Tryb pracy ES6

// Przykład 1: 
// a) Znaleźć wszystkie klasy z nazwą 'box'
// b) Zamienić kolor tła na niebieski
// c) Zamienić wszystkie nazwy na 'zmieniłem się na niebieski' jeśli wcześniej nie były niebieskie

// a)
const boxes = document.querySelectorAll('.box'); 

// b)
const boxesArr6 = Array.from(boxes)
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// c)
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {continue;}
    cur.textContent = 'I changed to blue';
}


// Przykład 2:
// Znajdź PIERWSZE wystąpienie wieku conajmniej 18 lat
// a) Pokaż pozycję w tabeli
// b) Pokaż wartość w tabeli

const ages = [12, 17, 8, 21, 22, 11];

// a)
console.log(ages.findIndex(cur => cur >= 18));

// b)
console.log(ages.find(cur => cur >= 18));







