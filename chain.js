class Chain {
    constructor(body1,body2,offsetx,offsetY){
    this.offsetX=offsetx;
    this.offsetY=offsetY;
    var options={
    bodyA:body1,
    bodyB:body2,
    stiffness:0.2,
    length:350,
    pointB:{x:this.offsetX,y:this.offsetY}
    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    
    }
    display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;    
    strokeWeight(2);
    var Anchor1X = pointA.x;
    var Anchor1Y=pointA.y;
    var Anchor2X=pointB+this.offsetX
    var Anchor2Y=pointB+this.offsetY
    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    
    
    }
    }
    