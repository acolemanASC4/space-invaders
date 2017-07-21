var ship;


function Ship(){
    this.x = width/2;

    this.show = function(){
        fill(255,255,255);
        rect(this.x,height-30,40,20);
    }

    this.move = function(m){
       if(this.x <= 0){
            this.x+=10;
       }
        else if(this.x >= width - 40){
            this.x-=10;
        }
        else{
            this.x+=m;
        }
    }
}

function Alien(x,y){
    this.x = x;
    this.y = y;

    this.show = function(){
        fill(0,255,0);
        
    }
}

function setup(){
    background('black');
    createCanvas(600,700);
    ship = new Ship();
}

function draw(){
    background('gray');
    ship.show();
    if(keyIsDown(RIGHT_ARROW)){
        ship.move(10);
    } 
    else if(keyIsDown(LEFT_ARROW)){
        ship.move(-10);
    }
}

/*
function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        ship.move(10);
    } 
    else if(keyCode === LEFT_ARROW){
        ship.move(-10);
    }
}

*/