//insertAdjacentElement
// var newElement = document.createElement("h2");
// var newText = document.createTextNode("this is just text");
// newElement.appendChild(newText);
// var target = document.getElementById("test");
// target.insertAdjacentElement("afterend",newElement);

//innerAdjacentHTML

// var target = document.getElementById("test");
// var newElement = "<h2>This is Heading</h2>"
// target.insertAdjacentHTML("afterend",newElement);

//innerAdjacentText

var target = document.getElementById("test");
var newText = "This is Heading"
target.insertAdjacentHTML("afterend",newText);




