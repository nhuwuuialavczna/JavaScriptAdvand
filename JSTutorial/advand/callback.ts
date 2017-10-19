// ex 1:
// let x = function () {
//     console.log("I am called from inside in function !");
// };
//
// let y = function (callback) {
//     console.log('do something');
//     callback();
// };
//
// y(x);
//
// let calc = function (num1, num2, calcType) {
//     if (calcType === 'add') {
//         return num1 + num2;
//     } else if (calcType === 'mul') {
//         return num1 * num2;
//     }
// };
//
// console.log(calc(1, 2, 'add'));

// ex 2:
// let add = function (a, b) {
//     return a + b;
// };
//
// let mul = function (a, b) {
//     return a * b;
// };
//
// let doWhatever = function (a, b) {
//     console.log(`here are you two numbers ${a}, ${b}`);
// };
//
// let cacl = function (num1, num2, callback) {
//     if (typeof  callback === 'function') {
//         return callback(num1, num2);
//     }
// };
//
// console.log(cacl(2, 3, function (a, b) {
//     return a - b;
// }));

// ex 3:
var myArr = [
    {
        num: 3,
        str: 'apple'
    },
    {
        num: 7,
        str: 'cabbage'
    },
    {
        num: 1,
        str: 'ban',
    }
];

myArr.sort(function (val1, val2) {
    if (val1.str < val2.str) {
        return -1;
    } else {
        return 1;
    }
});

console.log(myArr);