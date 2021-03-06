class Bob extends BaseClass{
    constructor(x,y,radius){
        super(x,y,radius,radius);
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2,
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        World.add(world, this.body); 
    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x, pos.y, this.radius, this.radius);

    }
  }