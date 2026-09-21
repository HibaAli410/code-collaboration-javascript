// console.log('hello')

// document.getElementsByName('H1').style.color = 'ray';
// document.getElementById('hhh').style.color = 'Gray'
// const elementpara = document.getElementById('para')
// elementpara.style.backgroundColor = 'yellow'
// elementpara.style.padding = '10px'
// elementpara.style.fontSize = '20px'
// elementpara.style.fontWeight = 'Bold'
// elementpara.style.color = 'pink'

// const ul = document.createElement('ul')
// const abc = document.createElement('ul')
// const p = document.createElement('p')
// document.body.appendChild(p);

// p.innerText = 'This is create element by js'

const table = document.createElement('Table')
const tr = document.createElement('tr')
const td = document.createElement('td')
const td1 = document.createElement('td')
tr.appendChild(td1)
tr.appendChild(td)
table.appendChild(tr)
td.innerHTML = 'ABCD'
td1.innerHTML = 'EFG'
document.body.appendChild(table)
