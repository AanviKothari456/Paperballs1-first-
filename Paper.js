class Paper
{
  constructor(x, y) {
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        isStatic: false,
    }
    this.body = Bodies.circle(x, y, 30, options);
    this.width = 30;
    this.height =30;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
   
    fill("red");
    rectMode(CENTER);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};