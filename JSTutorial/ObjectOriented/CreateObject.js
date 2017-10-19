// var Pizza = {
//     crust: 'thin',
//     toppings: 3,
//     hasBacon: true,
//     howmanyToppings: function () {
//         return this.toppings;
//     }
// };
//
// Pizza.price = '12$';
//
// console.log(Pizza.howmanyToppings());
//
// console.log(Pizza);
//
// delete (Pizza.crust);
// console.log(Pizza);

var Pizza = function () {
    this.crust = 'thin';
};

console.log(Pizza); 