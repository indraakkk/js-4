//Javascript block
let a = 1; {
    let a = 2;
}
console.log(a += " This is from let");

var b = 1; {
    var b = 3;
    b += " this is from var"
}
console.log(b);


const c = 1; {
    const c = 2;
}
console.log(c);

// Javascripr conditional
let point = 91; //harcoded to 91 point for A

if (point >= 90) {
    console.log("A");
} else if (point >= 80) {
    console.log("B");
} else if (point >= 70) {
    console.log("C");
} else if (point >= 60) {
    console.log("D");
} else {
    console.log("F"); //repetition/loop, waiting for its condition
}


// Javascript switch case statement
var Animal = "Panther"; //harcoded Ant as input data
switch (Animal) {
    case "Ant":
    case "Horse":
    case "Panther":
    case "Elephant":
        console.log("This animal inspired by avanger movie.");
        break;
        // case "Dinosaur":
    default:
        console.log("This animal from jurassic park");
}

//javascript for
// melakukakn iterasi kurang dari 5, yaitu 0,1,2,3,4
function fordata() {
    var text = "";
    for (i = 0; i < 5; i++) {
        text += "This is number " + i + "<br>";
    }
    document.getElementById("forData").innerHTML = text;
}


// javascript for in
// dapat melihat data dalam array
function fullName() {
    var person = {
        fName: "Indra",
        lName: "Putra",
        age: 25
    };
    var text = "";
    var i;
    for (i in person) {
        text += person[i] + " ";
    }
    document.getElementById("name").innerHTML = text;
}

// javascript while
// waiting data from i then print/do something
function wdata() {
    var numb = "";
    var i = 0;
    while (i < 5) {
        numb += "The number is " + i + "<br>";
        i++;
    }
    document.getElementById("wData").innerHTML = numb;
}

// javascript do while
function dwdata() {
    var text = "";
    var i = 0;
    do {
        text += "The number is " + i + "<br>";
        i++;
    } while (i < 5);
    document.getElementById("dwData").innerHTML = text;
}