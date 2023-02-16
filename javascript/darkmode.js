var lightDark = document.getElementById("lightDark");
var logo= document.getElementById("logo");
var contact=document.getElementById("contact-logo");

lightDark.onclick = function(){
    document.body.classList.toggle("light-theme"); 
    if(document.body.classList.contains("light-theme")){
        lightDark.src = "../img/dark theme icon/moon.png";
        logo.src="../img/blacklogo.png";
        contact.src="../img/black-mail.png";
    }else{
        this.src="../img/dark theme icon/sun.png";
        logo.src="../img/whitelogo.png";
        contact.src="../img/white-mail.png"
    }
}

function menu(){
    document.body.classList.toggle("menu");
}

const hamburger = document.querySelector(".nav-toggle");

    hamburger.addEventListener("click", () => {
      const currentState = hamburger.getAttribute("data-state");

      if (!currentState || currentState === "closed") {
        hamburger.setAttribute("data-state", "opened");
        hamburger.setAttribute("aria-expanded", "true");
      } else {
        hamburger.setAttribute("data-state", "closed");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });