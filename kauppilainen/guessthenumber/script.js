
var play = true;
var askAgain = true;
var answer = "";
alert("Du spelar nu ett gissarspel. Gissa på ett tal mellan 1-10");
while(play){
    askAgain = true; // So we enter 
    var ranNum = Math.floor(Math.random()*10 + 1);

    for(var i = 0; i < 3; i++){ // Three guesses
        answer = prompt("Vad är din gissning?");
        
        if(answer == ranNum){
            alert("Din gissning är rätt!");
            break; // If right guess, break loop
        }
        else{
            alert("Din gissning är fel!");
        }
    }

    while(askAgain){
        answer = prompt("Vill du spela igen?");
        answer = answer.toLowerCase();
        if(answer == "ja"){
            play = true;
            askAgain = false;
        }
        else if(answer == "nej"){
            alert("Hejdå!");
            play = false;
            askAgain = false;
        }
        else{
            alert("Felaktig inmatning!");
        }
    }
}

