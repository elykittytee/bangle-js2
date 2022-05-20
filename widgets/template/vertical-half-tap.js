
const width=175;
const height=175;

var state=0;

Bangle.on('touch',(n,e)=>{
  // <88, top
  if (e.x < 175 && e.y < 88){
    rectangle(0,0,0xF800);
  }
  else {// >88, bot
    rectangle(0,88,0x001F);
  }
});

function checkState() {
  if (state==0) {
    state+=1;
    return false;
  }
  else {
    state=0;
    return true;
  }
}

function rectangle(x, y, color,state){
  state=checkState();
  if (state) {
    g.clearRect(0,0,width,height);
  } else {
    g.clearRect(0,0,width,height);
    g.setColor(color);
    g.fillRect(x, y, width, y+height/2);
  }
}

function start() {  
  g.clear();
  g.setFont("4x6").drawString("Tap the top half for red\nand the bottom half for blue.").setFontAlign(0,0);
}

//ready set go!
start();
