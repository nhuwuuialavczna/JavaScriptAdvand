// 1+ 2+....n
var add = function (n) {
    if (n <= 0)
        return 0;
    else
        return n + add(n - 1);
};
console.log(add(4));
