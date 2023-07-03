let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn  = document.getElementById("sort_btn");
let stop_btn = document.getElementById("stop_btn");
let bars_container = document.getElementById("bars_container");
let minRange = 1;
let maxRange = 20;
let numOfBars = 30;
let unsorted_array = new Array(numOfBars);

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

// let bool=false;

async function bubbleSort(array){
    
    let bars = document.getElementsByClassName("bar");
    let lcolor;
    
    
    for(let i = 0; i< array.length; i++){
        for( let j=0; j<array.length-i-1; j++){
            if(array[j]>array[j+1]){
                for( let k = 0; k<bars.length; k++){
                    if(k !== j && k !== j+1){
                        bars[k].style.backgroundColor = 'rgb(190,236,245)';
                    }
                }
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                //styling 
                // bars[j].innerText = array[j];
                bars[j+1].style.height = array[j+1] * 18 + "px";
                bars[j+1].style.backgroundColor = "lightgreen";
                // bars[j+1].innerText = array[j];
                
                bars[j].style.height = array[j] * 18 + "px";
                bars[j].style.backgroundColor = "pink";
                await sleep(50);
            }
            
        }
        await sleep(50);
    }
    return array;
}

// function stop_function(bool){
//     return false;
// }

// function stop_function() {
//     clearInterval(timeValue);
//  }
                

sort_btn.addEventListener("click", function() {
    let sorted_array = bubbleSort(unsorted_array);
    console.log(sorted_array);
});

// stop_btn.addEventListener("click", stop_function());

// stop_btn.addEventListener("click",stop_function() {
//     bool=stop_function(bool);
// });