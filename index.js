col = "rgba(6, 255, 255, 0.527)";
red = "rgba(255, 62, 69, 0.527)";
blue = "rgba(6, 255, 255, 0.527)";
green = "rgba(6, 255, 81, 0.527)";

function color(c){
	switch(c){
		case "red":
			console.log("color red called!");
			document.getElementById("red").style.backgroundColor = red;
			document.getElementById("blue").style.backgroundColor = "transparent";
			document.getElementById("green").style.backgroundColor = "transparent";
			col = red;
			break;
		case "blue":
			console.log("color blue called!");
			document.getElementById("blue").style.backgroundColor = blue;
			document.getElementById("red").style.backgroundColor = "transparent";
			document.getElementById("green").style.backgroundColor = "transparent";
			col = blue;
			break;
		case "green":
			console.log("color blue called!");
			document.getElementById("green").style.backgroundColor = green;
			document.getElementById("red").style.backgroundColor = "transparent";
			document.getElementById("blue").style.backgroundColor = "transparent";

			col = green;
			break;
	}
}

function mouse(event){
	document.getElementById("ball").style.borderColor = col;
	document.getElementById("ball").style.outlineColor = col;
	document.getElementById("text").innerHTML = `mouse X: ${event.clientX} mouse Y: ${event.clientY}` 
	console.log(window.screen.width)
	document.getElementById("ball").style.top  = event.clientY+ "px";
	document.getElementById("ball").style.left = event.clientX+ "px";
}
