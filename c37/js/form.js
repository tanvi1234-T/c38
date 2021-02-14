class Form {
    constructor(){}

    display(){
        var title = createElement('h2')
        title.html('race car game')
        title.position(550,100)

        var input = createInput('playername')
        input.position(530,330)
        
        var button = createButton('play')
        button.position(600,380)

        var greeting = createElement('H1')
        greeting.position(500,380)
        
        button.mousePressed(function(){
         input.hide();
         button.hide();
         var name = input.value();
         playerCount+= 1;
         player.update(name);
         player.updateCount();
         greeting.html("hello " +name)

        })
    }
}