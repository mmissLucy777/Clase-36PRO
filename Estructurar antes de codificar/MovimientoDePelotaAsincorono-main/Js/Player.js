class Player{ //Clase para los jugadores
    constructor(){}

    getCount(){//Función para obtener playerCount
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){playerCount = data.val();})
        console.log("playerCountRef", playerCountRef);
        //console.log("playerCount", playerCount);
    }//Fin getCount()

    updateCount(){ //Función para actualizar playerCount en la DB
        database.ref("/").update({playerCount: playerCount}); //playerCount fue creado en firebase
    }//Fin updateCount

    update(nombre){
        var playerIndex = "Jugador" + playerCount;
        database.ref(playerIndex).set({Nombre: nombre}) //nombre fue creado en firebase
    }
}