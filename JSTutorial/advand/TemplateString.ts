// Template String and other string functions in ES6/ES2015
// let str1 = 'hello\n' + 'world';
// let str2 = "hello";
// let str3 = `hello
//
// world`;

// let x = `bond`;
// let bondlin = `my name is ${x},James`;
// console.log(bondlin);

let tagged = function (strArray, ...vals) {
    console.log(strArray);
    console.log(vals);
};

let one = 1;
let two = 3;
tagged`adding ${one} and ${two} give me ${one + two}`;