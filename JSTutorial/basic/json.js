// var mapSV =
//     {
//         "15130052":{
//             "mssv":"15130052",
//             "name":"nguyentahau"
//         },
//         "15130008":{
//             "mssv":"15130008",
//             "name":"phanducanh"
//         }
//     };
//
// console.log(mapSV[15130052].mssv);

// var jsontext = '{"ho":"nguyen","ten":"hau"}';var contact = JSON.parse(jsontext);
// console.log(contact);

var contact = new Object();
contact.name = 'hau';
contact.age = 18;
contact.phone = ['096645','013558'];

var memberfilter = new Array();
memberfilter[0] = 'name';
memberfilter[1] = 'age';
memberfilter[2] = 'phone';
var jsontext = JSON.stringify(contact,memberfilter,'\t');
console.log(jsontext);






