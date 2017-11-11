var start;
var result;
var walls; 

window.onload = function(){
	start = document.getElementById("start");
	result = document.getElementById('result');
	start.setAttribute("begin", false);
	start.setAttribute("cheated", false);
	result.innerHTML = " ";
	result.style.opacity = 0;
	walls = document.getElementsByClassName("barrier");
	for(i = 0; i< walls.length;i++){
		walls[i].addEventListener("mouseenter", function(){
			if(start.getAttribute("begin") == "true"){
				this.style.backgroundColor = "red";
				start.setAttribute("begin", false);
				start.setAttribute("cheated", false);
				result.innerHTML = "You Lose!";
				result.style.opacity = 1;
			}
		});
	}
}

function begin(){
	result.innerHTML = "";
	result.style.opacity = 0;
	start.setAttribute("begin", true);
	start.setAttribute("cheated", false);
	resetWall();
}

function end(){
	if(start.getAttribute("cheated") == "true"){
		result.style.opacity = 1;
		result.innerHTML = "Don't cheat, you should start from the 'S' and move to the 'E' inside the maze!";
		start.setAttribute("begin", false);
	}else if(start.getAttribute("begin") == "true"){
		result.innerHTML = "You Win!";
		result.style.opacity = 1;
		start.setAttribute("begin", false);
	}
}

function leaveMaze(){ 
	if(start.getAttribute("begin") == "true"){
		start.setAttribute("cheated", true);
	}
	resetWall();
}

function resetWall(){
	for (var i = 0; i < walls.length; i++) {
		walls[i].style.backgroundColor = "#ddd";
	}
}