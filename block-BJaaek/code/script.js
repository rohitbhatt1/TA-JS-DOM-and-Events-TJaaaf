let boxOne = document.querySelector(".first");
let boxTwo = document.querySelector(".second");

function generateRandomColor() {
    let hexCharactors = [ "0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f",];
//    hexCharactor[4]

    let color = "#";
    for (let i = 0;i < 6;i++){
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexCharactors[randomNumber];
    }

    return color;
}


function handleClick() {
    // 1. Generate random color
    let randomColor = generateRandomColor();
    // 2. Change bacground color of the box;
    boxOne.style.backgroundColor = randomColor;
}

function handleMouseMove(){
    
    let randomColor = generateRandomColor();
    boxTwo.style.backgroundColor = randomColor;
}


boxOne.addEventListener("click", handleClick)
boxTwo.addEventListener("mousemove", handleMouseMove)

