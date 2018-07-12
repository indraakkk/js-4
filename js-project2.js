// ========== javascript project 2 ===========

// level 00
const guests1 = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Josephine",
    "Mr. Joseph",
    "Mrs. Paula",
    "Mr. Hakim",
    "Mr. Paul"
];

const guests2 = [
    "Mr. Indra",
    "Mrs. Dilla",
    "Mrs. Welly",
    "Mr. Wondo",
    "Mr. Jamale"
];

const allguest = guests1.concat(guests2);

//----

const listPeople = (array) => {
    array.forEach(name => {
        console.log(name);
    });
}
// level 01
const filterMister = (array = "Not Our Guest") => {
    const filtered = array.filter(item => item.charAt(2) !== "s");
    console.log(filtered);
};

const filterMistress = (array) => {
    const filtered = array.filter(item => item.charAt(2) === "s");
    console.log(filtered);
};

// level 02
const tagGender = (array) => {
    array.forEach(item => {
        if (item.charAt(2) !== "s") {
            console.log(`${item} (male)`);
        } else {
            console.log(`${item} (female)`);
        }
    });
};

// level 3 & 4
const searchNameInData = (data, name) => {
    data.push("Mr. Haidar")
    const searching = data.filter(item =>
        item.toLowerCase().includes(name.toLowerCase())
    );
    console.log(searching);
};

// level 5
const member = [
    "Mr. Fahri",
    null,
    undefined,
    "Mr. Abdul",
    24,
    "Mrs. Josephine",
    "Mr. Joseph",
    "Mr. Paul",
    32,
    "Mr. Paula",
    7,
    22,
    "Mr. Hakim"
];

// const memberlist = (members) => {
//     members.forEach(item => {
//         // console.log(typeof item == 'string')
//     if (typeof item == "string") {
//         console.log(item);
//     }
// });
// }

const filterMemberList = (members) => {
    members.forEach(item => {
        // console.log(typeof item == "string");
        if (typeof item == "string") {
            console.log(item)
        }
    });
}

const filterMember = (members) => {
    const filtered = members.filter(item => typeof item === "string");
    console.log(filtered);
}