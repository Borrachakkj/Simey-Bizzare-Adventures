var simey;
var cisco;
var gameState = "prologo";
var lixo1;

function setup() {
  createCanvas(1390,790);
  simey = createSprite(200,200,20,20);
  simey.shapeColor="green";
  cisco = createSprite(400,200,20,20);
  cisco.shapeColor="orange";
}

function draw() 
{
  background(30);
  drawSprites();

  //Prologo
  if(gameState=="prologo"){
    textSize(20);
    fill("Green");
    text("Um belo dia Simey estava na escola quando...",490,395);
    text("CISCO FEZ CISCAGEM!",490,420);
    text("então simey ficou encarregado de arrumar essa bagunça... Mas...",490,440);
    fill("grey");
    text("aperte enter para continuar",1120,740);
  }
  
  if(gameState=="prologo" && keyDown("Enter")){
    gameState ="prologopagina2";
  }

  if(gameState=="prologopagina2"){
    textSize(20);
    fill("Green");
    text("ESSA CISCAGEM FOI DIFERENTE!",490,420);
    fill("grey");
    text("aperte Space para começar",1120,740);
  }

  //começar nivel 1
  if(gameState=="prologopagina2" && keyDown("Space")){
    gameState="jogoNivel1";
  }
  
  //lixos do nivel1
  if(gameState=="jogoNivel1"){
    fase2();
  }

  //movimento do simey
  if(keyDown("UP_ARROW")){
    simey.y=simey.y-3;
  }
  if(keyDown("DOWN_ARROW")){
    simey.y=simey.y+3;
  }
  if(keyDown("RIGHT_ARROW")){
    simey.x=simey.x+3;
  }
  if(keyDown("LEFT_ARROW")){
    simey.x=simey.x-3;
  }

  if(simey.isTouching(cisco)){
    fill("Red");
    text("me solta simey",190,200);
  }
}

function fase2(){
  lixo1 = createSprite(200,300,8,8);
  lixo2 = createSprite(400,200,8,8);
  lixo3 = createSprite(200,400,8,8);
  lixo4 = createSprite(400,400,8,8);
  lixo5 = createSprite(600,200,8,8);
  lixo6 = createSprite(600,400,8,8);
  lixo7 = createSprite(800,200,8,8);
  lixo8 = createSprite(800,400,8,8);
  if(lixo1.isTouching(simey)){
    lixo1.destroy();
  }
}


