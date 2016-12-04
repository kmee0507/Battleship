// app/index.js
const prompt = require('/home/ubuntu/.nvm/versions/node/v4.6.1/lib/node_modules/prompt');
const readline = require('readline');
const board = require('./board.js');
const pieces = require('./pieces.js');
require('events').EventEmitter.prototype._maxListeners = 100;
var gameBoard = board.createBoard();
 var counter = 1;
var gamePieces = pieces.createPieces();
    


function battleShipSpots(){
   
    const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
          terminal: false
        });
        
        rl.question('Enter spot for the 2 ship (A-J 1-10):', (answer) => {
          // TODO: Log the answer in a database
          
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
            var split = guessedLocation.split("");
            
            if(split[0] == "A"){
                if(gameBoard[parseInt(split[1])] == "[]"){
                    console.log("HIT");
                    gameBoard[parseInt(split[1])] = "OO";
                    //board.initializeBoard(gameBoard);
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1])] = "XX";
                        
                }
            }
            else if(split[0] == "B"){
                if(gameBoard[parseInt(split[1]) + 10] == "[]"){
                    console.log("HIT");
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 10] = "XX";
                        
                }
            }
            else if(split[0] == "C"){
                if(gameBoard[parseInt(split[1]) + 20] == "[]"){
                    console.log("HIT");
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 20] = "XX";
                        
                }
            }
            else if(split[0] == "D"){
                if(gameBoard[parseInt(split[1]) + 30] == "[]"){
                    console.log("HIT");
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1])+30] = "XX";
                        
                }
            }
            else if(split[0] == "E"){
                if(gameBoard[parseInt(split[1]) + 40] == "[]"){
                    console.log("HIT");
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1])+40] = "XX";
                        
                }
            }
            else if(split[0] == "F"){
                if(gameBoard[parseInt(split[1]) + 50] == "[]"){
                    console.log("HIT");
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 50] = "XX";
                        
                }
            }
            else if(split[0] == "G"){
                if(gameBoard[parseInt(split[1]) + 60] == "[]"){
                    console.log("HIT");
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 60] = "XX";
                        
                }
            }
            else if(split[0] == "H"){
                if(gameBoard[parseInt(split[1]) + 70] == "[]"){
                    console.log("HIT");
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 70] = "XX";
                        
                }
            }
            else if(split[0] == "I"){
                if(gameBoard[parseInt(split[1]) + 80] == "[]"){
                    console.log("HIT");
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 80] = "XX";
                        
                }
            }
            else if(split[0] == "J"){
                if(gameBoard[parseInt(split[1]) + 90] == "[]"){
                    console.log("HIT");
                }
                else{
                    console.log("MISS");
                    gameBoard[parseInt(split[1]) + 90] = "XX";
                        
                }
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