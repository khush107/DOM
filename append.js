//append child use 
var newElement = document.createElement("h2");
var newText = document.createTextNode("this is just Text");
newElement.appendChild(newText);
document.getElementById("test").appendChild(newElement);
console.log(newElement);


//insert before use
var target = document.getElementById("test");
target.insertBefore(newElement,target.childNodes[0]);
