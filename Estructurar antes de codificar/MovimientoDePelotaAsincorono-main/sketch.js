var gameState =0;
var playerCount;

var database;
var form1, player1,game1,canvas;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database(); //Crea una base de datos en firebase

    game1 = new Game();
    game1.getState();
    game1.start();

}//Fin setup


function draw(){
    background(205, 92, 92); //RGB rojoIndian
}//Fin draw

