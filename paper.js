class paper {
    constructor(x, y, r) {
      var options={
        restitution:0.8,
        friction:0.5,
        density:1.2

      }
      this.r=r
      this.image=loadImage("imgs/paper.png")
      this.body = Bodies.circle(x, y, r ,options);
      World.add(world, this.body);
    }
      display(){
        
        var pos =this.body.position;
        push()
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(255,0,255);
        ellipse(0, 0, this.r,this.r);
        pop()
      }
    };
