Promise.resolve(name)
// nested promise chainging
function fname (name) {
  return Promise.resolve(name)
}

function age (value) {
  return Promise.resolve(value + ' is 30 years old')
}

function status (state) {
  return Promise.resolve(state + ' and you are a Web Developer')
}

fname('hiba')
  .then(name => {
    return age(name)
  })
  .then(age => {
    return status(age)
  })
  .then(status => {
    document.getElementById('displayChainingPromise').innerHTML = status
  })
  .catch(error => {
    console.log(error)
  })
