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
  sec.innerText = 0;
  min.innerText = 0;
  hrs.innerText = 0;
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
  
  const minute = newMinute;
  min.innerText = minute;
}

function increaseSeconds() {
  let second = seconds++;
   if(second <= 9){
     console.log(second)
    var newSec = (second + 60) % 60;
    sec.innerText = '0' + newSec;
   }
   else{
     sec.innerText = second
   }
   var minute = Math.floor((60 * seconds) / 3600) % 60;
   if(minute <= 9){
     min.innerText = '0' + minute
   }
   else{
     min.innerText = minute
   }

}
