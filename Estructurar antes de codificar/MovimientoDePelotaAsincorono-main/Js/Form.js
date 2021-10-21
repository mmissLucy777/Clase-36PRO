class Form{ //Clase para el formulario de registro de los jugadores
    constructor(){}

    display(){
        var title = createElement("h2");//Cabecera del título
        title.html("Car Racing Game");
        title.position(130,0);      //Cordenadas exactas pa futuras preguntas

        var input = createInput("nombre"); //Variable para crear una entrada de datos para nombre
        var button = createButton("Play"); //Boton para inicar juego
        var greeting = createElement("h3"); //Subtítulo

        input.position(130,60); //Posición del la variable input en pantalla
        button.position(250,200);

        button.mousePressed(function(){ //Función para el clic sobre el botón
            input.hide(); //Oculta el nombre
            button.hide();  //Oculta el botón

            var name = input.value();   //Obtiene el valor de la entrada 
            playerCount=+1; //Actualiza el número de jugadores
            console.log("No. de jugadores: ", playerCount);
            player1.update(name); //Actualiza en la DB el nombre del jugador
            player1.updateCount(playerCount); //Actualiza en la DB el número de jugadores
            
            greeting.html("Holaaa " + name); //Saluda al jugador nuevo
            greeting.position(130,160); //Posición del mensaje de bienvenida en pantalla
        }); 
    }
}