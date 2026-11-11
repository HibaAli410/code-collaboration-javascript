async function fetchData (otherfunction) {
  let res = await fetch('./student.json')
  let data = await res.json()
  console.log(data)
  setTimeout(() => {
    // otherfunction(data)//repli(data)
    // otherfunction(data)//divRepresentation(data)
    //otherfunction(data)//table(data)
  }, 9000)
}

function divRepresentation (data) {
  data.forEach(student => {
    let div = document.createElement('div')
    div.classList.add(
      'bg-gray-400',
      'text-gray-100',
      'm-4',
      'p-4',
      'text-center'
    )
    div.innerHTML = `<h1 class="font-bold text-orange-800">${student.name}</h1>
  <p>${student.age}</p>
  <p>${student.city}</p>
  `
    document.getElementById('display').appendChild(div)
  })
}

function reperli (data) {
  data.forEach(student => {
    let div = document.createElement('div')
    div.classList.add(
      'bg-gray-400',
      'text-gray-100',
      'm-4',
      'p-4',
      'text-center'
    )
    div.innerHTML = `<h1 class="font-bold text-orange-800">${student.name}</h1>
  <p>${student.age}</p>
  <p>${student.city}</p>
  `
    document.getElementById('display').appendChild(div)
  })
}
function table (data) {
  data.forEach(student => {
    let div = document.createElement('div')
    div.classList.add(
      'bg-gray-400',
      'text-gray-100',
      'm-4',
      'p-4',
      'text-center'
    )
    div.innerHTML = `<h1 class="font-bold text-orange-800">${student.name}</h1>
  <p>${student.age}</p>
  <p>${student.city}</p>
  `
    document.getElementById('display').appendChild(div)
  })
}

fetchData(reperli)
fetchData(divRepresentation)
fetchData(table)
