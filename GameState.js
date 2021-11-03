class GameState{

constructor(){

}

getState(){

var gsr = database.ref('gameState');
gsr.on("value",function(data){
    gameState = data.val();
});

}

update(state){

    database.ref('/').update({
        gameState : state
    });

}

async start(){
    
    if(gameState ===0){

     player = new PC();
     var pcr = await  database.ref('playerCount').once("value");
     if(pcr.exists()){
         playerCount = pcr.val();
         player.getCount();
     }

     intro = new Intro()
     intro.display();

    }
      
   
  // pc.addImage(pcimg);

}

play(){

 intro.hide();
 //player.getPcInfo();
 background(bgimg2);
 

 if(frameCount%90===0){
      spaceship = createSprite(displayWidth/2,displayHeight/2-300,100,100);
     spaceship.x = Math.round(random(displayWidth,displayWidth/8));
     spaceship.velocityY = 8;
     spaceship.addImage(ssimg)
 }

 var fire = createButton("FIRE");
 fire.position(displayWidth-100,400);
 fire.mousePressed(()=>{
     bullet = new Bullet();
 })

 if(keyIsDown(UP_ARROW) ){
     player.y+=-5;
     player.update();
 }
 if(keyIsDown(RIGHT_ARROW)){
     player.x+=8;
     player.update()
 }
 if(keyIsDown(LEFT_ARROW)){
     player.x+=-8;
     player.update()
 }

 
 player.visible = true;
drawSprites();
}

end(){
    if(gameState===2){
        feedback = new Feedback();

    }
}



}