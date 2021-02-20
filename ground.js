class ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var posg =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(posg.x, posg.y, this.width, this.height);
    }
  };
  