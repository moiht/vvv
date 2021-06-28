
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var chain,bob1,log1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(100,600,50);
    bob2 = new Bob(150,600,50);
    bob3 = new Bob(200,600,50);
    bob4 = new Bob(250,600,50);
    bob5 = new Bob(300,600,50);
    bob6 = new Bob(350,600,50);
	log1 = new Dustbin(400,200,500,50);
    chain = new Chain(bob1.body,log1.body,-150,0); 
    chain1 = new Chain(bob2.body,log1.body,-100,0); 
    chain2 = new Chain(bob3.body,log1.body,-50,0); 
    chain3 = new Chain(bob4.body,log1.body,50,0); 
    chain4 = new Chain(bob5.body,log1.body,100,0); 
    chain5 = new Chain(bob6.body,log1.body,150,0); 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  log1.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
}



