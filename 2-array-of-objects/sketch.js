

let buttona;
let buttonb;
let truthset = ["say this","say that","say the other thing"];
let dareset = ["do this","do that","do the other thing"];



function setup() {
  createCanvas(1300, 650);
  background(177, 207, 239);
  buttona = createButton('Truth');
  buttona.position(400, 50);
  buttona.mousePressed(changeA);
  buttonb = createButton('Dare');
  buttonb.position(900, 50);
  buttonb.mousePressed(changeB);
}


function draw(){
  textSize(32);
  text('or', 650, 65);
  fill(0, 102, 153);
  line(0, 100, 1300, 100);
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

function changeA(){
  noStroke();
  fill(177, 207, 239);
  rect(10,275,350,75);
  fill(0);
  var rand = truthset[Math.floor(Math.random() * truthset.length)];
  textSize(32);
  text(rand, 50, 325);
}

function changeB(){
 noStroke();
 fill(177, 207, 239);
 rect(900,275,350,75);
 fill(0);
 var rand = dareset[Math.floor(Math.random() * dareset.length)];
 textSize(32);
 text(rand, 1000, 325);
}
