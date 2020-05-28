class Chain {
    constructor(bodyA, bodyB){
      var options = {
          bodyA: bodyA,
          bodyB: bodyB,
          stiffness:0,
          length: 10
  
      }
      this.chain = Constraint.create(options);
      World.add(world, this.chain);
  }
  display(){
      var pointA = this.bodyA.position;
      var pointB = this.bodyB.position;
      strokeWeight(4);
      stroke("white");
      //line(pointA.x, pointA.y, pointB.x, pointB.y);
      //line(200, 200, mouseX, mouseY);
  }
  
  };
  
  