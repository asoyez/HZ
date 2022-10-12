function openNav() {
    if(document.getElementById("mySidenav").style.width === "" || document.getElementById("mySidenav").style.width === "0px" ) {
        
        document.getElementById("mySidenav").style.width = "250px";
        
    } else {
        document.getElementById("mySidenav").style.width = "0px";
    }
    

  }

function myFunction(x) {
    x.classList.toggle("change");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}