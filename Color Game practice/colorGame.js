var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
   setModeButtons();
    
   setSquares();
    
    reset();
}

function setModeButtons(){
    for (let index = 0; index < modeButtons.length; index++) {
        modeButtons[index].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
            reset();
    
        });
        
    }  
}

function setSquares(){
    for (var i = 0; i < squares.length; i++){

        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of click square
            var clickedColor = this.style.backgroundColor;
            //compare to pick colour
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                
                this.style.backgroundColor = "steelblue";
                messageDisplay.textContent = "Try Again!";
    
            }
        })
    }

}




function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    

    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor =  "steelblue";
}


resetButton.addEventListener("click", function(){
    reset();
});



function changeColors(color){
    //loop all squares 
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());

    }


    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() *256);//Red
    var g = Math.floor(Math.random() *256);//Green
    var b = Math.floor(Math.random() *256);//Blue
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

