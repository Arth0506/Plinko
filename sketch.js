var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var turns = 0;
var PLAY;
var END;
var gameState = PLAY;


var divisionHeight=300;
var divisions = [];
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  

   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(20)
  text("Score : "+score,20,30);
  textSize(25)
  text("500",20,550);
  textSize(25)
  text("500",100,550);
  textSize(25)
  text("500",180,550);

  textSize(25)
  text("100",260,550);
  textSize(25)
  text("100",340,550);
  textSize(25)
  text("100",420,550);

  textSize(25)
  text("1000",490,550);

  textSize(25)
  text("200",580,550);
  textSize(25)
  text("200",660,550);
  text("200",740,550);


  Engine.update(engine);
   
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){

      particle.display();

if(particle.body.position.y>760){
   if(particle.body.position.x < 250 && particle.body.position.x > 0){
          score=score+500;

   }

   if(particle.body.position.x < 490 && particle.body.position.x > 250){
           score=score+100;
    
   }



   if(particle.body.position.x > 490 && particle.body.position.x < 570){
   score=score+1000;
   
   }



   if(particle.body.position.x > 570 && particle.body.position.x < 800){
      score=score+200;
      
   }
   particle=null;
}

   //console.log(mouseX)
}
GameEnd();

}

function GameEnd(){
   if(turns>=5){ 
      gameState = END;
   
         textSize(40);
         text("Game Over", 320, 320);
      
   }
}
function mousePressed(){
   if(gameState===PLAY){

   
   if(turns < 5){
      particle = new Particle(mouseX,10,10);
      score++;
      turns++;
   }
}



}