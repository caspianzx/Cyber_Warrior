var wordArray = ["log", "hit", "city", "ant", "cut", "myth", "even", "crop", "petty", "hover", "siege", "europe", "resort", "mosaic", "episode", "cunning", "unaware", "guerilla", "champagne", "hemisphere", "government", "acquisition", "hospitality", "conventional", "jurisdiction", "representative", "finance", "nuclear", "regular", "liberty", "minimize", "spectrum", "feminine", "precedent", "ostracize", "beautiful", "franchise", "satisfied", "deviation", "apparatus", "economics", "permission", "exaggerate", "conception", "absorption", "diplomatic", "ring", "tire", "boom", "will", "wall", "slam", "loss", "sour", "hear", "roof", "pole", "slam", "hook", "just", "belle", "belle", "bloom", "ride", "side", "pool", "well", "know","save", "glow", "bend", "gain","turn","tube", "suit","fork", "king", "tape", "high","rent","will","risk", "back", "year", "meat", "park", "lump", "belt", "mail","duty","lake","wood", "just", "spin",  "glow", "sail", "item", "vote", "step", "fool", "drum", "iron", "nail", "foot", "cold", "pass", "lane", "deck", "love", "draw", "dorm", "order", "guilt", "speed", "scale", "value", "bench", "debut", "night", "bless", "fever", "world", "stock", "trial", "video", "study", "alive", "great", "salad" ];



var testing = function (event){
    console.log("it works");
}

//write a function to test user input value against a given word..
var wordInput = function (event) {
    //change outline back to blue
    var correctOutline = document.getElementById("userInput");
    correctOutline.style.outlineColor = "#5E9ED6";
    var checkInput = document.getElementById("userInput").value;
    if(checkInput == document.getElementById("newWord").innerHTML) {
        //function to reduce hp bar by 30px and give monster a hard shake.
        damage1();
        shakeHard ();
        checkHp();
        //runs correct audio sound if it is correct
        var correct = new Audio('music/correct.mp3');
        correct.play();
        //randomly assign words into innerHTML
        document.getElementById("newWord").innerHTML = wordArray[Math.floor(Math.random() * wordArray.length)];
        //clear user input to clear after input
        document.getElementById("userInput").value = "";
        console.log ("you got it");

    } else if (checkInput !== document.getElementById("newWord").innerHTML){
        var wrong = new Audio('music/wrong.mp3');
        wrong.play();
        // write syntax to change color to something else
        var wrongOutline = document.getElementById("userInput");
        wrongOutline.style.outlineColor = "coral";
        // it will shake twice
        wrongOutline.className = "shake-horizontal shake-constant";
        wrongOutline.value ="";
        //function to stop shaking
        var dontShake = function (){
            wrongOutline.className = "";
        }
        //stop shaking after 500ms
        setTimeout (dontShake,500);
    }
}


//function to reduce hp bar by 30px and give monster a hard shake.
var damage1 = function () {
   var width = parseInt(getComputedStyle(document.getElementById("hpBar")).width);
   width = (width - 30)+"px";
   document.getElementById("hpBar").style.width= width;
}
// function to shake monster
var shakeHard = function () {
    document.getElementById("monster1").className="shake-hard shake-constant";
    //shake slow after 500ms
    setTimeout(shakeSlow, 500);
}
//function to shake slow
var shakeSlow = function (){
    document.getElementById("monster1").className="shake-slow shake-constant";
}

// global variable to keep track of monster defeated
var monsterDefeated = 0 ;

// function to check if HP is zero. if HP is Zero, refresh HP and put in new monster.
var checkHp = function () {
    //if HP = 0..
    if (parseInt(getComputedStyle(document.getElementById("hpBar")).width) == 0) {
        if(monsterDefeated == 0) {
            // add counter to monster defeated
            monsterDefeated ++
            //change image to monster 2
            document.getElementById("monster1").src= "image/monster2.png";
            //restore back hpbar
            document.getElementById("hpBar").style.width = "300px";
        }else if (monsterDefeated==1) {
            monsterDefeated ++
            //change image to monster 3
            document.getElementById("monster1").src= "image/monster3.png";
            //restore back hpbar
            document.getElementById("hpBar").style.width = "300px";
        }else if (monsterDefeated==2) {
            monsterDefeated++
            document.getElementById("hpBar").style.width = "0px";
            document.getElementById("userInput").disabled= true;
            document.getElementById("userInput").display= "none";
        }
    }
}


