class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position;

        fill(255,255,255);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}