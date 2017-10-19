"use strict";
// var getA = function (a) {
//   return a;
// };

// let test = (a,b) => {return a*b};
// console.log(test(5,6));

// var x = function () {
//     var that = this;
//   this.val = 1;
//   setTimeout(function () {
//       that.val++;
//       console.log(that.val);
//   },1);
// };

// var x = function () {
//   this.val = 1;
//   setTimeout( ()=>{
//       this.val++;
//       console.log(this.val);
//   },1);
// };
//
// var xx = new x();

var x = (...n) => {
  console.log(n[2]);
};

x(1,2,3);


















