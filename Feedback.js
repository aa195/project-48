class Feedback{

    constructor(){
        
      this.title = createElement('h1');
      this.title2 = createElemen('h3');
      //this.rule1 = createElement('h3');
      //this.rule2 = createElement('h3');
      //this.rule3 = createElement('h3');
      //this.rule4 = createElement('h3');
      this.input = createInput("Write your feedback");
  
      this.submit = createButton("SUBMIT");
  
    }
  
    hide(){
       // this.rule1.hide();
       // this.rule2.hide();
        //this.rule3.hide();
        //this.rule4.hide();
        this.input.hide();
        //this.start.hide();
        this.title.hide();
        this.submit.hide();
    }
  
    display(){
  
      background(bgimg);
  
     this.title.html("FEEDBACK !");
     
     this.title.position(displayWidth/4 + 80,displayHeight/10+30);
  
     /*this.rule1.html("1] Every level will have 3 chances. ");
     this.rule1.position(displayWidth/4,displayHeight/10+150);
  
     this.rule2.html("2] Main objective is to kill all the aliens and save the earth.");
     this.rule2.position(displayWidth/4,displayHeight/10+200);
  
     this.rule3.html("3] After completing a level,the difficulty increases. ");
     this.rule3.position(displayWidth/4,displayHeight/10+250);
  
     this.rule4.html("4] Unlock rewards by completing levels.")
     this.rule4.position(displayWidth/4,displayHeight/10+300);
     */
  






     this.title1.html("Thanks for playing the game !!");


     this.input.position(displayWidth/2,displayHeight/10+370);
     this.submit.position(displayWidth/2,displayHeight/10+440);
  
     
  
  
    }
  
  
  
  }