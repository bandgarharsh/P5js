function Ship(){
    this.x = width/2;
    this.y = height-20;
    this.xdir = 0
    this.show = function(){
        fill(255);
        rectMode(CENTER);
        rect(this.x,this.y,20,20);
    }
    this.setDir = function(dir){
        this.xdir = dir;
    }
    this.move = function(){
        this.x += this.xdir*5;
    }
}