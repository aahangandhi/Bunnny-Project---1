class SlingShot{
    constructor(body, anchor, whatlength, whatgravity){
        var option={
            bodyA: body,
            pointB: anchor,
            length: whatlength,
            gravity:0.01
        }
        
        this.bodyA=body
            this.pointB=anchor
            this.length=whatlength
            this.slingshot=Constraint.create(option)
            World.add(world,this.slingshot)
        }
    
        attach(body){
            this.slingshot.bodyA=body;
        }
    
        fly()
        {
            this.slingshot.bodyA=null;
        }
    
        display()
        {
            if(this.slingshot.bodyA)
            {
                var pointA=this.bodyA.position;
                var pointB=this.pointB
                var length=this.length
    
                strokeWeight(2);	
                stroke('red')	
                line(pointA.x,pointA.y,pointB.x,pointB.y,length);
            }
        }
    }