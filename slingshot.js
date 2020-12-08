class Slingshot{
    constructor(body,bodyb){
        var options={
            bodyA:body,
            bodyB:bodyb,
            length:1,
            stiffness:1.2
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    fly (){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        fill("black");
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, this.sling.bodyB.position.x, this.sling.bodyB.position.y)
        }
    }

}