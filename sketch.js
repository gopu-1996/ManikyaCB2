var rect1,rect2,rect3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	dustbin1 = new dustbin()
	paper1=new 	paper(110,450,30)


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);


	Engine.run(engine);

	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper1.display()
  dustbin1.display()
  
  
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-150})
	}
}