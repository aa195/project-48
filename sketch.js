var gameState = 0;
var playerCount;
var database;
var canvas;
var intro,pc,game;

var player;
var Player;
var bgimg,bgimg2;
var ssimg;

var pc,pcimg;
var score = 0;
var feedback;
var spaceship;
var bullet;
var bulletimg;



function preload(){

    bgimg = loadImage("5509862.jpg");
    bgimg2 = loadImage("1876.jpg");
    ssimg = loadImage("spaceship.png");
    bulletimg = loadImage("bullet.png")
    //pcimg = loadImage();
    
}

function setup(){

canvas = createCanvas(displayWidth,displayHeight);
database = firebase.database();

game = new GameState();
game.getState();
game.start();
player = new PC(500,800,50,50);
//bullet = new Bullet();
//bullet.vvelocityY = -8;
}

function draw(){
    
     

    if(playerCount===1){

        game.update(1);

    }
    if(gameState ===1){
        clear();
        game.play();
        fill ("white");
     textSize(30);
     text ("SCORE : "+score,width-250,50);
    }

   
 

}