let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn  = document.getElementById("sort_btn");
let stop_btn = document.getElementById("stop_btn");
let bars_container = document.getElementById("bars_container");
let minRange = 1;
let maxRange = 20;
let numOfBars = 20;
let unsorted_array = new Array(numOfBars);
const slider= document.getElementById('speed-slider');


let waitTime=1000;
slider.addEventListener('input',function(event){
    waitTime=event.target.value;
});



function randomNum(min,max) {
    return Math.floor(Math.random() * (max-min +1)) + min;
}

function createRandomArray() {
    for (let i = 0; i < numOfBars; i++) {
        unsorted_array[i]= randomNum(minRange,maxRange);
        
    }
}

document.addEventListener("DOMContentLoaded",function() {
    createRandomArray();
    renderBars(unsorted_array);
});

function renderBars(array){
    for( let i=0 ; i<array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * 18 + "px";
        bars_container.appendChild(bar);
    }
}

randomize_array.addEventListener("click", function(){
    createRandomArray();
    bars_container.innerHTML = "";
    renderBars(unsorted_array);
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve,ms));
}

async function bubbleSort(array){
    randomize_array.disabled=true;
    sort_btn.disabled=true;
    let bars = document.getElementsByClassName("bar");
    let lcolor;
    
    
    for(let i = 0; i< array.length; i++){
        for( let j=0; j<array.length-i-1; j++){
            if(array[j]>array[j+1]){
                for( let k = 0; k<bars.length; k++){
                    if(k !== j && k !== j+1){
                        bars[k].style.backgroundColor = 'green';
                    }
                }
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                //styling 
                bars[j].innerText = array[j];
                bars[j+1].style.height = array[j+1] * 18 + "px";
                bars[j+1].style.backgroundColor = "yellow";
                bars[j+1].innerText = array[j+1];
                
                bars[j].style.height = array[j] * 18 + "px";
                bars[j].style.backgroundColor = "red";
                await sleep(waitTime);
            }
            
        }
        await sleep(waitTime);
    }
    randomize_array.disabled=false;
    sort_btn.disabled=false;
    return array;
}

sort_btn.addEventListener("click", function() {
    let sorted_array = bubbleSort(unsorted_array);
    console.log(sorted_array);
});



