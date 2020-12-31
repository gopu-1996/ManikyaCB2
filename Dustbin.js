class dustbin{
  constructor(x,y,width,height){
    var options={
      isStatic:true
  }
  this.image=loadImage("dustbin.png")

  //this.angle=0;
  this.width=width;
  this.height=height;

  this.rect1=Bodies.rectangle(x,y,width,height,options);
  this.rect2=Bodies.rectangle(660,580,10,150,options);
  this.rect3=Bodies.rectangle(500,580,10,150,options)

  World.add(world, this.rect1)
  World.add(world, this.rect2)
  World.add(world, this.rect3)

 // Matter.Body.setAngle(this.rect2,this.angle);
  //Matter.Body.setAngle(this.rect3,this.angle);

  }
  
  display(){
      var pos1=this.rect1.position;
      var pos2=this.rect2.position;
      var pos3=this.rect3.position;
     
          
    push()
   // translate(pos2.x, pos2.y);
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    //rotate(this.rect2.angle)
    rect(630,575,20,170);
    pop()
          
    push()
   // translate(pos3.x, pos3.y);
   // rotate(this.rect3.angle);
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    rect(520,575,20,170);
    pop()

    push()
    translate(pos1.x, pos1.y);
    imageMode(CENTER)
    fill(255)
    stroke(255)
    image(this.image,580,570,150,180);
    pop()
    //image(this.image,490,460,170,180)
  }


}