// app/index.js
const prompt = require('/home/ubuntu/.nvm/versions/node/v4.6.1/lib/node_modules/prompt');
const readline = require('readline');
const board = require('./board.js');
const pieces = require('./pieces.js');
require('events').EventEmitter.prototype._maxListeners = 100;
var gameBoard = board.createBoard();
var counter = 1;
var shipCount = 0;
var occupiedSpots = [];
var currentlyOccupiedSpots = [];
var gamePieces = pieces.createPieces();
    


function battleShipSpots(){
   
    const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
          terminal: false
        });
        
        rl.question('Enter spot for the 2 ship (A-J 1-10):', (answer) => {
          // TODO: Log the answer in a database
          shipCount+=1;
          currentlyOccupiedSpots.push(answer.toUpperCase());
          if(shipCount == 2 ){
              occupiedSpots.push(currentlyOccupiedSpots);
              currentlyOccupiedSpots = [];
          }
          if(shipCount == 5){
              occupiedSpots.push(currentlyOccupiedSpots);
              currentlyOccupiedSpots = [];
          }
          if(shipCount == 8){
              occupiedSpots.push(currentlyOccupiedSpots);
              
              
              currentlyOccupiedSpots = [];
          }
          if(shipCount == 12){
              occupiedSpots.push(currentlyOccupiedSpots);
              
              currentlyOccupiedSpots = [];
          }
          if(shipCount == 17){
              occupiedSpots.push(currentlyOccupiedSpots);
            
              currentlyOccupiedSpots = [];
          }
          for(var i = 1;i<=100;i++){
              if(gameBoard[i] == answer.toUpperCase()){
                  gameBoard[i] = "[]";
                  
                  
              }
          }
          if(counter == 17){
          answer = "exit";  
            }
          if (answer == 'exit') //we need some base case, for recursion
            return rl.close();
          
          counter+=1;
          battleShipSpots();
        });
        
        rl.on('close', () => {
            console.log("");
            board.initializeBoard(gameBoard);
            guess();
            
        });
        
}

