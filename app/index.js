// app/index.js
const prompt = require('/home/ubuntu/.nvm/versions/node/v4.6.1/lib/node_modules/prompt');
const colors = require('/home/ubuntu//.nvm/versions/node/v4.6.1/lib/node_modules/colors');
const readline = require('readline');
const board = require('./board.js');
const pieces = require('./pieces.js');
require('events').EventEmitter.prototype._maxListeners = 100;
var gameBoard = board.createBoard();
var guessedBoatLocations = [];
var placedSpotsOnBoard = [];
var shipCount = 0;
var previous = 0;
var previousSpot=[];
var occupiedSpots = [];
var currentlyOccupiedSpots = [];
var gamePieces = pieces.createPieces();



function battleShipSpots() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    
    rl.question('Enter spot for the 2 ship (A-J 1-10):', (answer) => {
        // TODO: Log the answer in a database
        
        var alreadyPlaced = false;
        for(var c = 0;c<placedSpotsOnBoard.length;c++){
            if(placedSpotsOnBoard[c] == answer){
                var alreadyPlaced = true;
            }
        }
        if(!alreadyPlaced){
            placedSpotsOnBoard.push(answer);
            // previousSpot.push(answer);
            // previous+=1;
            // if(previous>1){
            //     var shift = previousSpot.splice(0,1);
            //     var splitUp = shift[0].split("");
            //     var number = splitUp[1];
            //     console.log(number);
                
            //}
            
        }
        var split = answer.toUpperCase().split("");
        if(split[1] == "1" && split[2] == "0"){
            split[1] = "10";
            split[2] = undefined;
        }
        
        if (split[0] != "A" && split[0] != "B" && split[0] != "C" && split[0] != "D" && split[0] != "E" &&
            split[0] != "F" && split[0] != "G" && split[0] != "H" && split[0] != "I" && split[0] != "J") {
            console.log("\nNOT A SPOT");
            console.log("Enter a valid location for a ship\n");
            
        } 
        
        else if((split[1] != "1" && split[1] != "2" && split[1] != "3" && split[1] != "4" && 
        split[1] != "5" && split[1] != "6" && split[1] != "7" && split[1] != "8" && 
        split[1] != "9" && split[1] != "10") || split[2] != undefined){
            console.log("\nNOT A SPOT");
            console.log("Enter a valid location for a ship\n");
        }
        else if(alreadyPlaced){
            console.log("\nYou already have a piece placed in that location");
            console.log("Enter an unoccupied location\n");
        }
        // else if (previous > 1 && !(parseInt(split[1]) + 1 == number || parseInt(split[1]) - 1 == number)){
        //     console.log("Cannot place boat if spot is not next to it");
            
            
        // }
        else{
            shipCount += 1;
            currentlyOccupiedSpots.push(answer.toUpperCase());
            for (var i = 1; i <= 100; i++) {
            if (gameBoard[i] == answer.toUpperCase()) {
                gameBoard[i] = "[]";
                break;
            }
        }
            
        }
        
        if (shipCount == 2) {
            occupiedSpots.push(currentlyOccupiedSpots);
            currentlyOccupiedSpots = [];
            console.log("\nBoard after placing 2 ship:\n\n");
            previous = 0;
            previousSpot = [];
            board.initializeBoard(gameBoard);
            console.log("\n\n");
        }
        if (shipCount == 5) {
            occupiedSpots.push(currentlyOccupiedSpots);
            currentlyOccupiedSpots = [];
            console.log("\nBoard after placing first 3 ship:\n\n")
            board.initializeBoard(gameBoard);
            console.log("\n\n");
        }
        if (shipCount == 8) {
            occupiedSpots.push(currentlyOccupiedSpots);

            console.log("\nBoard after placing second 3 ship:\n\n")
            board.initializeBoard(gameBoard);
            console.log("\n\n");
            currentlyOccupiedSpots = [];
        }
        if (shipCount == 12) {
            occupiedSpots.push(currentlyOccupiedSpots);
            console.log("\nBoard after placing 4 ship:\n\n")
            board.initializeBoard(gameBoard);
            console.log("\n\n");
            currentlyOccupiedSpots = [];
        }
        if (shipCount == 17) {
            occupiedSpots.push(currentlyOccupiedSpots);
            console.log("\nBoard after placing 5 ship:\n\n")
            board.initializeBoard(gameBoard);
            console.log("\n\n");
            currentlyOccupiedSpots = [];
        }
        
        if (shipCount == 17) {
            answer = "exit";
        }
        if (answer == 'exit') //we need some base case, for recursion
            return rl.close();

        
        battleShipSpots();
    });

    rl.on('close', () => {
        console.log("");
        board.initializeBoard(gameBoard);
        guess();

    });

}

