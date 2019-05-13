
//create a variable to hold one ball

function setup() {
  createCanvas(1300, 650);

}


function draw(){
ellipse(650,325,350,350);
fill(247, 111, 147)



	translate(650,325);

	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
  rotate(radians(frameCount));

  line(0,-175,0,175);
  line(-175,0,175,0);
  line(123.744,123.744,-123.744,-123.7443);
  line(-123.744,123.744,123.744,-123.744);
}
