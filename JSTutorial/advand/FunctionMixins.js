// var jsSKill = {
//     knowJS:function () {
//         return true;
//     }
// };
// var engDegree = {
//     hasDegree:function () {
//         return true;
//     }
// };
//
// var backEndSkill = {
//     knowBackend:function () {
//         return true;
//     }
// };
//
// var jsEngineer = Object.assign({},jsSKill,engDegree);
// var fullStackEngineer = Object.assign({},jsEngineer,backEndSkill);
//
// console.log(fullStackEngineer.knowJS());
// console.log(fullStackEngineer.hasDegree());
// console.log(fullStackEngineer.knowBackend());
//


// var Car = function (color) {
//     var moving = false;
//    return Object.assign({},{
//        color:color,
//        drive:function () {
//            moving = true;
//            return this;
//        },
//        isMoving:function () {
//            return moving;
//        }
//    });
// };
//
// var redCar = new Car('red');
// console.log(redCar.drive().isMoving());

var humanFactory = function (obj) {
    var isCrying = false;
    return Object.assign({}, obj, {
        cry: function () {
            isCrying = true;
        },
        isCrying: function () {
            return isCrying;
        }
    });
};

// var teacsith = humanFactory({});
//
// console.dir(teacsith);

var flyFactory = function (obj) {
    var isFlying = false;
    return Object.assign({},obj,{
       fly:function () {
           isFlying = true;
       } ,
        isFlying:function () {
            return isFlying;
        }
    });
};

console.dir(humanFactory(flyFactory({})));




