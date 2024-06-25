var x = 0.01;
var y = 0;
var z = 0;

var a = 10; //sigma
var b = 28; // row
var c = 8/3; //beta
var points = new Array();

function setup(){
    createCanvas(800,800,WEBGL);
    colorMode(HSB);
}

function draw(){
    background(51);
    var dt = 0.01;
    var dx = (a * (y - x ) )* dt;
    var dy = (x * (b - z) - y)* dt;
    var dz = (x * y - c * z)* dt;

    x = x + dx;
    y = y + dy;
    z = z + dz;
    translate(0, 0, -80);
    let camX = map(mouseX, 0, width, -200, 200);
    let camY = map(mouseY, 0, height, -200, 200);
    camera(camX, camY, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
    points.push(new p5.Vector(x, y, z));
    
    scale(5);
    stroke(255);
    noFill();

    let hu = 0;

    beginShape();

    points.forEach(e => {
        stroke(hu,255,255);
        vertex(e.x,e.y,e.z)
        hu += 1;
        if(hu > 255)
            hu = 0;
    });
    endShape();

    // println(x , y , z);
}