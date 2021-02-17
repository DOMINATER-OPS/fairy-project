var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(150 , 30 , 20 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  
		fairy.velocityX=0
		fairy.velocitY=0
		
		background(bgImg);
	Engine.update(engine)
	drawSprites();
	if(keyDown("RIGHT")){
	Matter.Body.setStatic(starBody,false)
	fairy.velocityX=5
	}
	if(keyDown("LEFT")){
		Matter.Body.setStatic(starBody,false)
		fairy.velocityX=-5
		}
		if(keyDown("DOWN")){
			Matter.Body.setStatic(starBody,false)
			star.velocityY=3
			}
			

}

