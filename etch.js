const container = document.getElementById("container");
container.style.cssText = 'display: flex; flex-wrap: wrap; margin: auto; align-items: center; justify-content: center; align-content: center; background: yellow; width: 90%; height: 90%; overflow: none;';
document.getElementById("button").addEventListener('click' , newGrid);


for(i=0; i<=255; i++) { //creates initial 256 squares
    var square = document.createElement('div'); //creates a div
    square.id = "square" + i; // assigns the id "square(number)" to the div
    square.className = "squares"; //assigns the class name "squares" to the div... gives it a height/size/color
    square.style.cssText = "height: 6.25%; width: 6.25%; background: white;"
    square.addEventListener('mouseenter',function(){addClassName(this.id);}); //adds event listener on mouse enter and gives the function the id of the hovered on square
    container.appendChild(square); //appends the square to the container
    }

function addClassName(x) { //adds hover classname to the squares
    let id = document.getElementById(x); // stores the id of the hovered square in the variable "id"
    if (id.className = "squares"){ // if the div does not already have the hover class added
        id.className += ' hover'; //adds the hover class
        id.style.cssText += "background: black;"
    }
    console.log(id);
}

function newGrid() { //removes all squares from the grid...asks for new dimensions and creates new grid
    while (container.hasChildNodes()){ //removes all squares from the grid
        container.removeChild(container.firstChild);
    }

    let width = prompt("How many squares do you want per side? \n(example: \'50\' produces a 50x50 grid of squares)");//gets the new desired size from the user
    console.log(width); //checks to make sure that the value was correctly stored
    let i = 0;
    let size = (width * width);
    let denominator = ((1/width) * 100);
    while (i < size) {
        var square = document.createElement('div'); //creates a div
        square.id = "square" + i; // assigns the id "square(number)" to the div
        square.className = "squares"; //assigns the class name "squares" to the div... gives it a height/size/color
        square.style.cssText = "height: " + denominator + "%; width: " + denominator + "%; background: white;"
        square.addEventListener('mouseenter',function(){addClassName(this.id);}); //adds event listener on mouse enter and gives the function the id of the hovered on square
        container.appendChild(square); //appends the square to the container
        i++
    }
}