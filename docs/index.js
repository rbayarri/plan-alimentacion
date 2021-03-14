
var prevScrollpos = window.pageYOffset;   // Mostrar menú al hacer scroll
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos !== currentScrollPos) {
    if (window.innerWidth>768 && window.innerWidth<=992) {
      document.getElementById("navbar").style.top = "0px";
    }
  }
  prevScrollpos = currentScrollPos;
}

document.documentElement.addEventListener("click", hideShow); // Click para aparece y desaparecer el menú
function hideShow(){
  if (window.innerWidth>768 && window.innerWidth<=992) {
    let x = document.getElementById("navbar").style;
    if (x.top == "-95px") {
      x.top="0px";
    }else{
      x.top ="-95px";
    }
  }
}

function changeButton(){      // Cambiar el botón del menú responsivo y desaparecer menú
  var boton = document.getElementById("menu");
  if (boton.innerHTML=="menu") {
    boton.innerHTML = "close";
    boton.style.color="white";
    document.getElementById("navbar").style.display="flex";
  }else{
    boton.innerHTML = "menu";
    boton.style.color="black";
    document.getElementById("navbar").removeAttribute("style");
  }
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    var boton = document.getElementById("menu");
    boton.innerHTML = "menu";
    boton.style.color="black";
    document.getElementById("navbar").removeAttribute("style");
  } else {
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes