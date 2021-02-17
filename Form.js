class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  //this.reset.hide()
  }

  display(){
    var title = createElement('h2')
    title.html("2 player t-rex runner");
    title.position(300, 100);

    this.input.position(300, 300);
    this.button.position(300,500);
    this.reset.position(300,100)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(300,300);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      database.ref("players/").remove();
    })
}
  restart(){
    console.log("game is restarting ")
  }
}