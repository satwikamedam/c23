const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   box1= new Box(150,100,50,90);
   box2=new Box(200,150,70,70);
   box3=new Box(250,200,90,90);
    ground=new Ground(200,height,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display()
   box2.display()
   box3.display()
ground.display()
}