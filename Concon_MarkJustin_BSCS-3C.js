let schoolName = "NWSSU";
let maxUnits = 3;
let open = true;

const info = { campus: "NWSSU-CCIS", semester: "1st Sem"};
const codes = { mobProg: "Mobile Programming", ds: "CS303"};

class Person{
    #name;
    constructor(name){
        if(new.target === Person) throw new Error("abstract");
        this.#name = name;
    }
    getName() { return this.#name; }
    introduce() { throw new Error("overide me"); }
}

class Student extends Person{
    #subjects = [];
    constructor(name, id){
        super(name);
        this.id = id;

    }
    introduce(){ return `Hi, I'm ${this.getName()} (${this.id}).`; }
    enroll(subject){
        if(this.#subjects.length >= maxUnits) return "max load";
        if(!subject.hasSlot()) return `${subject.title} full`;
        subject.takeSlot();
        this.#subjects.push(subject);
        return `enrolled in ${subject.title}`;
    }
    listSubjects(){ return this.#subjects.map(s => s.title); }
}

class Faculty extends Person{
    constructor(name, empId){
        super(name);
        this.empId = empId;
    }
    introduce(){ return `I'm ${this.getName()}, faculty (${this.empId}).`; }
}

class Subject{
    #slots;
    constructor(title, slots){
        this.title = title;
        this.#slots = slots;
    }
    hasSlot(){ return this.#slots > 0; }
    takeSlot(){ this.#slots--; }
}

let titles = [codes.mobProg, codes.ds, "CS204"];
let logs = [];
let students = [];

const faculty = new Faculty("Yuri Ortiz", "FAC-010");
const s1 = new Student("Mark Justin Concon", "19-01059");
const s2 = new Student("Francis Mancol", "20-01458");
const subj1 = new Subject(titles[0], 1);
const subj2 = new Subject(titles[1], 2);

students.push(s1, s2);

if(open) logs.push(`Enrollment open at ${info.campus}, ${info.semester}.`);
else logs.push("closed");

for(let i =0; i < students.length; i++)
    logs.push(students[i].enroll(subj1));

if(subj2.hasSlot()) logs.push(s1.enroll(subj2));
else logs.push(`${subj2.title} full`);

let full = 0, i = 0;
while (i < [subj1, subj2].length){
    if(![subj1, subj2][i].hasSlot()) full++;
    i++;
}

if(full > 0) logs.push(`${full} subject(s) full`);
else logs.push("none full");

console.log(faculty.introduce());
console.log(s1.introduce());
logs.forEach(l => console.log(l));
console.log(`${s1.getName()})'s subjects:`, s1.listSubjects());