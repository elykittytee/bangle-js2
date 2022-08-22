const width=175;
const height=175;
var counter = 60;
var counterPause=0;
var interval = setInterval(countDown, 1000);
var state=0;

function countDown() {
  if (counter>0){
    counter--;
    g.clear();
    // draw the current counter value
    g.drawString(counter, g.getWidth()/2, g.getHeight()/2);
    // optional - this keeps the watch LCD lit up
    Bangle.setLCDPower(1);
  }
}

function drawCounter(CURRENT_COUNT) {
  g.drawString(CURRENT_COUNT, g.getWidth()/2, g.getHeight()/2);
}

function reset(){
  counter=60;
  state=0;
}

Bangle.on('touch',(n,e)=>{
  if (e.x < 175 && e.y < height/2){
    if (state==0){
      countDown();
      state=1;
    }
  }
  if (e.x < 175 && e.y > height/2) {
    if (state==1){
      state=2;
      counterPause=counter;
      g.drawString(counterPause, g.getWidth()/2, g.getHeight()/2);
    }
    if (state==2){
      //resume
    }
  }
});

g.clear();
drawCounter(counter);
