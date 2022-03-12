const playSpace = document.querySelector("#container");
const btn = document.querySelector("#btn");
const sml = document.querySelector(".sml");
const mdm = document.querySelector(".mdm");
const big = document.querySelector(".big");

let rowCols = 40;


function createCanvas(rowCols){
    
    if(typeof(rowCols) == "undefined"){
        rowCols = 40;
    }else{
        for(let i = 0; i < rowCols; i++){
            for(let i = 0; i < rowCols; i++){
                let square = document.createElement("div");
                square.style.padding = Math.round((800/rowCols)/2)+"px";
                square.addEventListener("mouseover", function(){
                square.style.backgroundColor = "black";   
                    
                });
                playSpace.appendChild(square);
            }
        }
    }
  
}

function clear(){
    let n = divs.length;
    console.log(divs[1]);
    for(let i = 0; i<n; i++){
        divs[i].style.backgroundColor = "lightgray";
    }
    
}

window.onload = createCanvas(rowCols);
let divs = document.querySelectorAll("div");
btn.addEventListener("click", clear);
sml.addEventListener("click", function(){
    while(playSpace.firstChild){
        playSpace.removeChild(playSpace.firstChild);
    }
    createCanvas(100);
    divs = document.querySelectorAll("div");
});
mdm.addEventListener("click", function(){
    while(playSpace.firstChild){
        playSpace.removeChild(playSpace.firstChild);
    }
    createCanvas(40);
    divs = document.querySelectorAll("div");
});
big.addEventListener("click", function(){
    while(playSpace.firstChild){
        playSpace.removeChild(playSpace.firstChild);
    }
    createCanvas(16);
    divs = document.querySelectorAll("div");
});
