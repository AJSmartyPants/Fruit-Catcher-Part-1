class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing the name of the player on the basket. 
            fill("indigo");
            textSize(23);
            text(allPlayers[plr].name, x-25, y+25);
        }


        // Give movements for the players using arrow keys
        if(keyIsDown(LEFT_ARROW) && player.index !== null){
            player.distance += 10;
            player.update();
        }
        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.distance -= 10;
            player.update();
        }

        // Create and spawn fruits randomly
        if(frameCount % 5000 && player.index !== null){
            var randx = Math.round(random(0, displayWidth));
            var randvel = Math.round(random(5, 8));
            var fruit = createSprite(randx, 0, 100, 100);
            fruit.velocityY = randvel;
            var randval = Math.round(random(1, 5));
            switch(randval){
                case 1: fruit.addImage("apple", appleimg);
                break;
                case 2: fruit.addImage("banana", bananaimg);
                break;
                case 3: fruit.addImage("watermelon", watermelonimg);
                break;
                case 4: fruit.addImage("orange", orangeimg);
                break;
                case 5: fruit.addImage("pineapple", pineappleimg);
                break;
                //case 6: fruit.addImage("apple", appleimg);
                //break;
            }
            fruitGroup.add(fruit);
        }
        
    }

    end(){
       console.log("Game Ended");
    }
}