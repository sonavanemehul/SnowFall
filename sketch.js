const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world;
var snowfall=[];
var random;
var maxSnowFall=100;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
 
  if (frameCount% 10 === 0){
      
          snowfall.push(new SnowFall(random(0,800),10));
      }
  }


function draw() {
  Engine.update(engine);
  background(0);

  for(var i=0; i<maxSnowFall; i++){
    snowfall[i].display();
    
  }
  drawSprites();
}