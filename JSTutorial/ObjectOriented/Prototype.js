var Car = function () {};

Car.prototype = {
  print : function () {
   return 'I am car';
  }
};

var ToyCar = function () {};

ToyCar.prototype = Object.create(Car.prototype);

// ToyCar.prototype.print = function () {
//   return 'I am ToyCar';
// };
//
// var ToyTransformer = function () {};
// ToyTransformer.prototype = Object.create(ToyCar.prototype);
// ToyTransformer.prototype.print = function () {
//   return 'I am a toyTransformer';
// };
// var car = new Car();
// var toyCar = new ToyCar();
// var toyTransformer = new ToyTransformer();
//
// console.log(car.print());
// console.log(toyCar.print());
// console.log(toyTransformer.print());



