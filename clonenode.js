//cloneNode
var target = document.getElementById("list1").children[0];
var copyElement =  target.cloneNode(true);  //use for copy that element
document.getElementById("list2").appendChild(copyElement);