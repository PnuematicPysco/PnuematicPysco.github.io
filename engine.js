
     var monsterId = [];
var monsterShot = [];
var monsterX = [];
var monsterZ = [];
var monsters = 1;
var totalMonsters = Math.floor(Math.random() * 30);
var objectId = [];
var objectX = [];
var objectZ = [];
var objects = Math.floor(Math.random() * 30);
var x = 0;
var z = 0;
var rotate = 0;
var challengeMode = false;
var ammo = 5;
var textElement = document.getElementById("text");
var ammoText = document.getElementById("ammo");
     

 var j;
 for(j = 0;j < objects;j++){
 var object = document.createElement("img");
 object.setAttribute("id", "object" + j);
 object.setAttribute("style", "bottom: 200px");
 var randomNum = Math.floor(Math.random() * 2);
 if(randomNum == 0){
  object.setAttribute("src", "PnuematicPysco.github.io/skyscrapper.png");
 }
 if(randomNum == 1){
 object.setAttribute("src", "PnuematicPysco.github.io/burningcar.jpg");
 }
 if(randomNum == 2){
  object.setAttribute("src", "PnuematicPysco.github.io/wallPixel.jpeg");
 }
  var randomX = Math.floor(Math.random() * 20000) - 10000;
  var randomZ = Math.floor(Math.random() * 20000) - 10000;
  objectX.push(randomX);
  objectZ.push(randomZ);
  objectId.push("object" + j);
  document.body.appendChild(object);
 }



    var i;
for(i = 0;i < totalMonsters;i++){
 var monster = document.createElement("img");
  monster.setAttribute("id", "monster" + monsters);
  monster.setAttribute("src", "PnuematicPysco.github.io/monster1.png");
  monster.setAttribute("style", "bottom: 200px");
 var randomX = Math.floor(Math.random() * 20000) - 10000;
  var randomZ = Math.floor(Math.random() * 20000) - 10000;
  monsterX.push(randomX);
  monsterZ.push(randomZ);
  monsterShot.push("notShot");
  monsterId.push("monster" + monsters);
  monsters++;
  document.body.appendChild(monster);
}


function moveMonsters(){
var i;
for(i = 0;i < totalMonsters;i++){
if(monsterShot[i] != "Shot"){
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
}
if(monsterZ[i] < z + 50){
if(monsterX[i] < x + 50){
if(monsterZ[i] > z - 50){
if(monsterX[i] > x - 50){
if(monsterShot[i] != "Shot"){
var bodyElement = document.getElementByTagName("body");
bodyElement.style.display = "none";
}}}}}
}

function fake3D(){
var i;
for(i = 0;i < totalMonsters;i++){
var monster = document.getElementById("monster" + i);
var monsterSize = 0;
ammoText.innerHtml = "ammo: " + ammo;
if(monsterZ[i] > z){
var graphicZ = monsterZ[i] - z - 500;//make move and pos (num * 5) to balance it out
if(graphicZ > 0){
 $("#monster" + i).height(graphicZ - graphicZ - graphicZ);
$("#monster" + i).width(graphicZ - graphicZ - graphicZ);
monsterSize = graphicZ - graphicZ - graphicZ;
}else{
$("#monster" + i).height(graphicZ + graphicZ + graphicZ);
$("#monster" + i).width(graphicZ + graphicZ + graphicZ);
monsterSize = graphicZ + graphicZ + graphicZ;
}
$("#monster" + i).css("transform", x - monsterX[i] - rotate);
}else{
var graphicZ = monsterZ[i] - z + 500;//make move and pos (num * 5) to balance it out
if(graphicZ > 0){
$("#monster" + i).height(graphicZ - graphicZ - graphicZ);
$("#monster" + i).width(graphicZ - graphicZ - graphicZ);
monsterSize = graphicZ - graphicZ - graphicZ;
}else{
$("#monster" + i).height(graphicZ + graphicZ + graphicZ);
$("#monster" + i).width(graphicZ + graphicZ + graphicZ);
monsterSize = graphicZ + graphicZ + graphicZ;
}
var oppositeRotate = x - monsterX[i] - rotate;
$("#monster" + i).css("transform", oppositeRotate + oppositeRotate + oppositeRotate);
}
if(monsterShot[i] == "Shot"){
$("#monster" + i).attr("src", "PnuematicPysco.github.io/bleedingMonster.png");
$("#monster" + i).height(monsterSize * 0.3);
$("#monster" + i).width(monsterSize);
}
if(monsterShot[i] == "bleeding"){
$("#monster" + i).attr("src", "PnuematicPysco.github.io/bleedingMonster.png");
$("#monster" + i).width(monsterSize);
$("#monster" + i).height(monsterSize);
}
}
}


function object3D(){
var i;
for(i = 0;i < objects;i++){
var object = document.getElementById(objectId[i]);
if(objectZ[i] > z){
var graphicZ = objectZ[i] - z - 500;//make move and pos (num * 5) to balance it out
if(graphicZ > 0){
$("#object" + i).width(graphicZ - graphicZ - graphicZ);
$("#object" + i).height(graphicZ - graphicZ - graphicZ);
}else{
$("#object" + i).height(graphicZ + graphicZ + graphicZ);
$("#object" + i).width(graphicZ + graphicZ + graphicZ);
}
$("#object" + i).css("transform", x - objectX[i] - rotate);
}else{
var graphicZ = objectZ[i] - z + 500;//make move and pos (num * 5) to balance it out
if(graphicZ > 0){
$("#object" + i).height(graphicZ - graphicZ - graphicZ);
$("#object" + i).width(graphicZ - graphicZ - graphicZ);
}else{
$("#object" + i).height(graphicZ + graphicZ + graphicZ);
$("#object" + i).width(graphicZ + graphicZ + graphicZ);
}
var oppositeRotate = x - objectX[i] - rotate;
$("#object" + i).css("transform", oppositeRotate + oppositeRotate + oppositeRotate);
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
if(monsterShot[i] == "bleeding"){
if(ammo > 0){
monsterShot[i] = "Shot";
ammo--;
ammo + 5;
}else{
textElement.innerHtml("no more ammo");
}
}
if(monsterShot[i] == "notShot"){
if(challengeMode == false){
monsterShot[i] = "Shot";
}else{
if(ammo > 0){
monsterShot[i] = "bleeding";
ammo--;
}else{
textElement.innerHtml("no more ammo");
}
}
}}}}
}else{
var graphicZ = monsterZ[i] - z - 500;
if(graphicZ > 0){
if(oppositeRotate > -10){
if(oppositeRotate < 10){
if(monsterShot[i] == "bleeding"){
if(ammo > 0){
monsterShot[i] = "Shot";
ammo--;
ammo + 5;
}else{
textElement.innerHtml("no more ammo");
}
}
if(monsterShot[i] == "notShot"){
if(challengeMode == false){
monsterShot[i] = "Shot";
}else{
if(ammo > 0){
monsterShot[i] = "bleeding";
ammo--;
}else{
textElement.innerHtml("no more ammo");
}
}
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
 if(name == "c"){
 challengeMode = true;
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


window.setInterval(fake3D, 1);
window.setInterval(object3D, 1);
window.setInterval(moveMonsters, totalMonsters * 1000);
