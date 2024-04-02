// funkcja strzałkowa do podwajana liczby
const doubleNumbers = (numbers) => numbers.map((number) => number * 2);

// Przykładowe użycie funkcji, stworzona tablica numbers i tablica zwracajaca
// podwojone liczby z tablicy numbers czyli doubledNumbers
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);

// wywołanie funkcji
console.log("Oryginalna tablica:", numbers);
console.log("Tablica podwojona:", doubledNumbers);

////////////////////////////////////////////////////////////////////////////////////////CZESC2

//tablica students
const students = [
  { name: "Mango", score: 83, course: "IT" },
  { name: "Poly", score: 59, course: "IT" },
  { name: "Ajax", score: 37, course: "IT" },
  { name: "Kiwi", score: 94, course: "IT" },
  { name: "Houston", score: 64, course: "IT" },
];

//funkcja do wyciagniecia samych imion studentów
const studentsNames = students.map((student) => student.name);

// wywołanie
console.log(studentsNames);
console.log(students);
