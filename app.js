var hour = document.getElementById("setHours");
var min = document.getElementById("setMins");
var sec = document.getElementById("setSec");
var d = "";

var hours = document.getElementById("hours");
var mins = document.getElementById("min");
var seconds = document.getElementById("sec");
var interval;



function setTime() {
    
      hours.innerHTML = hour.value;
     mins.innerHTML =  min.value ;
     seconds.innerHTML = sec.value;
     document.getElementById('div-input')
     document.getElementById('time')
   
}


function time() {
    sec.value--
    seconds.innerHTML = sec.value;

    if (sec.value == 0) {
        min.value--;
        mins.innerHTML = min.value;
        sec.value = 60;
    } else if (b.value == 0) {
        hour.value--
        hours.innerHTML = hour.value
        min.value = 60;
    }

}




function start() {
    interval = setInterval(time, 1000)
    document.getElementById('strt-btn')
    document.getElementById('ssr-btn')
}




function pause(){
    clearInterval(interval);
    document.getElementById('strt-btn')
    document.getElementById('ssr-btn')
    
}

function reset(){
 pause()      
 hours.innerHTML = 0
 mins.innerHTML =  0
seconds.innerHTML = 0
document.getElementById('div-input')
document.getElementById("time")
 hour.value = ''
 min.value = ''
 sec.value = ''
}