// 1. different let and var
// let x = function () {
//     if(true){
//         var v =2;
//         let l = 1;
//     }
//     console.log(v);
//     console.log(l);
//
// };
// x();
// 2. compares value '==', compares value and type '==='
// 3. difference between 'let' and 'const' keywords
// let l = 1;
// l=2;
// console.log(l);
//
// const c =1;
// c=2;
// console.log(2);
// const c =[1,2];
// c.push(3);
// console.log(3);
// 4. difference 'undefined' and 'null'
// console.log(typeof undefined);
// console.log(typeof null);
// 5. use of Arrow Functions ?
// const  profile = {
//   firstName: '',
//   lastName:'',
//     setName:function (name) {
//         let splitName = function (n) {
//             let nameArray = n.split(' ');
//             this.firstName = nameArray[0];
//             this.lastName = nameArray[1];
//         };
//         splitName(name);
//     }
// };
//
// profile.setName('john doe');
//console.log(firstName);//?????
// 6. what is prototypal inheritance ?
// let car = function (model) {
//   this.model = model;
// };
// car.prototype.getModel = function () {
//   return this.model;
// };
// let toyota = new car('toyota');
// console.log(toyota.getModel());
//
// let nissan = new car('nissan');
// console.log(nissan.getModel());
// 7. difference between function declaration & function expression ?
// console.log(funcD());
// console.log(funcE());
//
// function funcD(){
//     console.log('Function declaration');
// }
//
// let funcE = function () {
//     console.log('Function expression');
// };
// 8. what is promises and why do we use it?
// 9. setTimeout
// 10. What is a closure and how do you use it ?
var obj = function () {
    var i = 0;
    return {
        setI: function (k) {
            i = k;
        },
        getI: function () {
            return i;
        }
    };
};
var x = obj();
x.setI(2);
console.log(x.getI());
