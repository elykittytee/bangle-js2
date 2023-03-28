const storage = require('Storage');
const locale = require("locale");
require("FontHaxorNarrow7x17").add(Graphics);
require("FontDylex7x13").add(Graphics);
const currentFont=g.getFont();

const width = 175; 
const height = 175;

const offset = 25;

var d = new Date();
var nowDate = d.getDate(); //today's date
var encourage = ["you\'re doing great!","pas de deux it!","you\'re amazing~","you got dis","keep going","you\'re one\nin a melon!","we\'re rooting\nfor you!","believe in\nyourself","dance like\nno one\'s\nwatching"];
var encouragementtest = "you\'re one\nin a melon!";

//ready set go!
g.clear();
Bangle.drawWidgets();
Bangle.loadWidgets();


g.drawRect(0,offset*2,175,175-offset*2);
g.setColor(0,0,0);
g.setFont("Dylex7x13",2).setFontAlign(0,0).drawString(encouragementtest, width/2, height/2);
