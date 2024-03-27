function Alien(x,y){

    this.x = x;
    this.y = y;
    this.r = 30;

    this.xdir = 2;


    this.shiftDown = function(){
        this.xdir *= -1;
        this.y += this.r;
    }

    this.show = function(){
        fill(255,0,0);
        
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
  
    this.move = function(){
        this.x = this.x + this.xdir;
      
    }

    this.ko = function (){
        this.r = this.r+2;
    }
}