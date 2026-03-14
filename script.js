let current = 1;
let total = 75;

function nextQuestion(){

current++;

if(current<=total){

document.getElementById("question").innerHTML =
'<img src="exams/jee/mock1/images/q'+current+'.png">';

}

}

let time = 10800;

setInterval(function(){

time--;

let h = Math.floor(time/3600);
let m = Math.floor((time%3600)/60);
let s = time%60;

document.getElementById("timer").innerHTML =
h+":"+m+":"+s;

},1000);
