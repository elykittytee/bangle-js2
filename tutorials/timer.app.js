//https://www.espruino.com/Bangle.js+First+App

var counter = 10;
var counterInterval;

//define outOfTime
function outOfTime(){
  if(counterInterval) return;
  
  E.showMessage("Time's Up!", "My Timer");
  Bangle.buzz();
  Bangle.beep(200,4000)
    .then(() => new Promise(resolve => setTimeout(resolve,200)))
    .then(() => Bangle.beep(200, 3000));
  //again, 10 secs later
  setTimeout(outOfTime,10000);
  
}

//define countDown
function countDown() {
  counter--;
  
  // OUT OF TIME
  if (counter<=0){
    clearInterval(counterInterval);
    counterInterval = undefined;
    setWatch(startTimer, (process.env.HWVERSION==2) ? BTN1 : BTN2);
    outOfTime();
    return;
  }
  
  //clears screen
  g.clear();
  
  g.setFontAlign(0,0); // center font
  g.setFont("Vector",80); // bitmap font, 8x magnified
  
  //draws current counter value  
  g.drawString(counter,120,120);
  
  // keeps watch LCD lit, OPTIONAL
  Bangle.setLCDPower(1);
  
}

//
function startTimer(){
  counter=10;
  countDown();
  if(!counterInterval)
    counterInterval = setInterval(countDown,1000);
}


//call startTimer
startTimer();
