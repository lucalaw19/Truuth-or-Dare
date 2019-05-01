//create a variable to hold one ball
let b;
let anotherBird;
let otherBird;

function setup() {
  createCanvas(800, 400);
  red = new Bird(0, 0,"red"); //make a new ball from the Ball class and call it b.
  orange = new Bird(0,20,"orange");
  yellow = new Bird(0, 40, "yellow");
  green = new Bird(0, 60,"green");
  blue = new Bird(0, 80,"blue");
  purple = new Bird(0, 100,"purple");
}


function draw(){
	background(220);
    red.drawBird();
    red.moveBird();
    orange.drawBird();
    orange.moveBird();
    yellow.drawBird();
    yellow.moveBird();
    green.drawBird();
    green.moveBird();
    blue.drawBird();
    blue.moveBird();
    purple.drawBird();
    purple.moveBird();

}


//ball class from which to create new balls with similar properties.
class Bird {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBird(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    rect(this.x,this.y,10,10);
	}
	moveBird(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}
