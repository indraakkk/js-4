// ============== javascript 5 ===============
// filter data example
function filterdata() {
    const words = [
        "spray",
        "limit",
        "elite",
        "exuberant",
        "destruction",
        "present",
        "happy"
    ];
    let longWords = words.filter(word => word.length > 6);
    document.getElementById("filterLong").innerHTML = longWords;
}

function filterdata2() {
    const words = [
        "spray",
        "limit",
        "elite",
        "exuberant",
        "destruction",
        "present",
        "happy"
    ];
    let shortWords = words.filter(word => word.length < 6);
    document.getElementById("filterShort").innerHTML = shortWords;
}

// map example
var oddNumber = [1, 3, 5, 7, 9];
const mapOddNumber = oddNumber.map(x => x * 2);
console.log(mapOddNumber);

var mixNumber = [2, 3, 5, 8, 9];
const mapMixNumber = mixNumber.map(x => x * 2);
console.log(mapMixNumber);

var evenNumber = [2, 4, 6, 8, 10];
const mapEvenNumber = evenNumber.map(x => x * 2);
console.log(mapEvenNumber);

// find example
var found = mixNumber.find(function (x) {
    return x < 4;
});
console.log(found);



// for each example
const names = [
    "indra",
    "dilla",
    "welly",
    "wondo",
    "jamale"
]

names.forEach(name => {
    console.log(name);
});
