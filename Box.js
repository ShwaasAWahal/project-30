class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':1.0,
          'friction':0.0,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 250
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3.5)
      {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
     World.remove(world, this.body);
    //  push();
    //  this.visibility = this.visibility -20;
    //  tint(255,this.visibility);
    //  pop();
    //  rectMode(CENTER)
    //  rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
    }

}