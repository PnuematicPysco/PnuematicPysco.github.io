var gun = document.getElementById("gun.png");
var reloadGun = document.getElementById("reload.png");

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