function guess(){
    const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
          terminal: false
        });
        console.log("");
        rl.question('Guess a location (A-J 1-10): ', (guessedLocation) => {
            var split = guessedLocation.toUpperCase().split("");
            var indexOfArray = 0;
            for(var x = 0;x<occupiedSpots.length;x++){
                for(var y = 0;y<occupiedSpots[x];y++){
                    if(occupiedSpots[x][y] == guessedLocation.toUpperCase()){
                        indexOfArray = x;
                        break;
                    }    
                }    
            }
            if(split[0] == "A"){
                if(gameBoard[parseInt(split[1])] == "[]"){
                    console.log("HIT");
                    var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                    
                    occupiedSpots[indexOfArray].splice(index,1);
                    if(occupiedSpots[indexOfArray] == 0){
                        occupiedSpots.splice(indexOfArray,1);
                        console.log("SUNK!!!")
                    }
                    gameBoard[parseInt(split[1])] = "OO";
                    
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1])] = "XX";
                        
                }
            }
            else if(split[0] == "B"){
                if(gameBoard[parseInt(split[1]) + 10] == "[]"){
                    console.log("HIT");
                    var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                    
                    occupiedSpots[indexOfArray].splice(index,1);
                    if(occupiedSpots[indexOfArray] == 0){
                        occupiedSpots.splice(indexOfArray,1);
                        console.log("SUNK!!!")
                    }
                    gameBoard[parseInt(split[1])+10] = "OO";
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 10] = "XX";
                        
                }
            }
            else if(split[0] == "C"){
                if(gameBoard[parseInt(split[1]) + 20] == "[]"){
                    console.log("HIT");
                    var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                    
                    occupiedSpots[indexOfArray].splice(index,1);
                    if(occupiedSpots[indexOfArray] == 0){
                        occupiedSpots.splice(indexOfArray,1);
                        console.log("SUNK!!!")
                    }
                    gameBoard[parseInt(split[1])+20] = "OO";
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 20] = "XX";
                        
                }
            }
            else if(split[0] == "D"){
                if(gameBoard[parseInt(split[1]) + 30] == "[]"){
                    console.log("HIT");
                    var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                    
                    occupiedSpots[indexOfArray].splice(index,1);
                    if(occupiedSpots[indexOfArray] == 0){
                        occupiedSpots.splice(indexOfArray,1);
                        console.log("SUNK!!!")
                    }
                    gameBoard[parseInt(split[1])+30] = "OO";
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1])+30] = "XX";
                        
                }
            }
            else if(split[0] == "E"){
                if(gameBoard[parseInt(split[1]) + 40] == "[]"){
                    console.log("HIT");
                    var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                    
                    occupiedSpots[indexOfArray].splice(index,1);
                    if(occupiedSpots[indexOfArray] == 0){
                        occupiedSpots.splice(indexOfArray,1);
                        console.log("SUNK!!!")
                    }
                    gameBoard[parseInt(split[1])+40] = "OO";
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1])+40] = "XX";
                        
                }
            }
            else if(split[0] == "F"){
                if(gameBoard[parseInt(split[1]) + 50] == "[]"){
                    console.log("HIT");
                    var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                    
                    occupiedSpots[indexOfArray].splice(index,1);
                    if(occupiedSpots[indexOfArray] == 0){
                        occupiedSpots.splice(indexOfArray,1);
                        console.log("SUNK!!!")
                    }
                    gameBoard[parseInt(split[1])+50] = "OO";
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 50] = "XX";
                        
                }
            }
            else if(split[0] == "G"){
                if(gameBoard[parseInt(split[1]) + 60] == "[]"){
                    console.log("HIT");
                    var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                    
                    occupiedSpots[indexOfArray].splice(index,1);
                    if(occupiedSpots[indexOfArray] == 0){
                        occupiedSpots.splice(indexOfArray,1);
                        console.log("SUNK!!!")
                    }
                    gameBoard[parseInt(split[1])+60] = "OO";
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 60] = "XX";
                        
                }
            }
            else if(split[0] == "H"){
                if(gameBoard[parseInt(split[1]) + 70] == "[]"){
                    console.log("HIT");
                    var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                    
                    occupiedSpots[indexOfArray].splice(index,1);
                    if(occupiedSpots[indexOfArray] == 0){
                        occupiedSpots.splice(indexOfArray,1);
                        console.log("SUNK!!!")
                    }
                    gameBoard[parseInt(split[1])+70] = "OO";
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 70] = "XX";
                        
                }
            }
            else if(split[0] == "I"){
                if(gameBoard[parseInt(split[1]) + 80] == "[]"){
                    console.log("HIT");
                    var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                    
                    occupiedSpots[indexOfArray].splice(index,1);
                    if(occupiedSpots[indexOfArray] == 0){
                        occupiedSpots.splice(indexOfArray,1);
                        console.log("SUNK!!!")
                    }
                    gameBoard[parseInt(split[1])+80] = "OO";
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 80] = "XX";
                        
                }
            }
            else if(split[0] == "J"){
                if(gameBoard[parseInt(split[1]) + 90] == "[]"){
                    console.log("HIT");
                    var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                    
                    occupiedSpots[indexOfArray].splice(index,1);
                    if(occupiedSpots[indexOfArray] == 0){
                        occupiedSpots.splice(indexOfArray,1);
                        console.log("SUNK!!!")
                    }
                    gameBoard[parseInt(split[1])+90] = "OO";
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 90] = "XX";
                        
                }
            }
            if(occupiedSpots.length == 0){
                console.log("\n\nGAME OVER YOU WIN!!!!!!");
                process.exit()
            }
            board.initializeBoard(gameBoard);
            guess();
        })
        
}
function introduction(){
    console.log("\n\n****BATTLESHIP****\n\n");
    console.log("Legend:");
    console.log("XX - MISS");
    console.log("OO - HIT");
    console.log("[] - occupied space");
    console.log("\n\n");
    battleShipSpots();
    
}
introduction();