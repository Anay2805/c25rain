class rainDrop{
constructor(x, y, width, height){
    var options = {
        density : 0.3
    }
 this.body = Bodies.rectangle(x, y, width, height);
 this.width = width;
 this.height = height;
 World.add(world, this.body)



}

display(){

var pos = this.body.position;
push();
rectMode(CENTER);
fill("purple");
rect(pos.x, pos.y, this.width, this.height);
pop();
}


}