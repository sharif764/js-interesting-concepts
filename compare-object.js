// const first1 = { a: 1, b: 2 };
// const second2 = { a: 1, b: 2 };
// const third = first1;
// // console.log(JSON.stringify(first, second))
// // if (JSON.stringify(first) === JSON.stringify(second)) {
// //     console.log('equal');
// // }
// // else {
// //     console.log('not equal');
// // }
// function compareObjects(obj1, obj2) {
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//     }
//     for (const prop in obj1) {
//         if (obj1[prop] !== obj2[prop]) {
//             return false;
//         }
//         return true;
//     }
// }
// const isEual = compareObjects(first1, second2);
// console.log(isEual);

let i = 1;
// console.log(i);
i = 2;
// console.log(i);
const name = { id: 1 };
console.log(name.id);
name.id = 2;
console.log(name.id);