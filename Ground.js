class Ground
{
constructor(x,y,width,height)
{

var Ground_options={
isStatic:true
}


this.body1=Bodies.rectangle(x,y,width,height,Ground_options)
World.add(world,this.body1)
}

display()
{
rectMode(CENTER)

rect( this.body1.position.x, this.body1.position.y,this.width,this.height);
}
}
