// function for countdown timer
var testTime = function (){
    var seconds = 60;
    var timer = function () {
        document.getElementById("sec").innerHTML = seconds + " secs";
        seconds--;
        // if time is still running and monster hasnt been defeated
        if ((seconds == -1) && monsterDefeated<3) {
            clearInterval(runTimer);
            document.getElementById("userInput").display= "none";
            //add message over lay : virus has won
            loserMessage ("Oh no! The viruses have destroyed your computer!! <br> Click anywhere to play again.");
            // add losing music
            var lose = new Audio ("music/lose.mp3");
            lose.play();
        } else if ((seconds >= 1) && monsterDefeated ==3) {
            clearInterval(runTimer);
            winnerMessage ("Congrats! You have saved your computer! <br> Click anywhere to play again.");
            document.getElementById("userInput").display= "none";
            var win = new Audio ("music/win.mp3");
            win.play();
        }

    }
    var runTimer = setInterval(timer, 1000);
}


//writing a countDown function to input 3, 2, 1
var countDown = function (second) {
    document.getElementById("newWord").innerHTML= second;
}

//function to display block after 4650 second
var displayInput = function () {
    document.getElementById("userInput").style.display ="block";
    document.getElementById("userInput").focus();
}

//write a function to start game
var startGame = function (event) {
    document.getElementById("overlay2").style.display ="none";
    // clearDOM();
    //start audio when game starts
    var audio = new Audio('music/countdown.mp3');
    audio.play();
    //set 3 2 1 timer
    setTimeout(countDown,1000, 3);
    setTimeout(countDown,2250, 2);
    setTimeout(countDown,3500, 1);
    setTimeout(displayInput, 4850);
    setTimeout(countDown,4750, "GO!");
    //timer function goes here!
    setTimeout(testTime,6000);
    //change the innerHTML into wordArray [0];
    setTimeout(countDown,6000, wordArray[Math.floor(Math.random()*wordArray.length)]);
    // enable event listner again after 60 seconds
    setTimeout(start,60000);
}


// adding event listener to the input function
var userInput = document.getElementById('userInput').addEventListener('change', wordInput);

//add event listener to overlay 2
var start = function (){
   document.getElementById('overlay2').addEventListener('click', startGame);
};
//enable event listener
start ();

//write a function to display message as overlay. should be using DOM manipulation and query selector to create overall inlays
var winnerMessage = function (result) {
// create a span element
var winnerText = document.createElement("span");
// span text will be testing testing
winnerText.innerHTML = result;
// get document ID by overlay
var overlay = document.getElementById("overlay");
//append span element to overlay div
overlay.appendChild(winnerText);
// div display will become block
overlay.style.display = "block";
// add click event listener to overlay display, and make display back to none.
document.getElementById("overlay").addEventListener("click", function () {
    overlay.style.display = "none";
    overlay.removeChild(winnerText);
})
}


//write a function to display loser  message as overlay. should be using DOM manipulation and query selector to create overall inlays
var loserMessage = function (result) {
// create a span element
var winnerText = document.createElement("span");
// span text will be testing testing
winnerText.innerHTML = result;
// get document ID by overlay
var overlay = document.getElementById("overlay");
//append span element to overlay div
overlay.appendChild(winnerText);
// div display will become block
overlay.style.display = "block";
// add click event listener to overlay display, and make display back to none.
document.getElementById("overlay").addEventListener("click", function () {
    overlay.style.display = "none";
    overlay.removeChild(winnerText);
})
}


document.getElementById("overlay3").addEventListener("click", function () {
    overlay3.style.display = "none";
});