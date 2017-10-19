// var a = function a(a) {
//     console.log(a)
// }(6);

// var persion = {
//     name:"nguyentanhau",
//     age:19,
//     information:function () {
//         return this.name+this.age;
//     }
// };
// var obj ={
//     name:"phanducanh",
//     age:19
// };
// console.log(persion.information.call(obj));
// console.log(persion.information.apply(obj));

// var conut = 0;
// function add() {
//     conut++;
// }
//
// add();
// add();
// add();
// console.log(conut);

// var a = function add() {
//     var count = 0;
//     function plus() {
//         count++;
//     }
//     plus();
//     return count;
// }();
//
// console.log(typeof a+"\t"+a);
// function outside(x) {
//     function inside(y) {
//         return x + y;
//     }
//     return inside;
// }
//
// fn_inside = outside(5);
// res = fn_inside(5);

// console.log(outside(4)(5));


function Sinhvien(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function () {
        return this.name + "\t" + this.age;
    }
}

var sv = new Sinhvien('hau', 18);

var a = Sinhvien.prototype.getName = function (sv) {
    return sv.name;
}(sv);


console.log(a);




