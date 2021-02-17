var canvas, backgroundImage;  
var ground, groundImg;
var inground1, inground2
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
//trex is a array
var trex1,trex2,trex;
var trex1I, trex2I
var obstacle, obstacleG, obstacle1
var form, player, game;

function preload(){
  trex1I = loadImage("images/0.07 test.jpg")
  trex2I = loadImage("images/Dino test pink.jpg")
  groundImg = loadImage("images/ground.png")
  obstacle1 = loadImage("images/obstacle.jpg")
}

function setup(){
  canvas = createCanvas(800,800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  obstacleG = new Group();
}

function draw(){
  //console.log("GameState"+gameState)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  /*if(gameState === 2){
    game.end();
  }*/
}
