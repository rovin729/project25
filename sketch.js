
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var part1,ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 2000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,height,1200,20);
	ball=new Paper(100,1700);
	part1=new dustbin(700);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  ball.display();
  part1.display(700);
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:900,y:-900});
	 
	   }
	}
