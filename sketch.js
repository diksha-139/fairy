var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var poleStar;

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
	poleStar=loadImage("images/starImage.png")

}

function setup() {
	createCanvas(800, 750);


	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	ground= Bodies.rectangle(400,500,1000,20,{isStatic:true});
	World.add(world,ground);

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	fairyVoice.play();
	Engine.run(engine);


}


function draw() {
  background(bgImg);


  push ()
imageMode(CENTER);
image(poleStar,starBody.position.x,starBody.position.y,50,50)
pop()
  drawSprites();

}

function keyPressed() {
	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(starBody,false)
	}
	if(keyCode=== LEFT_ARROW){
		fairy.x=fairy.x-8;
	}
	if(keyCode=== RIGHT_ARROW){
		fairy.x=fairy.x+8;
	}
}
