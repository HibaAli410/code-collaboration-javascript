// Creating a new Promise object then take 2 callbacks
let PromiseObject = new Promise((resolve, reject) => {
  //let condition = true;
  let condition = false
  if (condition) {
    resolve('Promise is resolved successfully')
  } else {
    reject('Promise is rejected')
  }
})

PromiseObject.then(
  message => {
    document.getElementById('displayPromise').innerHTML = message
    console.log(message)
  },
  Err => {
    document.getElementById('displayPromise').innerHTML = Err
    console.log(Err)
  }
)
// Promise with profit calculation
function calculateProfit (cost, sell) {
  return new Promise((resolve, reject) => {
    if (typeof cost === 'number' && typeof sell === 'number') {
      const profit = sell - cost
      let value =
        profit > 0 ? 'Profit is: ' + profit : 'Loss is: ' + Math.abs(profit)
      resolve(value)
    } else {
      reject('Error: Both cost and sell should be numbers.')
    }
  })
}
calculateProfit('500', 1000).then(
  profit => {
    document.getElementById('displayProfit').innerHTML = profit
  },
  error => {
    document.getElementById('displayProfit').innerHTML = error
  }
)

const fetching = fetch('https://jsonplaceholder.typicode.com/comments')
fetching
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
