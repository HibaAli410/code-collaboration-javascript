let storeitems = JSON.parse(localStorage.getItem('todoItems')) || []
// storeitems.push('apple')
// storeitems.push('banana')
// storeitems.push('orange')
localStorage.setItem('todoItems', JSON.stringify(storeitems))
// document.body.onload = renderTodoItems()
const ul = document.createElement('ul')
function renderTodoItems (text, id) {
  storeitems = JSON.parse(localStorage.getItem('todoItems'))
  storeitems.forEach(item => {
    // item.id      item.text      item.status
    //item[0]       item[1]       item[2]
    const li = document.createElement('li')
    //checkbox
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    li.appendChild(checkbox)

    //span
    const span = document.createElement('span')
    span.textContent = item.text
    li.appendChild(span)

    //edit button
    const editButton = document.createElement('button')
    editButton.textContent = 'Edit'
    editButton.setAttribute('id', 'editButton')
    li.appendChild(editButton)

    //delete button
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.setAttribute('id', 'deleteButton')
    li.appendChild(deleteButton)
    //delete an item from event listener
    deleteButton.addEventListener('click', () => {
      let removeitemarr = JSON.parse(localStorage.getItem('todoItems')) || []
      li.remove()
    })

    ul.appendChild(li)
    document.body.appendChild(ul)
  })
}
renderTodoItems()
