function objectimage (event) {
  event.dataTransfer.setData('object', event.target.id)
  //console.log(event)
}
function allowDrop (event) {
  event.preventDefault()
  console.log(event)
}
function dropContainer (event) {
  event.preventDefault()
  const get_object_id_image = event.dataTransfer.getData('object')
  const imageelement = document.getElementById(get_object_id_image)
  event.target.appendChild(imageelement)
}
