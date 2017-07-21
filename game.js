var ship;


function Ship(){
    this.x = width/2;

    this.show = function(){
        fill(255,255,255);
        rect(this.x,height-20,40,20);
    }

    this.move = function(m){
        this.x+=m;
    }
}

function setup(){
    createCanvas(1000,400);
    ship = new Ship();
}

function draw(){
    background(0);
    ship.show();
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        ship.move(5);
    } 
    else if(keyCode === LEFT_ARROW){
        ship.move(-5);
    }
    else{

    }
}