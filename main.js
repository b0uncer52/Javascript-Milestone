var height = document.getElementById("height");
var character = document.getElementById("char");
var display = document.getElementById("display");
var submit = document.getElementById("submit");
function output(event){
	var treeHeight = parseInt(height.value);
	var leaf = character.value;
	display.innerHTML = "<br>"
	if(!Number.isInteger(treeHeight)){
		display.innerHTML += "Enter an Integer";
	}
	else if(leaf.length < 1) {
		display.innerHTML += "Enter a String or Character";
	}else{
		for (var i = 1; i <= treeHeight; i++) {
		//withspaces = space.repeat(height - i).repeat(character.length);
		//display.innerHTML += withspaces;
		display.innerHTML += leaf.repeat(i) + "<br>";
		}
	}
}
function enterEvent(event){
	if(event.keyCode == 13){
		output(event);
	}
}

submit.addEventListener("click", output);
height.addEventListener("keyup", enterEvent);
character.addEventListener("keyup", enterEvent);
// var withspaces;  This commented out stuff is what I would do if I didn't use the inline css to center
// var space = "&nbsp";  But using css is much cleaner as it takes into account the different width of characters