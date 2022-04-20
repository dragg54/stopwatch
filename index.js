const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
var startBtn = document.querySelector(".start");

var seconds = 0;

var startState = true;
var myInterval = false;

function changeBtn() {
  if (startState) {
  } else {
  }
}

function start() {
  if (startState) {
    seconds = 1
    myInterval = setInterval(updateSec, 1000);
    startBtn.innerText = "stop";
    startState = !startState;

    updateSec();
    changeBtn();
  } else {
    clearInterval(myInterval);
    startBtn.innerText = "start";
    startState = !startState;
  }
}

function reset() {
  sec.innerText = '00';
  min.innerText = '00';
  hrs.innerText = '00';
  seconds = 0
  clearInterval(myInterval);
  if (startState && myInterval) {
    startBtn.innerText = "stop";
  } else{
      startBtn.innerText = 'start'
      startState = !startState
  }
  startBtn.innerText = "start"
}

function updateSec() {
  increaseSeconds();
  
}

function increaseSeconds() {
  let second = seconds++;
  var newSec = (second + 60) % 60;
  var minute = Math.floor((60 * second) / 3600) % 60;
  var hours = Math.floor(minute/60)
  if(hrs <= 9){
    hrs.text = '0' + hrs
  }
  else{
    hrs.text = hrs
  }
   if(newSec <= 9){
    sec.innerText = '0' + newSec;
   }
   else{
     sec.innerText = second
   }
   
   if(minute <= 9){
     min.innerText = '0' + minute
   }
   else{
     min.innerText = minute
   }

}
