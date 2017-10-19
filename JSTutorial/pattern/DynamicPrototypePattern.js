var personDynamic = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
    if (typeof  this.printPerson != 'function') {
        this.printPerson = function () {
            console.log(this.name + ',' + this.age + ',' + this.state);
        };
    }


};
// personDynamic.prototype.age = 0;
// personDynamic.prototype.name = 'No nam';
// personDynamic.prototype.state = 'No state';


var person1 = new personDynamic('hau',15,'CA');
// person1.name = 'hau';k
// person1.age = 5;
person1.printPerson();

// console.log('name' in personDynamic);
// console.log(person1.hasOwnProperty('name'));