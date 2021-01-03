class dustbin {
    constructor(x,y,width,height) {
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.thickness=20;
        this.angle = 0;
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.thickness,options);
        this.leftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness, this.height,options);
        this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness, this.height,options);
        Matter.Body.setAngle(this.rightBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftBody)
		World.add(world, this.rightBody);
    }

    display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftBody.position;
			var posRight=this.rightBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			fill("red")
			stroke(255)
			rect(0,0,this.thickness, this.height);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			stroke(255)
			fill("red")
			rect(0,0,this.thickness, this.height);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			stroke(255)
			fill("red")
			rect(0,0,this.width, this.thickness);
			pop()
			
	}
}