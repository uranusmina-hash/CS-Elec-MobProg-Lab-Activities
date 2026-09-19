// 10 const variables
const library = "City Library";
const maxBooks = 5;
const lateFee = 10;
const openTime = "8:00 AM";
const closeTime = "5:00 PM";
const phone = "09123456789";
const city = "Calbayog";
const country = "Philippines";
const librarian = "Maria";
const code = "LIB101";

// 10 let variables
let member = "Mark Justin Concon";
let age = 26;
let book = "JavaScript";
let author = "John Smith";
let price = 300;
let quantity = 2;
let category = "Programming";
let shelf = 5;
let status = "Available";
let year = 2026;

// 5 arrow functions
const greet = () => "Welcome to the library";

const add = (a, b) => a + b;

const double = n => n * 2;

const fine = days => days * lateFee;

const total = (p, q) => p * q;

// 10 template literals
let text1 = `Member: ${member}`;
let text2 = `Age: ${age}`;
let text3 = `Book: ${book}`;
let text4 = `Author: ${author}`;
let text5 = `Price: ${price}`;
let text6 = `Quantity: ${quantity}`;
let text7 = `Category: ${category}`;
let text8 = `Shelf: ${shelf}`;
let text9 = `Status: ${status}`;
let text10 = `Year: ${year}`;

// 3 destructured arrays
let books = ["JavaScript", "Java", "Python"];
let [book1, book2, book3] = books;

let authors = ["John", "Mark", "Anna"];
let [author1, author2, author3] = authors;

let pages = [100, 200, 300];
let [page1, page2, page3] = pages;

// 3 destructured objects
let memberInfo = {
    name: "Mark Justin Concon",
    age: 26
};

let {
    name,
    age: memberAge
} = memberInfo;

let bookInfo = {
    title: "JavaScript",
    price: 300
};

let {
    title,
    price: bookPrice
} = bookInfo;

let libraryInfo = {
    name: "City Library",
    city: "Calbayog"
};

let {
    name: libraryName,
    city: libraryCity
} = libraryInfo;

// 2 arrays using spread
let oldBooks = ["Java", "Python"];
let newBooks = [...oldBooks, "C++"];

let oldAuthors = ["John", "Mark"];
let newAuthors = [...oldAuthors, "Anna"];

// 2 objects using spread
let basicMember = {
    name: "Mark Justin Concon"
};

let fullMember = {
    ...basicMember,
    age: 26
};

let basicBook = {
    title: "JavaScript"
};

let fullBook = {
    ...basicBook,
    price: 300
};

// 2 arrays using map
let bookPrices = [100, 200, 300];

let doublePrices = bookPrices.map(
    n => n * 2
);

let bookPages = [100, 200, 300];

let doublePages = bookPages.map(
    n => n * 2
);

// 2 arrays using filter
let prices = [100, 200, 300, 400];

let expensiveBooks = prices.filter(
    n => n >= 300
);

let pageCounts = [50, 100, 200, 300];

let longBooks = pageCounts.filter(
    n => n >= 200
);

// 2 objects using optional chaining
let memberAccount = {
    profile: {
        username: "Mark"
    }
};

let username = memberAccount?.profile?.username;

let borrowedBook = {
    details: {
        title: "JavaScript"
    }
};

let borrowedTitle =
    borrowedBook?.details?.title;

// Output
console.log(greet());

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);
console.log(text5);
console.log(text6);
console.log(text7);
console.log(text8);
console.log(text9);
console.log(text10);

console.log(book1);
console.log(author1);
console.log(page1);

console.log(name);
console.log(title);
console.log(libraryName);

console.log(newBooks);
console.log(newAuthors);

console.log(fullMember);
console.log(fullBook);

console.log(doublePrices);
console.log(doublePages);

console.log(expensiveBooks);
console.log(longBooks);

console.log(username);
console.log(borrowedTitle);