class Intro{

  constructor(){
      
    this.title = createElement('h1');
    this.rule1 = createElement('h3');
    this.rule2 = createElement('h3');
    this.rule3 = createElement('h3');
    this.rule4 = createElement('h3');
    this.input = createInput("Enter your hero name");

    this.start = createButton("START");

  }

  hide(){
      this.rule1.hide();
      this.rule2.hide();
      this.rule3.hide();
      this.rule4.hide();
      this.input.hide();
      this.start.hide();
      this.title.hide();
      this.start.hide();
  }

  display(){

    background(bgimg);

   this.title.html("RULES AND OBJCTIVES OF THE GAME");
   
   this.title.position(displayWidth/4 + 80,displayHeight/10+30);

   this.rule1.html("1] Every level will have 3 chances. ");
   this.rule1.position(displayWidth/4,displayHeight/10+150);

   this.rule2.html("2] Main objective is to kill all the aliens and save the earth.");
   this.rule2.position(displayWidth/4,displayHeight/10+200);

   this.rule3.html("3] After completing a level,the difficulty increases. ");
   this.rule3.position(displayWidth/4,displayHeight/10+250);

   this.rule4.html("4] Unlock rewards by completing levels.")
   this.rule4.position(displayWidth/4,displayHeight/10+300);

   this.input.position(displayWidth/2,displayHeight/10+370);
   this.start.position(displayWidth/2,displayHeight/10+440);

   this.start.mousePressed(()=>{
       
    this.rule1.hide();
    this.rule2.hide();
    this.rule3.hide();
    this.rule4.hide();
    this.input.hide();
    this.start.hide();
    this.title.hide();
    this.start.hide();
    player.name = this.input.value();
    playerCount+=1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);


   })

   


  }



}