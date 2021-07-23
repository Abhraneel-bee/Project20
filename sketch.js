var bgImg;
var cat,catImg,catImg2,mouse,mouseImg,mouseImg2;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,600);
    cat.addAnimation("catSleeping", catImg);
    cat.scale = 0.25;
    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding", mouseImg);
    mouse.scale = 0.15

    makeCatWalk();
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImg", catImg3);
        cat.x = 300;
        cat.scale =0.2
        cat.changeAnimation("catLastImg");
        mouse.addAnimation("mouseLastImg",mouseImg3);
        mouse.scale= 0.15;
        mouse.changeAnimation("mouseLastImg");
    }

    drawSprites();
}


function makeCatWalk(){

  mouse.addAnimation("mouseTeasing",mouseImg2)
  mouse.changeAnimation("mouseTeasing");
  mouse.frameDelay = 25;

  cat.velocityX = -5;
  cat.addAnimation("catRunning",catImg2);
  cat.changeAnimation("catRunning");


}
