// class Car{
//     constructor(color){
//         this.color = color;
//     }
// }
//
// console.dir(typeof Car);

var Car = (function () {
    var _car = function (color) {
        this.color = color;
    };
    return _car;
})();

console.log(Car);