var height = document.getElementById("height");
var character = document.getElementById("char");
var submitButton = document.getElementById("submit");
var treeHeight;
var leafType;

function tree(h, t){
	for (var i = 0; i < h; i++) {
	console.log((" ").repeat((h - i) * t.length), t.repeat(1 + 2* i));
	}
}
function submit(event) {
	treeHeight = parseInt(height.value);
	leafType = character.value;
	if(!Number.isInteger(treeHeight)){
		alert("Must enter a number");
	}
	else if(leafType.length < 1) {
		alert("Enter a String or Character");
	}else {
		tree(treeHeight, leafType);
	}
}
function enterEvent(event){
	if(event.keyCode == 13){
		submit(event);
	}
}
submitButton.addEventListener("click", submit);
height.addEventListener("keyup", enterEvent);
character.addEventListener("keyup", enterEvent);