function guess() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    console.log("");
    rl.question('Guess a location (A-J 1-10 or 99 to quit): ', (guessedLocation) => {
        var guessedAlready = false;
        for(var x = 0;x<guessedBoatLocations.length;x++){
            if(guessedBoatLocations[x] == guessedLocation){
                console.log("ALREADY TAKEN!");
                guessedAlready = true;
                break;
            }
        }
        if(!guessedAlready){
            
            guessedBoatLocations.push(guessedLocation);
        }
        
        if(guessedLocation.toLowerCase() == 99){
            process.exit();
        }
        var split = guessedLocation.toUpperCase().split("");
        
        if(split[2] == "0"){
            split[1] = "10";
        }
        
        if (split[0] != "A" && split[0] != "B" && split[0] != "C" && split[0] != "D" && split[0] != "E" &&
            split[0] != "F" && split[0] != "G" && split[0] != "H" && split[0] != "I" && split[0] != "J") {
            console.log("NOT A SPOT");

        }
        var indexOfArray = 0;
        for (var x = 0; x < occupiedSpots.length; x++) {
            for (var y = 0; y < occupiedSpots[x].length; y++) {
                if (occupiedSpots[x][y] == guessedLocation.toUpperCase()) {
                    indexOfArray = x;
                    
                    break;
                }
            }
        }
        
        if (split[0] == "A" && !guessedAlready) {
            if (gameBoard[parseInt(split[1])] == "[]") {
                console.log("HIT");
                var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());

                occupiedSpots[indexOfArray].splice(index, 1);
                if (occupiedSpots[indexOfArray].length == 0) {
                    occupiedSpots.splice(indexOfArray, 1);
                    console.log("SUNK!!!")
                }
                gameBoard[parseInt(split[1])] = colors.red("XX");

            }
            else {
                console.log("MISS");
                gameBoard[parseInt(split[1])] = colors.blue("XX");

            }
        }
        else if (split[0] == "B") {
            if (gameBoard[parseInt(split[1]) + 10] == "[]") {
                console.log("HIT");
                var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());

                occupiedSpots[indexOfArray].splice(index, 1);
                if (occupiedSpots[indexOfArray].length == 0) {
                    occupiedSpots.splice(indexOfArray, 1);
                    console.log("SUNK!!!")
                }
                gameBoard[parseInt(split[1]) + 10] = colors.red("XX");
            }
            else {
                console.log("MISS");
                gameBoard[parseInt(split[1]) + 10] = colors.blue("XX");

            }
        }
        else if (split[0] == "C") {
            if (gameBoard[parseInt(split[1]) + 20] == "[]") {
                console.log("HIT");
                var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());

                occupiedSpots[indexOfArray].splice(index, 1);
                if (occupiedSpots[indexOfArray] == 0) {
                    occupiedSpots.splice(indexOfArray, 1);
                    console.log("SUNK!!!")
                }
                gameBoard[parseInt(split[1]) + 20] = colors.red("XX");
            }
            else {
                console.log("MISS");
                gameBoard[parseInt(split[1]) + 20] = colors.blue("XX");

            }
        }
        else if (split[0] == "D") {
            if (gameBoard[parseInt(split[1]) + 30] == "[]") {
                console.log("HIT");
                var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());
                
                occupiedSpots[indexOfArray].splice(index, 1);
                if (occupiedSpots[indexOfArray].length == 0) {
                    occupiedSpots.splice(indexOfArray, 1);
                    console.log("SUNK!!!")
                }
                gameBoard[parseInt(split[1]) + 30] = colors.red("XX");
            }
            else {
                console.log("MISS");
                gameBoard[parseInt(split[1]) + 30] = colors.blue("XX");

            }
        }
        else if (split[0] == "E") {
            if (gameBoard[parseInt(split[1]) + 40] == "[]") {
                console.log("HIT");
                var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());

                occupiedSpots[indexOfArray].splice(index, 1);
                if (occupiedSpots[indexOfArray].length == 0) {
                    occupiedSpots.splice(indexOfArray, 1);
                    console.log("SUNK!!!")
                }
                gameBoard[parseInt(split[1]) + 40] = colors.red("XX");
            }
            else {
                console.log("MISS");
                gameBoard[parseInt(split[1]) + 40] = colors.blue("XX");

            }
        }
        else if (split[0] == "F") {
            if (gameBoard[parseInt(split[1]) + 50] == "[]") {
                console.log("HIT");
                var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());

                occupiedSpots[indexOfArray].splice(index, 1);
                if (occupiedSpots[indexOfArray].length == 0) {
                    occupiedSpots.splice(indexOfArray, 1);
                    console.log("SUNK!!!")
                }
                gameBoard[parseInt(split[1]) + 50] = colors.red("XX");
            }
            else {
                console.log("MISS");
                gameBoard[parseInt(split[1]) + 50] = colors.blue("XX");

            }
        }
        else if (split[0] == "G") {
            if (gameBoard[parseInt(split[1]) + 60] == "[]") {
                console.log("HIT");
                var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());

                occupiedSpots[indexOfArray].splice(index, 1);
                if (occupiedSpots[indexOfArray] == 0) {
                    occupiedSpots.splice(indexOfArray, 1);
                    console.log("SUNK!!!")
                }
                gameBoard[parseInt(split[1]) + 60] = colors.red("XX");
            }
            else {
                console.log("MISS");
                gameBoard[parseInt(split[1]) + 60] = colors.blue("XX");

            }
        }
        else if (split[0] == "H") {
            if (gameBoard[parseInt(split[1]) + 70] == "[]") {
                console.log("HIT");
                var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());

                occupiedSpots[indexOfArray].splice(index, 1);
                if (occupiedSpots[indexOfArray].length == 0) {
                    occupiedSpots.splice(indexOfArray, 1);
                    console.log("SUNK!!!")
                }
                gameBoard[parseInt(split[1]) + 70] = colors.red("XX");
            }
            else {
                console.log("MISS");
                gameBoard[parseInt(split[1]) + 70] = colors.blue("XX");

            }
        }
        else if (split[0] == "I") {
            if (gameBoard[parseInt(split[1]) + 80] == "[]") {
                console.log("HIT");
                var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());

                occupiedSpots[indexOfArray].splice(index, 1);
                if (occupiedSpots[indexOfArray].length == 0) {
                    occupiedSpots.splice(indexOfArray, 1);
                    console.log("SUNK!!!")
                }
                gameBoard[parseInt(split[1]) + 80] = colors.red("XX");
            }
            else {
                console.log("MISS");
                gameBoard[parseInt(split[1]) + 80] = colors.blue("XX");

            }
        }
        else if (split[0] == "J") {
            if (gameBoard[parseInt(split[1]) + 90] == "[]") {
                console.log("HIT");
                var index = occupiedSpots[indexOfArray].indexOf(guessedLocation.toUpperCase());

                occupiedSpots[indexOfArray].splice(index, 1);
                if (occupiedSpots[indexOfArray].length == 0) {
                    occupiedSpots.splice(indexOfArray, 1);
                    console.log("SUNK!!!")
                }
                gameBoard[parseInt(split[1]) + 90] = colors.red("XX");
            }
            else {
                console.log("MISS");
                gameBoard[parseInt(split[1]) + 90] = colors.blue("XX");

            }
        }
        console.log(occupiedSpots[0]);
        console.log(occupiedSpots[1]);
        console.log(occupiedSpots[2]);
        if (occupiedSpots.length == 0) {
            console.log("\n");
            board.initializeBoard(gameBoard);
            console.log("\n\nGAME OVER YOU WIN!!!!!!");
            process.exit()
        }
        console.log("\n");
        board.initializeBoard(gameBoard);
        guess();
    })

}

function introduction() {
    console.log("\n\n****BATTLESHIP****\n\n");
    console.log("Legend:");
    console.log(colors.blue("XX - MISS"));
    console.log(colors.red("XX - HIT"));
    console.log("[] - occupied space");
    console.log("\n1: New Game");
    console.log("\n2: Rules");
    console.log("\n3: Quit");
    console.log("\n");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    console.log("");
    rl.question('What do you want to do (1-3): ', (choice) => {
        if(choice == 1){
            console.log("\n\n***************\n\nNEW GAME\n\n");
            battleShipSpots();
        }
        else if(choice == 2){
            
        }
        else if(choice == 3){
            process.exit();
        }
        else
            rl.close()
    });
    
    rl.on('close', () => {
        console.log("invalid choice, try again");
        introduction();

    });
    
    

}
introduction();
