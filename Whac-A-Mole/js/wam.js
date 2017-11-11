var radios;
var count = 30;
var set_timer; 
var remain_time;
var target_id = -1;
var state;
var scoreText;

window.onload = function(){
	var moles = document.getElementById("moles");
	for (var i = 0; i < 50; i++) {
		var child = document.createElement('div');
		child.setAttribute("onclick", "getRadio(this)");
		moles.appendChild(child);
	}
	moles.setAttribute("begin", false);
	radios = moles.getElementsByTagName("div");
	console.log(radios);
	remain_time = document.getElementById("timer"); 
	state = document.getElementById("state"); 
	scoreText = document.getElementById("score");	
	reset();
}

function timer(){
	if(count > 0){
		count -= 1;
		remain_time.innerHTML = count;
	}else{
		clearInterval(set_timer);
		state.innerHTML = "Game Over";
		moles.setAttribute("begin", false);
		var score = scoreText.innerHTML;
		var res = parseInt(score);
		alert('Game Over!\nYour score is: '+res);
	}
}

function reset(){
	for(i =0;i<radios.length;i++){
		radios[i].setAttribute("target", false);
		radios[i].setAttribute("class", "unchecked");
	}
	count = 30;
	remain_time.innerHTML = 30;
	scoreText.innerHTML = 0;
}

function setChecked(){
	if(target_id >=0 && target_id < 50){
		radios[target_id].setAttribute("class", "unchecked");
	}
	target_id = Math.floor(Math.random()*50); 
	radios[target_id].setAttribute("target", true);
	radios[target_id].setAttribute("class", "checked");
}

function startGame(){
	if(moles.getAttribute("begin") == "false"){
		reset();
		moles.setAttribute("begin", true);
		state.innerHTML = "Playing";
		setChecked();
		set_timer=setInterval(timer, 1000);
	}else if(moles.getAttribute("begin") == "true" && state.innerHTML == "Playing"){
		clearInterval(set_timer);
		state.innerHTML = "Stop";
	}else if(moles.getAttribute("begin") == "true" && state.innerHTML == "Stop"){
		set_timer=setInterval(timer, 1000);
		state.innerHTML = "Playing";
	}
}

function getRadio(obj){
	if(moles.getAttribute("begin") == "true"){
		if(obj.getAttribute("target") == "true"){
			var score = scoreText.innerHTML;
			var res = parseInt(score)+1;
			scoreText.innerHTML = res;
			obj.setAttribute("target", false);
			setChecked();
		}else{
			radios[target_id].checked = true;
			var score = scoreText.innerHTML;
			var res = parseInt(score)-1;
			scoreText.innerHTML = res;
			
		}
	}
}