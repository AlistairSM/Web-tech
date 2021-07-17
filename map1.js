let obj = {a:1, b:2};
const newObj = new Map(Object.entries(obj));
console.log(newObj);

let newMap = new Map([['first','Neil'],['Second','Buzz']]);
let newObj2 = Object.fromEntries(newMap);
console.log(newObj2);