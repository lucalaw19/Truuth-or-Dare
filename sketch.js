
let buttona;
let buttonb;
let truthset = ["Who is the hottest person in the room?","Who do you want to punch in the face who goes to your school?","Have you ever touched your poop?","What would you do if you were the opposite gender for a month?","What would be the first thing you google if you were asleep for 50 years?","What’s the most expensive thing you ever stolen?","What’s your favorite taste?","What’s the worst grade you’ve ever gotten?","Have you ever gotten mono?","What is the biggest lie you’ve told?","When is the last time you’ve cried?","Would you rather not have hands or feet?","What is your worst grade right now?","Would you rather never take shower or not have eyelids?","What's your favorite ice cream flavor?"];

let dareset = ["Lick a toe","Put on your insta story that you have mono","Give yourself two notches","Bite chapstick","Send an email to your least favorite teacher that you had a dream about them","Let your friend send a text to anyone on your phone","Draw a dog on your forehead in sharpie","Drink soda through your nose","Try to swallow your fist","Cut off a piece of your hair","Go up to a stranger and put your hand on their shoulder, wink, then walk away","Text the first alphabetically contact on your phone and maliciously threaten them.","Scroll through your snapchat friends and randomly select someone then text them 'wyd'."];
let pressed = 0;
let spintimer = 0;
let buttonc;

let t_or_d = 0;



function setup() {
  createCanvas(1300, 650);
  background(177, 207, 239);
  buttona = createButton('Truth');
  buttona.position(400, 50);
  buttona.mousePressed(changeA);
  buttonb = createButton('Dare');
  buttonb.position(900, 50);
  buttonb.mousePressed(changeB);
  buttonc = createButton('Play Again');
  buttonc.position(width/2-30,height);
  buttonc.mousePressed(playAgain);
  buttonc.hide();
}


function draw(){
  print(pressed);
  textSize(32);
  fill(255,0,0);
  text('or', 650, 65);
  fill(0, 102, 153);
  line(0, 100, 1300, 100);
  ellipse(650,325,350,350);
  fill(247, 111, 147)

  // then rotate the grid around the pivot point by a
  // number of degrees equal to the frame count of the sketch
  if(pressed == 0){
    buttonc.hide();
    noStroke();
    fill(177, 207, 239);
    rect(10,275,450,75);
    noStroke();
    fill(177, 207, 239);
    rect(828,275,500,75);
    push();
    translate(650,325);
    rotate(radians(frameCount));
    spintimer = frameCount;
    print(spintimer);
    stroke(0);
    line(0,-175,0,175);
    line(-175,0,175,0);
    line(123.744,123.744,-123.744,-123.7443);
    line(-123.744,123.744,123.744,-123.744);
    pop();
  }

  if (pressed == 1){
    print(spintimer);
    push();
    translate(650,325);
    rotate(radians(frameCount));
    stroke(0);
    line(0,-175,0,175);
    line(-175,0,175,0);
    line(123.744,123.744,-123.744,-123.7443);
    line(-123.744,123.744,123.744,-123.744);
    pop();
  }

  if(frameCount == spintimer + 100){
     pressed = 3;
  }

  if (pressed == 3 && t_or_d == 1){

    noStroke();
    fill(177, 207, 239);
    rect(200,275,500,75);
    fill(0);
    var rand = truthset[Math.floor(Math.random() * truthset.length)];
    textSize(12);
    text(rand, 50, 325);
    pressed = pressed+1;
  }
  if (pressed == 3 && t_or_d == 2){

    noStroke();
    fill(177, 207, 239);

    rect(825,275,500,75);
    fill(0);
    var rand = dareset[Math.floor(Math.random() * dareset.length)];
    textSize(12);
    text(rand, 830, 325);
    pressed = pressed+1;
  }
  if (pressed == 4){
    push();
    translate(650,325);
    stroke(0);
    line(0,-175,0,175);
    line(-175,0,175,0);
    line(123.744,123.744,-123.744,-123.7443);
    line(-123.744,123.744,123.744,-123.744);

    buttonc.show();
  }

}

function changeA(){
  pressed=pressed+1;
  t_or_d=1;

}

function changeB(){
  pressed = pressed +1;
  t_or_d=2;

}

function playAgain(){
  pressed = 0;
}
