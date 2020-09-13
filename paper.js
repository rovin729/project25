class Paper{
    constructor(Paperx,Papery){
       var options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Matter.Bodies.circle(Paperx,Papery,70,options);
        World.add(world,this.body);

        this.picture=loadImage('paper.png');
    }
    display(){
        imageMode(CENTER);
        var pos= this.body.position;
        image(this.picture,pos.x,pos.y);
    }
}