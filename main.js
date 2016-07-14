var cNote = document.getElementById("c_note");

$("#c").click(function(){
  cNote.currentTime = 0;
  cNote.play();
});
var aNote = document.getElementById("a_note");

$("#a").click(function(){
  aNote.currentTime = 0;
  aNote.play();
});

var bNote = document.getElementById("b_note");

$("#b").click(function(){
  bNote.currentTime = 0;
  bNote.play();
});

var dNote = document.getElementById("d_note");

$("#d").click(function(){
  dNote.currentTime = 0;
  dNote.play();
});

var eNote = document.getElementById("e_note");

$("#e").click(function(){
  eNote.currentTime = 0;
  eNote.play();
});

var fNote = document.getElementById("f_note");

$("#f").click(function(){
  fNote.currentTime = 0;
  fNote.play();
});

var gNote = document.getElementById("g_note");

$("#g").click(function(){
  gNote.currentTime = 0;
  gNote.play();
});

$(document).keydown(function(e){
  //console.log(e.keyCode);
  if(e.keyCode == 81){
  cNote.currentTime = 0;
  cNote.play();
  }
  if(e.keyCode == 87){
    aNote.currentTime = 0;
    aNote.play();
  }
  if(e.keyCode == 69){
    bNote.currentTime = 0;
    bNote.play();
  }
  if(e.keyCode == 82){
    dNote.currentTime = 0;
    dNote.play();
  }
  if(e.keyCode == 84){
    eNote.currentTime = 0;
    eNote.play();
  }
  if(e.keyCode == 89){
    fNote.currentTime = 0;
    fNote.play();
  }
  if(e.keyCode == 85){
    gNote.currentTime = 0;
    gNote.play();
  }
});
