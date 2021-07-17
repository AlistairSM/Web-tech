var set1 = new Set([1,2,3,4]);  //set creation
console.log("Set1-")
console.log(set1);
console.log("Try to delete non existing value-")
console.log(set1.delete(5)); //delete non existing value
set1.delete(4);              //delete existing value   
console.log(set1)

var set2 = new Set();        //empty set
console.log("Set2-");
console.log(set2);
set2.add("Ram").add("Rome").add("Rem");  //add
console.log("Set2 after add-");
console.log(set2);

set2.clear();                             //clear deletes everything
console.log("Set2 after clear-");
console.log(set2);

console.log(set1.entries());              //get entries
console.log(set1.values());               //get values
