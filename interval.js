var a = 0;
var id = setInterval(anime,1000);

function anime() {
     a = a + 10;
     if (a == 200){
        clearInterval(id);
     }else{
        var target = document.getElementById("red");
        target.style.marginLeft = a + 'px';
     }
}