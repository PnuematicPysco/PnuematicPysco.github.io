var monsterId = [];
var monsterShot = [];
var monsterX = [];
var monsterZ = [];
var monsters = 1;
var totalMonsters = 1;
var objectId = [];
var objectX = [];
var objectZ = [];
var objects = 1;
var x = 0;
var z = 0;
var rotate = 0;

function createObjects(){
 var i;
 for(i = 0;i < objects;i++){
 var object = document.createElement("img");
 object.setAttribute("id", "object" + i);
 var randomNum = Math.floor(Math.random() * 2);
 if(randomNum == 0){
  object.setAttribute("scr", "skyscrapper.png");
 }
 if(randomNum == 1){
 object.setAttribute("scr", "burningcar.jpg");
 }
 if(randomNum == 2){
  object.setAttribute("scr", "wallPixel.jpeg");
 }
  var randomX = Math.floor(Math.random() * 20000) - 10000;
  var randomZ = Math.floor(Math.random() * 20000) - 10000;
  objectX.push(randomX);
  objectZ.push(randomZ);
  objectId.push("object" + i);
 }
}

function createMonster(){
 var monster = document.createElement("img");
  monster.setAttribute("id", "monster" + monsters);
  monster.setAttribute("scr", "monster1.png");
 var randomX = Math.floor(Math.random() * 20000) - 10000;
  var randomZ = Math.floor(Math.random() * 20000) - 10000;
  monsterX.push(randomX);
  monsterZ.push(randomZ);
  monsterId.push("monster" + monsters);
  monsters++;
}
function loadMonsters(){
var i;
for(i = 0;i < totalMonsters;i++){
 createMonster();
 //you have to fillout the array on the proper place for the proper monster beforehand, exept for monsterId and monsters.
}
}

function moveMonsters(){
var i;
for(i = 0;i < totalMonsters;i++){
if(monsterX[i] > x){
var j;
for(j = 0;j < 100;j++){
setTimeout(function(){
monsterX[i]++;
}, 10);
}
}else{
var k;
for(k = 0;k < 100;k++){
setTimeout(function(){
monsterX[i]--;
}, 10);
}
}
if(monsterZ[i] > z){
var l;
for(l = 0;l < 100;l++){
setTimeout(function(){
monsterZ[i]++;
}, 10);
}
}else{
 var m;
for(m = 0;m < 100;m++){
setTimeout(function(){
monsterZ[i]--;
}, 10);
}
}
} 
if(monsterShot[i] == "notShot"){
if(monsterZ[i] < z + 50){
if(monsterX[i] < x + 50){
if(monsterZ[i] > z - 50){
if(monsterX[i] > x - 50){
var body = document.getElementById("world");
body.style.display = "none";
}}}}}
}

function fake3D(){
var i;
for(i = 0;i < totalMonsters;i++){
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
object.style.height = ""+graphicZ - graphicZ - graphicZ+"px";
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


function object3D(){
var i;
for(i = 0;i < objects;i++){
var object = document.getElementById(objectId[i]);
if(objectsZ[i] > z){
var graphicZ = objectsZ[i] - z - 500;//make move and pos (num * 5) to balance it out
if(graphicZ > 0){
object.style.height = ""+graphicZ - graphicZ - graphicZ+"px";
object.style.width = ""+graphicZ - graphicZ - graphicZ+"px";
}else{
object.style.height = ""+graphicZ + graphicZ + graphicZ+"px";
object.style.width = ""+graphicZ + graphicZ + graphicZ+"px";
}
object.style.transform = "translateX("+x - objectX[i] - rotate+"px)";
}else{
var graphicZ = objectZ[i] - z + 500;//make move and pos (num * 5) to balance it out
if(graphicZ > 0){
object.style.height = ""+graphicZ - graphicZ - graphicZ+"px";
object.style.width = ""+graphicZ - graphicZ - graphicZ+"px";
}else{
object.style.height = ""+graphicZ + graphicZ + graphicZ+"px";
object.style.width = ""+graphicZ + graphicZ + graphicZ+"px";
}
var oppositeRotate = x - objectX[i] - rotate;
object.style.transform = "translateX("+oppositeRotate + oppositeRotate + oppositeRotate+"px)";
}
}
}

function shoot(){
var i;
for(i = 0;i < totalMonsters;i++){
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
loadMonsters();
createObjects();
window.setInterval(fake3D, 1);
window.setInterval(object3D, 1);
window.setInterval(moveMonster, totalMonsters * 1000);
