// Rest parameters
// Parametry dostarczone funkcji która nie określiła ich wcześniej


// ES6
// Można określić potencjalnie dostarczone parametry i od razu przypisać je zmiennej
// tutaj years

function isFullAge6 (...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6 (1990, 1999, 1965, 2016, 1987);

// Przykład 1:
// Określić parametr wejściowy oraz parametry rest

function isFullAge6 (limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6 (18, 1990, 1999, 1965, 2016, 1987);










