const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygonImage;

function preload(){
  polygonImage=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  //set 2 for second stand
  //level one
  block1 = new Block(640,175,30,40);
  block2 = new Block(670,175,30,40);
  block3 = new Block(700,175,30,40);
  block4 = new Block(730,175,30,40);
  block5 = new Block(760,175,30,40);
  //level two
  block6 = new Block(670,135,30,40);
  block7 = new Block(700,135,30,40);
  block8 = new Block(730,135,30,40);
  //top
  block9 = new Block(700,95,30,40);

  //creating a round type shape.
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  //creating polygon
    slingshot = new SlingShot(bird.body,{x:100, y:200});

  //set one
  dectectcollision(polygonObject, block1);
  dectectcollision(polygonObject, block2);
  dectectcollision(polygonObject, block3);
  dectectcollision(polygonObject, block4);
  dectectcollision(polygonObject, block5);
  dectectcollision(polygonObject, block6);
  dectectcollision(polygonObject, block7);
  dectectcollision(polygonObject, block8);
  dectectcollision(polygonObject, block9);
  dectectcollision(polygonObject, block10);
  dectectcollision(polygonObject, block11);
  dectectcollision(polygonObject, block12);
  dectectcollision(polygonObject, block13);
  dectectcollision(polygonObject, block14);
  dectectcollision(polygonObject, block15);
  dectectcollision(polygonObject, block16);

  //set two
  dectectcollision(polygonObject, block1);
  dectectcollision(polygonObject, block2);
  dectectcollision(polygonObject, block3);
  dectectcollision(polygonObject, block4);
  dectectcollision(polygonObject, block5);
  dectectcollision(polygonObject, block6);
  dectectcollision(polygonObject, block7);
  dectectcollision(polygonObject, block8);
  dectectcollision(polygonObject, block9);
}

function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("turquoise");
  block6.display();
  block7.display();
  block8.display();
  fill("pink");
  block9.display();

  polygonObject.display();
 }


 function mouseDragged(){
  Matter.Body.setPosition(polygonImage.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function detectcollision(Lpolygon, Lblock){
  blockBodyPosition = Lblock.body.position
  polygonBodyPosition = Lpolygon.body.position
}
