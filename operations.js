var set1 = new Set([1, 2, 3, 4, 5]);
var set2 = new Set([4, 5, 6, 7, 8]);

let union = new Set([...set1, ...set2]);

let intersection = new Set(
  [...set1].filter(x => set2.has(x)));

let difference = new Set(
    [...set1].filter(x => !set2.has(x)));

console.log(union);
console.log(intersection);
console.log(difference);