var personFactory = function (name, age, state) {
    var tmp = {};
    tmp.age = age;
    tmp.name = name;
    tmp.state = state;

    tmp.printPerson = function () {
        console.log(this.name + "," + this.age + "," + this.state)
    };
    return tmp;
};

var person1 = new personFactory('A',15,'CA');
var person2 = new personFactory('B',16,'BA');

person1.printPerson();
person2.printPerson();