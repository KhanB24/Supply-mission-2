var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxleft,boxright,boxdown
var boxsprite,boxsprite2,boxsprite3


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 15 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	var options = {
		isStatic: true,
	  };


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);


	

	boxsprite = createSprite(300, 610, 20, 100);
	boxsprite.shapeColor = color(255, 0, 0);
  
	boxleft = Bodies.rectangle(300, 610, 20, 100, options);
	World.add(world, boxleft);
  
	boxsprite3 = createSprite(400, 650, 200, 20);
	boxsprite3.shapeColor = color(255, 0, 0);
  
	boxdown = Bodies.rectangle(400, 650, 200, 45, options);
	World.add(world, boxdown);
  
	boxsprite2 = createSprite(500, 610, 20, 100);
	boxsprite2.shapeColor = color(255, 0, 0);
  
	boxright = Bodies.rectangle(500, 610, 20, 100, options);
	World.add(world, boxright);



	
}


function draw() {
  rectMode(CENTER);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  boxsprite.x= boxleft.position.x 
  boxsprite.y= boxleft.position.y 

  boxsprite2.x= boxright.position.x 
  boxsprite2.y= boxright.position.y 

  boxsprite3.x= boxdown.position.x 
  boxsprite3.y= boxdown.position.y 
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	
  }
}



