var dog;
var dogImg, dogImg1;
var database, foodS, foodStock;
function preload()
{
  dogImg = loadImage("images/Dino.png.png");
}

function setup() {
database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.50;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
  
}


function draw() {  
background("red");
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
}
drawSprites();
stroke("black");
text("Food Remaining :"  + foodS,170,200);
textSize(20);
text("note: press up arrow key to feed food to the dino",40,20)
}

function readStock(data){
foodS = data.val()
}
function writeStock(x){
if(x<=0){
  x = 0;
}
else{
  x = x - 1
}
database.ref("/").update({
  Food:x
})
}
