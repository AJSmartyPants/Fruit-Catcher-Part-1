var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player, form,game;
var player1,player2;
var players;
var fruit;
var fruitGroup;
var appleimg, bananaimg, watermelonimg, orangeimg, pineappleimg;
var player_img;
var score1 = 0;
var score2 = 0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  appleimg = loadImage("images/apple2.png");
  bananaimg = loadImage("images/banana2.png");
  watermelonimg = loadImage("images/melon2.png");
  orangeimg = loadImage("images/orange2.png");
  pineappleimg = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  // Add conditions for gameStates and playerCount
  if (gameState === 1){
    clear();
    game.play();
  }
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 2){
    game.end();
  }

}