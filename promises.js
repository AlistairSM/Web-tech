let a = 5
let p = new Promise(function (resolve, react) {
  if (a == 5) {
    resolve('Success')

  }
  else {
    react('Failure')
  }

})
const r1 = new Promise((resolve, react) => {
  resolve(' Promise 1 fullilled ')
})

const r2 = new Promise((resolve, react) => {
  resolve(' Promise 2 fullfilled ')
})

const r3 = new Promise((resolve, react) => {
  resolve(' Promise 2 fullfilled ')
})
Promise.allSettled([
  p, r1, r2, r3
]).then(
  (msg) => { console.log(msg) }
).catch(
  (msg) => { console.log(msg) }
)