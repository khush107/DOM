var id = setTimeout(Anim,5000);

function Anim(){
    var target = document.getElementById("red");
    target.style.width = "500px"
}

function stopAnimation(){
    clearTimeout(id);
}