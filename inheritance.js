function vehicle(make, body) {
  this.make = make || '';
  this.body = body || 'steel';
}
function bike(make, body, wheels) {
  vehicle.call(this, make, body)
  this.wheels = wheels || 'two';

}
function car(make, body, wheels, airbags) {
  bike.call(this, make, body, wheels)
  this.airbags = airbags;
}
let op = new car('BMW', 'Carbon-fiber', 'Four', 'Present');
console.log(op);

