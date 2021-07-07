class Box{
    constructor(x,y,width,height){
    var options={
isStatic: true

        }
this.image=loadImage("dustbingreen.png")
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
        var pos= this.body.position
        push();
        translate(pos.x,pos.y)
fill("brown")
rectMode(CENTER);
//rect(0,-100,this.width,this.height);
imageMode(CENTER)
image(this.image,0,-100,this.width,this.height)
pop()
        
    }



}