var monsterId = [];
var monsterShot = [];
var monsterX = [];
var monsterZ = [];
var monsters = 1;
var x = 0;
var z = 0;
var rotate = 0;

function createMonster(){
 var monster = document.createElement("img");
  monster.setAttribute("id", "monster" + monsters);
  monster.setAttribute("scr", "monster1.png");
  monsterId.push("monster1");
  monsters++;
}
function loadMonsters(){
var i;
for(i = 0;i < monsterX.length();i++){
 createMonster();
 //you have to fillout the array on the proper place for the proper monster beforehand, exept for monsterId and monsters.
}
}
function fake3D(){
var i;
for(i = 0;i < monsterId.length;i++){
if(monsterShot[i] == "notShot"){
var monster = document.getElementById(monsterId[i]);
if(monsterZ[i] > z){
var graphicZ = monsterZ[i] - z - 500;//make move and pos (num * 5) to balance it out
if(graphicZ > 0){
monster.style.height = ""+graphicZ - graphicZ - graphicZ+"px";
monster.style.width = ""+graphicZ - graphicZ - graphicZ+"px";
}else{
monster.style.height = ""+graphicZ + graphicZ + graphicZ+"px";
monster.style.width = ""+graphicZ + graphicZ + graphicZ+"px";
}
monster.style.transform = "translateX("+x - monsterX[i] - rotate+"px)";
}else{
var graphicZ = monsterZ[i] - z + 500;//make move and pos (num * 5) to balance it out
if(graphicZ > 0){
monster.style.height = ""+graphicZ - graphicZ - graphicZ+"px";
monster.style.width = ""+graphicZ - graphicZ - graphicZ+"px";
}else{
monster.style.height = ""+graphicZ + graphicZ + graphicZ+"px";
monster.style.width = ""+graphicZ + graphicZ + graphicZ+"px";
}
var oppositeRotate = x - monsterX[i] - rotate;
monster.style.transform = "translateX("+oppositeRotate + oppositeRotate + oppositeRotate+"px)";
}
}else{
var monster = document.getElementById(monsterId[i]);
monster.style.display = "none";
}
}
}

function shoot(){
var i;
for(i = 0;i < monsterId.length;i++){
var monster = document.getElementById(monsterId[i]);
var Rotate2 = x - monsterX[i] - rotate;
var oppositeRotate = Rotate2 + Rotate2 + Rotate2;
if(monsterZ[i] > z){
var graphicZ = monsterZ[i] - z - 500;
if(graphicZ > 0){
if(Rotate2 > -10){
if(Rotate2 < 10){
if(monsterShot[i] == "notShot"){
monsterShot[i] = "Shot";
}}}}
}else{
var graphicZ = monsterZ[i] - z - 500;
if(graphicZ > 0){
if(oppositeRotate > -10){
if(oppositeRotate < 10){
if(monsterShot[i] == "notShot"){
monsterShot[i] = "Shot";
}}}}
}
}
}


document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;
 
 if(name == "w"){
 z = z + 50;
 }
 if(name == "a"){
 x = x - 50;
 }
 if(name == "s"){
 z = z - 50;
 }
 if(name == "d"){
 x = x + 50;
 }
}, false);

document.onkeydown = function (event) {
      switch (event.keyCode) {
         case 37:
            rotate = rotate - 50;
            if(rotate < -180 * 5){
            rotate = 180 * 5;
            }
            break;
         case 39:
            rotate = rotate + 50;
            if(rotate > 180 * 5){
            rotate = -180 * 5;
            }
            break;
        case 32:
        shoot();
      }};

window.setInterval(fake3D, 10);
