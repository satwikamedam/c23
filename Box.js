class Box
{
    constructor(x,y,width,height)
        {

var Box_options={
    'restitution':1,
'friction':3,
" density":5
}

        this.body=Bodies.rectangle(x,y,width,height,Box_options)
        World.add(world,this.body)
        }

        display()
        {
            push()
            translate(this.body.position.x,this.body.position.y)
            rotate(this.body.angle)
            rectMode(CENTER)
            fill("red")
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop()
        }
}