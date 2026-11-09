// console.log('Hello, World!')
async function fetchData () {
  const mypromis = new Promise((resolve, reject) => {})
}
//start one
// function displayfunction (text) {
//   document.getElementById('display').innerHTML = text
// }
// displayfunction('Hello, World!')

//async say i make a normal function into a Promise function and it will return a promise object. so we can use .then() to get the data from the promise object.
// async function fetchData () {
//   return 'Hello World!'
// }

// fetchData().then(data => {
//   displayfunction(data)
// })
//end one

//start two
async function fetchData () {
  let variable = await fetch('my.json')
  let jsonfile = await variable.json()
  return jsonfile
}
function displayjsondata (data) {
  let table = document.createElement('table')
  let thead = document.createElement('thead')
  let tbody = document.createElement('tbody')
  let trhead = document.createElement('tr')
  data.forEach(element => {
    let th = document.createElement('th')
    th.innerHTML = element.name
    trhead.appendChild(th)
  })
  thead.appendChild(trhead)
  table.appendChild(thead)
  data.forEach(element => {
    let trbody = document.createElement('tr')
    let td = document.createElement('td')
    let td1 = document.createElement('td')
    td.innerHTML = element.age
    td1.innerHTML = element.city
    trbody.appendChild(td1)
    trbody.appendChild(td)
    tbody.appendChild(trbody)
  })
  table.appendChild(tbody)
  document.getElementById('display').appendChild(table)
}
fetchData().then(data => {
  displayjsondata(data)
})

// let fetchurl = fetch('https://jsonplaceholder.typicode.com/comments')
// fetchurl
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data)
//   })
