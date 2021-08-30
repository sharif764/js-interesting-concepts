const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
// console.log(JSON.stringify(first, second))
if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log('equal');
}
else {
    console.log('not equal');
}
function compareObjects(obj1, obj2) {

}