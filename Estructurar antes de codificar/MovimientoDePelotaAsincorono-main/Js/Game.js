class Game{
    constructor(){}

    getState(){ //Función para obtener el estado del juego
        var gameStateRef= database.ref('gameState'); //referencia al gameState de la DB creada
        gameStateRef.on("value",function(data){gameState = data.val();}) //Crea oyente para el gameState del juego
        console.log("Valor del gameState", gameState); 
    }//Fin gameState()

    update(){//Función para actualizar la referencia de la DB
        database.ref("/").update({gameState: satate}); // "/" se refiere a la DB principal del gameState, la "raíz"
    }//Fin update()

    start(){ //Función para iniciar el juego, se mostrará en pantalla dependiendodel estado del juego
        if(gameState === 0){ 
            player1 = new Player() //Crera un objeto para el jugador
            player1.getCount(); //Obtiene el puntaje para el jugador
            form1 = new Form(); //Crea un objeto para el formulario
            form1.display(); //Muestra el formulario
        }
    }
    //Crea un oyente que sigue escuchando gameStatede la DB  
}//Fin class