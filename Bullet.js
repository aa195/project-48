class Bullet{
    constructor(){

    }

    display(){

        bullet.createSprite(player.x,player.y);
        bullet.velocityY = -8;
        bullet.addImage(bulletimg);

    }
}