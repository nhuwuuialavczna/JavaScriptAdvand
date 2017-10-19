var peopleConstructor = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;


    this.printPerson = function () {
        console.log(this.name + ',' + this.age + ',' + this.state);
    };
};

var person1 = new peopleConstructor('A',12,'CA');
person1.printPerson();