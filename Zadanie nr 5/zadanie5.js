// Słowo kluczowe this w JavaScript odnosi się do obiektu,
// w którym jest używane w danym momencie.
// Jest to przydatne w programowaniu obiektowym,
// ponieważ umożliwia odwoływanie się do właściwości i metod obiektu,
// w którym aktualnie pracujesz.

////////PRZYKŁADY////////////////////////////////////////////////////////

// Przyklad w metodzie obiektu

const person = {
  name: "Michał",
  greet() {
    console.log("Cześć " + this.name);
  },
};

person.greet(); // Hello Michał
// this odnosi sie do obiektu person i jego własćiwości name wewnątrz metody 'greet'

// Przykład w konstruktorze, w którym zostanie utworzony obiekt

function PhoneNumber(name, number) {
  this.name = name;
  this.number = number;
  this.getNumber = function () {
    return "Numer telefonu " + this.name + " to " + this.number;
  };
}

const myNumber = new PhoneNumber("Michał", "111222333");
console.log(myNumber.getNumber()); // Numer telefonu Michał to 111222333

// this odnosi się do obiektu, który zostanie utworzony przez konstruktor PhoneNumber
// pozwoli to przypisywać właściwości name i number oraz metode getNumber do nowego obiektu PhoneNumber

// Zastosowanie praktyczne

// tworzymy obiekt person z właściwością username
const person1 = {
  username: "Maciej",
  // tworzymy metodę showName, używamy słowa kluczowego this by odwołaś się do username z obiektu person1
  showName() {
    console.log("Moje imię to " + this.username);
  },
};

// wywołanie metody showName()
person1.showName(); //  Moje imię to Maciej

// Przykład rozszerzony

const bookShelf = {
  authors: [],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

// dodawanie autorów do bookShelf

bookShelf.addAuthor("Stefan Żeromski");
bookShelf.addAuthor("Norman Devis");
bookShelf.addAuthor("Thomas Harris");

// wywołanie listy autorów

console.log(bookShelf.getAuthors());
