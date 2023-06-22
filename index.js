// Created by YostDev 


var boton = true;

function abrir(){
   if(boton == true){
   
        var mover = document.getElementById("cont");
    mover.style.transition = "0.3s"
    mover.style.top = "295px";
    boton = false; 
    var imag = document.getElementById("but").innerHTML = "<img src=\"https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png\" width=\"30px\" height=\"30px\">";
    
   } else if(boton == false){
   
        var mover = document.getElementById("cont");
    mover.style.transition = "0.3s"
    mover.style.top = "70px";
    boton = true;
     var imag = document.getElementById("but").innerHTML = "<img src=\"https://cdn-icons-png.flaticon.com/512/20/20569.png\" width=\"25px\" height=\"25px\">";
     
   }
}
window.addEventListener('scroll', function() {
    var btn = document.getElementById('btn-back-to-top');
    if (window.pageYOffset > 40) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
  