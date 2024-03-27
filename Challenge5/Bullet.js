function Bullet(x,y){

    this.x = x;
    this.y = y;
    this.r = 8
    this.toDelete = false;

    this.show = function(){
        fill(0,255,0);
        
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    this.move = function(){
        this.y = this.y-1;
    }
    this.hit = function(alien)
    {
        var d = dist(this.x,this.y,alien.x,alien.y);
        if(d <= this.r + alien.r)
        {
            return true;
        }
        else 
        {
            return false;
        }
            
    }

    this.burst = function(){
        this.toDelete = true;
    }
    
}