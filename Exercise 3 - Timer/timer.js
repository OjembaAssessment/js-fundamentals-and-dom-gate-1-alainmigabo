console.log("Exercise 3 - Timer");

const reduceBttn = document.getElementById('reduce');
const increaseBttn = document.getElementById('increase');
const submitBttn = document.getElementById('submit');
const resetBttn = document.getElementById('reset');
const startBttn = document.getElementById('start');
const counter = document.getElementById('counter')

let input = '';
document.getElementsByTagName('input')[0].addEventListener('input',(e)=>{
    input = e.target.value;
})

submitBttn.addEventListener('click',()=>{
    counter.textContent = input+'s'
})

resetBttn.addEventListener('click',()=>{
    if(input >= 0){
        input = 0;
        counter.textContent = input+'s';
        startBttn.textContent = 'Start';
        resetBttn.style.backgroundColor = '#D9D9D9'
    }
})

increaseBttn.addEventListener('click',()=>{
    if(startBttn.textContent === 'Start'){
        input++;
        counter.textContent = input+'s';
    }
})

reduceBttn.addEventListener('click',()=>{
    if(startBttn.textContent === 'Start'){
        input--;
        counter.textContent = input+'s';
    }
})

startBttn.addEventListener('click',()=>{
    let intervalId = null;
    if(startBttn.textContent === 'Start' && input > 0){
        intervalId = setInterval(()=>{
            if(Number(input) > 0){
                input--;
                counter.textContent = input+'s';
            }
        },1000)
        startBttn.textContent = 'Stop';
        resetBttn.style.backgroundColor = '#C5E0B4'
        startBttn.style.backgroundColor = '#C5E0B4'
    }
    else{
        clearInterval(intervalId)
    }
})