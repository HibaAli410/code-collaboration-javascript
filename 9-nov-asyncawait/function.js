function loadingbox () {
  let loading = new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById('loading').style.color = 'yellow'
      document.getElementById('loading').style.fontWeight = 'bold'
      document.getElementById('loading').style.fontSize = '20px'
      document.getElementById('loading').innerHTML = 'Loading...'
      document.getElementById('loading').style.backgroundColor = 'pink'

      resolve()
    }, 5000)
  })
  return loading
}

function ready () {
  let ready = new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById('loading').style.color = 'blue'
      document.getElementById('loading').style.fontWeight = 'extrabold'
      document.getElementById('loading').style.fontSize = '40px'
      document.getElementById('loading').innerHTML = 'Ready!'
      document.getElementById('loading').style.backgroundColor = 'lightgreen'
      resolve()
    }, 5000)
  })
  return ready
}

function go () {
  let go = new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById('loading').style.color = 'Green'
      document.getElementById('loading').style.fontWeight = 'extrabold'
      document.getElementById('loading').style.fontSize = '60px'
      document.getElementById('loading').innerHTML = 'Ready steady go!'
      document.getElementById('loading').style.backgroundColor = 'lightgreen'
      resolve()
    }, 5000)
  })
  return go
}
async function display () {
  await loadingbox()
  await ready()
  await go()
}
display()
