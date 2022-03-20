	var computer = new Number;
	var tries=new Number(0);
    
    document.getElementById("getNumber").addEventListener("click", function(){
    	tries=0;
    	document.getElementById("guess").value="";
    	document.getElementById("tries").value=tries;
        computer= Math.floor((Math.random() *100) + 1);
        document.getElementById("comments").value="I have a number and I am waiting for you to guess it";
    });

    document.getElementById("checkGuess").addEventListener("click", function() {
        	
			try{
					var guess = new Number(document.getElementById("guess").value);
					if (computer==guess){
						throw "You guessed correctly - congratulations! It only took " + tries + " tries!";
					}
										
					else if (guess >100){
						throw "It ain't over 100! Guess lower!"
					}
					else if (computer<guess) {
						console.clear()
						console.log(tries)
						console.log(computer)
						throw "Your guess is too high, try again!";
					}
					else if (guess ==''){
						document.getElementById("guess").value=" ";
						throw "Please enter a number!"
					}
					
					
					else {
						
						console.log(computer)
						console.trace("begin trace: ")
						console.log(guess)

						throw "Your guess is too low, try again!"
					}
				}
			catch(comment){
				document.getElementById("comments").value= comment;

			}
			finally{
				tries++;
				document.getElementById("tries").value=tries;
			}
        });
     


