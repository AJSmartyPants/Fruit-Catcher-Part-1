class Form{
    constructor(){
       this.input = createInput("").attribute("placeholder", "What's your name?");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '80px');
        this.title.style('color', 'cyan');
        this.input.position(550,400);
        this.input.style('width', '300px');
        this.input.style('height', '25px');
        this.input.style('background', 'gold');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'hotpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello, " + player.name + "!")
            this.greeting.position(400,250);
            this.greeting.style('color', 'lightgreen');
            this.greeting.style('font-size', '100px');
        });

    }
}