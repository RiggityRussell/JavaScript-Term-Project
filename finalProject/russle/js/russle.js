var game_over = false;//if this changes to true the game ends

var choice = [
    "ABOVE",
    "BREAD",
    "CRIME",
    'DREAM',
    "CABIN",
    "CABLE",
    "FIBER",
    "GRANT",
    "EARLS",
    "INDEX",
    "JOINT",
    "EARLY",
    "FABLE",
    "MAYOR",
    "NOISE",
    "PANEL",
    "QUITE",
    "ROUND",
    "ROMAN",
    "HABIT",
    "TIRED",
    "TOPIC",
    "HACKS",
    "VIRUS",
    "WORLD",
    "YIELD",
    "ICHOR",
    "KAFIR",
    "LABOR",
    "LACED",
    "OAKEN",
    "PACER",
    "PACKS",
    "PACES",
    "RABID",
    "SABLE",
    "SABRE",
    "SABIN",
    "TABER",
    "VAGUE",
    "WACKY",
    "XERUS",
    "VOICE",
    "VOIDS",
    "THEIR"

]

var height = 6; //number of guesses
var width = 5; //length of the word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt
var num_place = Math.floor(Math.random() * choice.length);//using math.random to take an index number from the list and assign to num_place
var word = choice[num_place]//pulling the word from the list based off the random number chosen above.
console.log(word)// logging it so I can cheat.


window.onload = function(){
    initialize();//On the window load, go straigh to the function.
}


function initialize() {

    // Create the game board
    for (let rows = 0; rows < height; rows++) { //we create a variable of row=0 that will go to height of 6(7 really).
        for (let columns = 0; columns < width; columns++) {//we create a variable of columns=0 that will go to the width of the word plus 1
            let tiles = document.createElement("span"); // we create a variable of tile and add a span element for them.
            tiles.id = rows.toString() + "-" + columns.toString(); //assign the id to each tile dependent on where we are in the the rows and strings, i.e. 0-0, 0-1 etc.
            tiles.classList.add("tile"); //add the class name tile to each tile.
            tiles.innerText = ""; // create an empty string in the inner text.
            document.getElementById("board").appendChild(tiles); //append a tiles tile to the board fo each run through of the loops.
        }
    }


  
    document.addEventListener("keyup", (e) => {  // Listen for Key Press, we use key up so that the key isnt put into each box.
        if (game_over) return; //if the game is over, we return true and stop the game.

        if ("KeyA" <= e.code && e.code <= "KeyZ") { //found this where we can check that the only allowable keys are a-z
            if (col < width) { //if the current position of col(starting with 0) is less than 5
                let currTile = document.getElementById(row.toString() + '-' + col.toString()); //create currTile that is reading the id of the selected tile set in line 73
                if (currTile.innerText == "") { //if that tiles inner text is an empty string
                    currTile.innerText = e.code[3]; //replace that with the e code placement of 3 (e will return KeyA so 3 is the letter in place number 4. 1=K,2=e,3=y,4=letter)
                    col += 1;//then increment the column number by one
                }
            }
        }
        else if (e.code == "Backspace") { // if the key pressed is backspace
            if (0 < col && col <= width) {//we check where we are in the column, if it is less than the number of column, and less than or equal to the number of width
                col -=1; //decrement by 1
            }
            let currTile = document.getElementById(row.toString() + '-' + col.toString()); //we set a different variable of currTile that is reading the id of the selected tile set in line 73
            currTile.innerText = ""; // we set that text to an empty string
        }

        else if (e.code == "Enter") {//if the key pressed is enter
            update(); //run the update funtion
            row += 1; //start new row
            col = 0; //start at 0 for new row
        }


        if (!game_over && row == height) { //if game over is still false, and the row is equal to 6
            game_over = true; //we end the game
            document.getElementById("answer").innerText = "The correct answer is " + word; //we add the answer to the bottom of the screen
        }

    })
}


function update() { //when the user presses enter
    let correct = 0; //we set correct to 0
    for (let c = 0; c < width; c++) { //for loop to run through the number of letters entered
        let currTile = document.getElementById(row.toString() + '-' + c.toString()); //read the currtile set in 73
        let letter = currTile.innerText; //letter is the text entered

        if (word[c] == letter) { //if the letter of the word matches the letter entered and is in the correct place
            currTile.classList.add("correct");//we add it to correct and use that css styling
            correct += 1;//add 1 to correct
        } 
        else if (word.includes(letter)) {// If the letter is somewhere within word, but not in the correct place
            currTile.classList.add("in_word"); //we add it to present and use that css styling
        } 
        else {// Else it must not br in the word
            currTile.classList.add("not_in_word"); //we add it to absent and use that css styling
        }

        if (correct == width) { //if the number of correct letters is the same as the width
            game_over = true; //the game is set to true, and then is over.
        }

    }
}