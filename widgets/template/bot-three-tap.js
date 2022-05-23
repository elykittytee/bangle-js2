const width=175;
const height=175;
const offset=25;
var state=false;

Bangle.on('touch',(n,e)=>{
  if (e.x > 0 && e.x < 58 && e.y > 120){
    touchSquare(0,120,58,height,0xf800);
  }
  else if (e.x > 58 && e.x < 117 && e.y > 120){
    touchSquare(58,120,117,height,0x0f80);
  }
  
  if (e.x > 117 && e.x < width && e.y > 120){
    touchSquare(117,120,width,height,0x00f8);
  }
});

function checkState() {
  if (state) {
    return false;
  }
  else {
    return true;
  }
}

function touchSquare(x1,y1,x2,y2,color){
  state=checkState();
  if (state) {
    g.clearRect(x1,y1,x2,y2);
  } else {
    g.clearRect(x1,y1,x2,y2);
    g.setColor(color);
    g.fillRect(x1,y1,x2,y2);
  }
}

function start() {  
  g.clear();
  g.setFont("4x6").drawString("Tap to show the tappable space.").setFontAlign(0,0);
}

//ready set go!
start();
