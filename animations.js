var gun = document.getElementById("gun");
var reloadGun = document.getElementById("reloadGun");

reloadGun.style.display = "none";

document.onkeydown = function (event) {
      switch (event.keyCode) {
        case 32:
        reloadGun.style.display = "";
        gun.style.display = "none";
        setTimeoutFunction(function(){
        reloadGun.style.display = "none";
        gun.style.display = "";
        }, 500);
      }};
