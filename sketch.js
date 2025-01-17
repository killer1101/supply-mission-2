var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box1,box2,box3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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
	groundSprite.shapeColor="brown"

	box1 = createSprite(290, 560, 20, 200);
	box1.shapeColor="red";

	//box2 = createSprite(400, 650, 200, 20);
	//box2.shapeColor="red";

	box3 = createSprite(500, 560, 20, 200);
	box3.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	var package_options = 
	{
		restitution:0.7,
		isStatic:true
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);
	
	var ground_options = 
	{
		restitution:1,
		isStatic:true
	}

	var box1_options =
	{
		restitution:1,
		isStatic:true
	}

	var box2_options =
	{
		restitution:0.5,
		isStatic:true
	}

	var box3_options =
	{
		restitution:1,
		isStatic:true
	}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
	 World.add(world, ground);
	 
	 box2 = Bodies.rectangle(width/2, 650, width, 10 , box2_options );
	 World.add(world, box2);
	 
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody,false);
	   
	 }
   }

