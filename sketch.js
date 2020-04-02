const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 


var engine, world;

var raindrop = [];


function setup() {
 engine = Engine.create();
 world = engine.world;

  Engine.run(engine)
  createCanvas(400,400);
  
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  raindrop.push(new rainDrop(random(0, 400),0, random(1, 3), 10));
  
  for(var i = 0; i < raindrop.length; i++){
    raindrop[i].display();
  }
  
  drawSprites();
}