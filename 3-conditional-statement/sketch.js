let timer = 0;

function setup() {
  createCanvas(1300, 650);
  background(177, 207, 239);

}

function draw(){
print(timer);
if(frameCount > timer + 200){
    fill(0);
    rect(10,10,50, 50);
  }
}

function keyPressed(){
if (keyCode === ENTER) {
  timer = frameCount;

}

}
