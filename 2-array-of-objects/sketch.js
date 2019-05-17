

let buttona;
let buttonb;
let truthset = ["say this","say that","say the other thing"];
let dareset = ["do this","do that","do the other thing"];
let spinning = false;
let spin_start = 0;
let rotate_position = 0;


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
  fill(0, 102, 153);
  textSize(32);
  text('or', 650, 65);
  fill(247, 111, 147);
  ellipse(650,325,350,350);
  line(0, 100, 1300, 100);
  translate(650,325);
  fill(0);
  triangle(0, -160, -10, -185, 10, -185);



  // spin();
  push();
  if (spinning == true){
    if (frameCount <= 200+frame_start){
      rotate_position= rotate_position +1;
    }

  }
  rotate(radians(rotate_position));
  line(0,-175,0,175);
  line(-175,0,175,0);
  line(123.744,123.744,-123.744,-123.7443);
  line(-123.744,123.744,123.744,-123.744);
  pop();

}

function changeA(){
  spinning = true
  frame_start = frameCount;
  drawTruth(truthset[Math.floor(Math.random() * truthset.length)]);

}

function changeB(){
 spinning = true
 frame_start = frameCount;
 newDare();
 fill(0);
 var rand = dareset[Math.floor(Math.random() * dareset.length)];
 textSize(32);
 text(rand, 300, 0);
 stroke();
}



function drawTruth(random){
  noStroke();
  fill(177, 207, 239);
  rect(-600,-50,350,75);
  rect(300,-50,350,75);
  fill(0);
  var rand = truthset[Math.floor(Math.random() * truthset.length)];
  textSize(32);
  text(random, -600, 0);
  stroke();
}

function newDare(){
  noStroke();
  fill(177, 207, 239);
  rect(300,-50,350,75);
  rect(-600,-50,350,75);
}
