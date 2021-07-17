let obj = {a:1, b:2};
let map = new Map();
map.set('100','John');
map.set('101','Jani');

let x;
console.time("object-")
 x =Object.entries(obj);
console.log(x);
console.timeEnd("object-");

console.time("map-")
 x =map.entries();
console.log(x);
console.timeEnd("map-");