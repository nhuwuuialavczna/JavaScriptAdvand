var person = function () {

};
person.prototype.age = 0;
person.prototype.name = 'No nam';
person.prototype.state = 'No state';

person.prototype.printPerson = function () {
    console.log(this.name + ',' + this.age + ',' + this.state);
};

var person1 = new person();
// person1.name = 'hau';k
person1.age  = 5;
person1.printPerson();

console.log('name' in person);
console.log(person1.hasOwnProperty('name'));