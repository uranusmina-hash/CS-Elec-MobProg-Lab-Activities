let studentName = "Mark Justin Concon";
let section = "BSCS-3C";
let age = 26;
console.log("Name:", studentName);
console.log("Section:", section);
console.log("Age:", age);

if (age <= 13) {
    console.log(studentName + " is a child.");
} else if (age <= 18) {
    console.log(studentName + " is a teenager.");
} else {
    console.log(studentName + " is an adult.");
}

for (let i = 1; i <= 3; i++) {
    console.log("Loop A:", i);
}

for (let i = 1; i <= 3; i++) {
    console.log("Loop B:", i * 2);
}

for (let i = 1; i <= 3; i++) {
    console.log("Loop C:", i * i);
}

let subjects = ["OOP", "HCI", "MobileProgramming"];
let grades = [75, 85, 95];
let tasks = ["code", "study", "sleep"];
console.log("Subjects:", subjects[2]);
console.log("Grades:", grades[1]);
console.log("Tasks:", tasks[0]);