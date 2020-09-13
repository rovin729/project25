class dustbin{
    constructor(dustbinx){

        
        var box1 = Bodies.rectangle(dustbinx, 630, 200, 600,{isStatic:true});
	    World.add(world, box1);

	    var box2 = Bodies.rectangle(dustbinx-200, 1900, 20, 300,{isStatic:true});
	    World.add(world, box2);

	    var box3 = Bodies.rectangle(dustbinx+200, 1900, 20, 300,{isStatic:true});
        World.add(world, box3);
        
        this.picture2=loadImage('dustbingreen.png');
            
    }
    display(dustbinx){
        imageMode(CENTER);
        image(this.picture2,dustbinx,1850);
        rect(dustbinx-200,1900,20,300);
        rect(dustbinx+200,1900,20,300);
    }
}