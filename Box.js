class Box {
    constructor(x, y, radius) {
      var options = {
          
          'restitution':0.1,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("lightblue");
      strokeWeight(4);
      stroke("black");
      circle(0, 0, this.radius);
      pop();
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    }
  };