var play;
var how;
var about;
//var body = document.querySelector(".body");

var htp,ply , backButton , atg , lvl1;

gameState="wait"

function preload(){
waitimg=loadImage("splash.gif")
}


function setup(){
    createCanvas(windowWidth,windowHeight);

play=createImg("Play.png")
play.position(width-1180,550)
play.size(700,700)



how=createImg("how.png")
how.position(width-880,560)
how.size(700,680)


about=createImg("about.png")
about.position(width-380,820)
about.size(300,140)




}




function draw(){

if(gameState==="wait"){
background(waitimg)
}

if(gameState==="playstate")
{
    background("white")
}



    play.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
            background("white")
        //ply = new Play();
        //ply.display();
        gameState="playstate";
    })
        how.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
       // body.style.background="#A5E1FF"
               // htp = new Htp();
       // htp.display();
    })
        about.mousePressed(() =>{
        play.hide();
        about.hide();
        how.hide();
        //body.style.background="#A5E1FF";
      //  atg = new Atg();
      //  atg.display();
    })


}



function hide(){
    play.hide();
    how.hide();
    about.hide();
}