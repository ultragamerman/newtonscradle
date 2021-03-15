
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.onstraint;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);

	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(350,15,700,20);
	bob1 = new bob(310,200,10);
	bob2 = new bob(330,200,10);
	bob3 = new bob(350,200,10);
	bob4 = new bob(370,200,10);
	bob5 = new bob(390,200,10);
	rope1 = new rope(bob1.body,{x:310,y:15});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode == 32){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:15,y:-15})
	}
}


