const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,engine,world

var xforce=0,yforce=0;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(400,350,1000,20);
  oliver = new Oliver(100,50,40,40);
  arrow = new Oliver(oliver.body.position.x -20,oliver.body.position.y,40,10)
  topground = new Ground(400,50,1000,20);
  leftground = new Ground(10,200,20,800);
  rightground = new Ground(750,200,20,800);
  ball = new Ball(100,50,20);

  rope = new Slingshot(ball.body,oliver.body)

}

function draw() {
  background(0,0,0);  

  Engine.update(engine);
  ground.display();
  oliver.display();
  topground.display();
  rightground.display();
  leftground.display();
  ball.display();
  rope.display();
  arrow.display();
  fill("blue");
text("x: "+mouseX+" ,y:"+mouseY,mouseX,mouseY);
 if(detectcollision(oliver.body,ground.body)){
  var pos= oliver.body.position;
     Matter.Body.setPosition(oliver.body,{x:pos.x,y:320});
 }
 
 text("WASD to control oliver and arrow keys to control the arrow \n Space to shoot",260,100)
text("I want you to go through my code, especially the sketch.js and see how i have created functions with arguments to make things simple",25,150)
//  //setting the force of the arrow in x position
//  if(arrow.body.position.x === oliver.body.position.x){
//   xforce=0;
// }
// else if(arrow.body.position.x <= oliver.body.position.x){
//   xforce=(arrow.body.position.x -oliver.body.position.x)/300
// }
// else if(arrow.body.position.x > oliver.body.position.x){
//   xforce=-(oliver.body.position.x-arrow.body.position.x)/300 
// }

// //setting the force of the arrow in y position
//  if(arrow.body.position.y === oliver.body.position.y){
//   yforce=0;
// }
// else if(arrow.body.position.y < oliver.body.position.y){
//   yforce=(arrow.body.position.y -oliver.body.position.y)/300
// }
// else if(arrow.body.position.y > oliver.body.position.y){
//   yforce=-(oliver.body.position.y-arrow.body.position.y)/300 
// }
//shooting the arrow
 

 //rotating the arrow
//  if(keyIsDown(82)){
//    angle = arrow.body.angle;
//    angle+=10;
//    Matter.Body.setAngle(arrow.body,angle);

//  }
 
   oliverpos=oliver.body.position
   x_y_key(68,oliverpos.x+10,oliverpos.y,oliver.body)
   x_y_key(65,oliverpos.x-10,oliverpos.y,oliver.body)
   x_y_key(87,oliverpos.x,oliverpos.y-10,oliver.body)
   x_y_key(83,oliverpos.x,oliverpos.y+10,oliver.body)
   
   arrowpos=arrow.body.position
   x_y_key(RIGHT_ARROW,arrowpos.x+10,arrowpos.y,arrow.body)
   x_y_key(LEFT_ARROW,arrowpos.x-10,arrowpos.y,arrow.body)
   x_y_key(UP_ARROW,arrowpos.x,arrowpos.y-10,arrow.body)
   x_y_key(DOWN_ARROW,arrowpos.x,arrowpos.y+10,arrow.body)


   text(xforce+" "+yforce,200,20);
   setForce(oliverpos,arrowpos);
  }

  function detectcollision(body1,body2){
    collision = Matter.SAT.collides(body1,body2)
    if(collision.collided){
     return true;
     }
     else{
       return false;
     }
  }

  function keyPressed(){
    if(keyCode === 32){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:xforce,y:yforce}); 
      rope.fly();
    }
  }

  function x_y_key(key,x,y,body){
    if(keyIsDown(key)){
       Matter.Body.setPosition(body,{x:x,y:y});
     }
  
  }
  function setForce(object,forceobject){
    if(forceobject.x <= object.x){
      xforce=(forceobject.x -object.x)/300
    }
    else if(forceobject.x > object.x){
      xforce=-(object.x-forceobject.x)/300 
    }
    
    //setting the force of the arrow in y position
     if(forceobject.y <= object.y){
      yforce=(forceobject.y -object.y)/300
    }
    else if(forceobject.y > object.y){
      yforce=-(object.y-forceobject.y)/300 
    }
  }
