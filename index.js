var ul=document.getElementById("list_container")
var input=document.getElementById("input")
function add()
{
  var listitem=document.createElement("li")
  listitem.innerHTML=input.value + "<button onclick='deleteItem(event)'>Delete</button>"
  ul.append(listitem)
}
function deleteItem(event)
{
    event.target.parentElement.remove()
}