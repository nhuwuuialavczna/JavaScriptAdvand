// Template String and other string functions in ES6/ES2015
// let str1 = 'hello\n' + 'world';
// let str2 = "hello";
// let str3 = `hello
//
// world`;
// let x = `bond`;
// let bondlin = `my name is ${x},James`;
// console.log(bondlin);
var tagged = function (strArray) {
    var vals = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        vals[_i - 1] = arguments[_i];
    }
    console.log(strArray);
    console.log(vals);
};
var one = 1;
var two = 3;
(_a = ["adding ", " and ", " give me ", ""], _a.raw = ["adding ", " and ", " give me ", ""], tagged(_a, one, two, one + two));
var _a;
