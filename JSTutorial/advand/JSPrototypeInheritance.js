// base class
var Job = function () {
    this.pays = true;
};
// prototype method
Job.prototype.print = function () {
    console.log(this.pays ? 'Please hire me' : 'no thank you');
};
//subclass
var TechJob = function (title, pays) {
    Job.call(this);
    this.title = title;
    this.pays = pays;
};
TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;
// TechJob.prototype.print = function () {
//   console.log(this.pays ? this.title+ 'job is great, please hire me':'I would rather learn JS');
// };
// 'Object' is the master or root object. All object in JS are create from 'Object'
// Object.prototype.print = function () {
//   console.log('I am executing from the Master Object') ;
// };
var softwarePosition = new TechJob('Javascript Programmer', true);
var softwarePosition2 = new TechJob('VB Programmer', false);
console.log(softwarePosition.print());
console.log(softwarePosition2.print());
