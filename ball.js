class Ball {
    constructor(x,y,r) {
      var options = {
         restitution:0.4,
         friction:1,
         frictionAir:0.5
      }
      this.body = Bodies.circle(x,y,r,options);
     this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };
