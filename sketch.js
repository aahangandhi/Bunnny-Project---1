const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, sling1, sling2, sling3;
var rabbit1;
var world, screw1, screw2, screw3, screw;
var Turns;
var score;
var gamestate = "start";

let sadSound
let eatingSound

function preload(){
	screw=loadImage("images/Cross.png");

  soundFormats('mp3', 'ogg');
  sadSound = loadSound('images/sad');
  eatingSound = loadSound('images/eat')
  }

function setup() {
createCanvas(525, 650);
engine = Engine.create();
world = engine.world;

stoneObj=new Stone(235,420,30); 

rabbit1=new Mango(262.5,570,100);

screw1 = createSprite(45,30,50,50)

treeObj=new Tree(1,1);
groundObject=new Ground(width/2,660,width,20);




sling1=new SlingShot(stoneObj.body,{x:70,y:55},200)
sling2=new SlingShot(stoneObj.body,{x:320,y:55},150)
sling3=new SlingShot(stoneObj.body,{x:425,y:155},150)

Turns = 0;
score = 0;

Engine.run(engine);
 
}

function draw() {

  background("rgb(155, 203, 255)");


  screw1 = image(screw,45,30,50,50);
  screw2 = image(screw,295,30,50,50);
  screw3 = image(screw,400,130,50,50);

  textFont("Cursive");
  fill('rgb(249, 59, 173)');

  textSize(30);
  text(" ",50,300);
  
  treeObj.display();
  stoneObj.display();
  rabbit1.display();
  
  stoneObj.display();


  groundObject.display();
  sling1.display();
  sling2.display();
  sling3.display();
  detectollision(stoneObj,rabbit1);
  }

function mouseDragged(){
  if(gamestate === "start"){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
}
}

function mouseReleased(){
	sling1.fly();
  sling2.fly();
  sling3.fly();
  gamestate = "launched";
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  sling1.attach(stoneObj.body);
    sling2.attach(stoneObj.body);
    sling3.attach(stoneObj.body);
    gamestate = "start";
    Turns = Turns +1;
	}
}

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  
  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r){
   stoneObj.visible = false;
   Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  sling1.attach(stoneObj.body);
    sling2.attach(stoneObj.body);
    sling3.attach(stoneObj.body);
    gamestate = "start";
    Turns = Turns +1;
 } 
}