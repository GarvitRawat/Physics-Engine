const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ball, ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,420,50,object_options);
    World.add(world,object);

    var options = {
        restitution: 1
    }

    var ball_options = {
        restitution: 0.7
    }

    ball = Bodies.circle(200, 10, 20, options)
    World.add(world, ball)

    ball2 = Bodies.circle(100, 10, 20, ball_options)
    World.add(world, ball2)

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("white")
    rect(object.position.x,object.position.y,420,50);
    ellipseMode(RADIUS)
    fill("blue")
    ellipse(ball.position.x, ball.position.y, 20)
    fill("red")
    ellipse(ball2.position.x, ball2.position.y, 20)
    fill("white")
}
