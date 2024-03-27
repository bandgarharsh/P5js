var ship;
var alien = [];
var bullets = [];

function setup(){
    createCanvas(600,400);
    ship = new Ship;
    for(let i=0;i<5;i++){
        alien[i] = new Alien(i*80+80,60);
    }
   
    
}

function draw(){
    background(51);
    ship.show();
    ship.move();
    for(let i=0;i<bullets.length;i++){
        bullets[i].show();
        bullets[i].move();
        for(let j = 0;j<alien.length; j++)
        {
            if(bullets[i].hit(alien[j]))
            {
                alien[j].ko();
                bullets[i].burst();
                console.log("Hit!!!");
            }
        }
        
    }
    var edge = false;
    for(let i=0;i<alien.length;i++){
        alien[i].show();
        alien[i].move();
        if(alien[i].x > width || alien[i].x < 0)
        {
            edge = true;
        }
    }
    if(edge)
    {
        for(var i = 0;i<alien.length;i++){
            alien[i].shiftDown();
        }
    }
    for(let i = bullets.length-1;i>=0;i--)
    {
        if(bullets[i].toDelete)
        {
            bullets.splice(i,1);
        }
    }
    
}

function keyReleased(){
    if(key!=' ')
    ship.setDir(0);
}
function keyPressed()
{
    if(key===' ')
    {
        var bullet = new Bullet(ship.x,ship.y);
        bullets.push(bullet);
    }
    if(keyCode === RIGHT_ARROW)
    {
        ship.setDir(1);
    }
    else if(keyCode === LEFT_ARROW)
    {
        ship.setDir(-1);
    }
}