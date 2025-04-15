//popup box  overlay button+
var popupbox=document.querySelector(".popupbox")
var overlay=document.querySelector(".overlay")
var button=document.getElementById("add-popup")

button.addEventListener("click",function(){
  popupbox.style.display="block"
  overlay.style.display="block"
})
var cancelbutton=document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(){
  event.preventDefault()
  popupbox.style.display="none"
  overlay.style.display="none"
})
//container book-title,author.des ip , add-button
var container=document.querySelector(".container")
var addbutton=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-ip")
var bookauthorinput=document.getElementById("book-author-ip")
var bookdescinput=document.getElementById("book-des-ip")

addbutton.addEventListener("click",function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML = `
    <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescinput.value}</p>
    <button onclick="deletebook(event)">Delete</button>
  `;
  container.append(div)
  popupbox.style.display="none"
  overlay.style.display="none"
})
function deletebook(event){
  event.target.parentElement.remove()
}


