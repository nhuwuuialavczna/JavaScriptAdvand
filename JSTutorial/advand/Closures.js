// var passed = 3; // Closure. passed : 3
//
// var addTo = function () {
//     var inner = 2;
//     return passed + inner;
// };
//
// var passed = 4; // Closure. passed : 4
//console.log(addTo(2)); // after passed = 4. print in console: 6. Before 5

var addTo = function (passed) { // outer function
    var add = function (inner) { // inner function
        return passed + inner;
    };
    return add;
};

console.log(addTo(3)); // return function add. Closure : 3

console.log(addTo(3)(3));