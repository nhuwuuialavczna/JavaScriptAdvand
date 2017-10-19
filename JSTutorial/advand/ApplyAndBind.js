var obj = {num: 2};

var addToThis = function (a, b, c) {
    return this.num + a + b + c;
};

console.log(addToThis.call(obj, 1,2,3)); // functionname.call(obj,functionargumentes)

var arr = [1,2,3];
console.log(addToThis.apply(obj,arr));

var bound = addToThis.bind(obj);

console.log(bound(1,2,3));

// how to use call, apply and bind
// var obj = {};
// var functionname = function (arg1,arg2,arg3) {
//
// };
//
// functionname.call(obj,arg1,arg2,arg3);
// functionname.apply(obj,[arg1,arg2,arg3]);
// var bound = functionname.bind(obj);
// bound(arg1,arg2,arg3);