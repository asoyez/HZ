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