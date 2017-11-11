var radios;
var count = 30;
var set_timer; 
var remain_time;
var target_id;
var state;
var scoreText;

window.onload = function(){
	var moles = document.getElementById("moles");
	moles.setAttribute("begin", false);
	radios = document.getElementsByName("r1");
	remain_time = document.getElementById("timer"); 
	state = document.getElementById("state"); 
	scoreText = document.getElementById("score");
	/*
	for (var i = 0; i < 20; i++) {
		var child = document.createElement('div');
		moles.appendChild(child);
	}
	*/
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
		radios[i].checked = false;
		radios[i].setAttribute("target", false);
	}
	count = 30;
	remain_time.innerHTML = 30;
	scoreText.innerHTML = 0;

}

function setChecked(){
	target_id = Math.floor(Math.random()*77); 
	radios[target_id].setAttribute("target", true);
	radios[target_id].checked = true;
	
}

function startGame(){
	if(moles.getAttribute("begin") == "false"){
		reset();
		moles.setAttribute("begin", true);
		state.innerHTML = "Playing";
		setChecked();
		set_timer=setInterval(timer, 1000);

	}else if(moles.getAttribute("begin") == "true"){
		moles.setAttribute("begin", false);
		clearInterval(set_timer);
		state.innerHTML = "Stop";
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
	}else{
		obj.checked = false;
	}
	
}