// this is immediately invoked function expression
function increment(i) {
    return i+1;
}
var j = 5;

// function expression
(function (i) { // ==> (function(){})();
  return i+1;
})(j);

(function (i) { // ==> (function(){}());
   return i+1;
}(j));


// ==> (function(){})();
// !function (i) {
//     console.log(i);
// }(5);
//
// +function (i) {
//     console.log(i);
// }(5);

// private Methods
// (function ($) {
//     $(this).addClass('MyClass');
// })(window.JQuery);

var counter = function () {
  i=0;
  return {
      get:function () {
          return i;
      },
      set:function (val) {
          i= val;
      },
      increment:function () {
          i++;
      }

  }
}();
counter.increment();
console.log(counter.get());





