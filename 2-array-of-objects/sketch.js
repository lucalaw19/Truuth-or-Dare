

let buttona;
let buttonb;
let truthset = ["Who is the hottest person in the room?",
"Who do you want to punch in the face who goes to your school?","Have you ever touched your poop?","What would you do if you were the opposite gender for a month?","What would be the first thing you google if you were asleep for 50 years?"
"What’s the most expensive thing you ever stolen?",
"What’s your favorite taste?",
"What’s the worst grade you’ve ever gotten?",
"Have you ever gotten mono?",
"What is the biggest lie you’ve told?",
"When is the last time you’ve cried?",
"Would you rather not have hands or feet?"
"What is your worst grade right now?",
"Would you rather never take shower or not have eyelids?",
"What's your favorite ice cream flavor?",
""
];


let dareset = ["Lick a toe",
"Put on your insta story that you have mono",
"Give yourself two notches",
"Bite chapstick",
"Send an email to your least favorite teacher that you had a dream about them",
"Let your friend send a text to anyone on your phone",
"Draw a dog on your forehead in sharpie",
"Drink soda through your nose",
"Try to swallow your fist",
"Cut off a piece of your hair",
"Go up to a stranger and put your hand on their shoulder, wink, then walk away",
"Text the first alphabetically contact on your phone and maliciously threaten them.",
"Scroll through your snapchat friends and randomly select someone then text them 'wyd'."];



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
