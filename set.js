let employees = new Map();

employees.set('100','John');
employees.set('101','Jani');
employees.set('102','Janardhan');
employees.set('103','Tara');

console.log("No. of employees- "+ employees.size);   //display size

console.log("\nDisplay all employee details -\n"); //display entries
for(let entry of employees){
  console.log(entry);
}

console.log("Display all employee IDs -\n"); //Display keys
for(let ids of employees.keys()){
  console.log(ids);
}
console.log("Display all employee details -\n"); //Display values
for(let names of employees.values()){
  console.log(names);
}

console.log('\nEmployee with ID 103- '+employees.get('103')); //get specific value based on its key

console.log('\nEmployee with ID 105- '+employees.has('105')); //check whether value with specific keys exists or not


