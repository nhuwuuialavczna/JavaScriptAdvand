// let i = [1,2,3,4];
// let iterator = i[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function *generator(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// };
// let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function *generator(){
//     yield 1;
//     yield* annotherGenerator();
//     return 'hau';
//     yield 3;
// };
//
// function *annotherGenerator(){
//     yield  2;
// }
//
// let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function request(url){
//     return new Promise(function (resolve,reject) {
//         makeAjaxCall(url,function (err,text) {
//             if(err) reject(err);
//             else resolve(text);
//         });
//     });
// };
//
// function *generator(){
//     yield request('url1');
//     yield request('url2');
// };
//
// let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());







