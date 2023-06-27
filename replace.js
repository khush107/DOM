//replaceChild()
// var newElement = document.createElement("li");
// var newText = document.createTextNode("this is just text");
// newElement.appendChild(newText);
// var target = document.getElementById("list");
// var oldElement = target.children[1];
// target.replaceChild(newElement,oldElement);

//removeChild
var target = document.getElementById("list");
var oldElement = target.children[0];
target.removeChild(oldElement);
