var shifted = True;

function OSKPressed(key){
	textBox = document.getElementById("search");
	boxVal = textBox.value;
	
	if(!shifted){
		key = key.toLowerCase();
	}
	boxVal += key;
}

function OSKBackspace(){
	textBox = document.getElementById("search");
	str = textBox.value;
	str = str.substring(0, str.length - 1);
}

function OSKEnter(){
	console.log("enterenterenter");
}

function OSKShift(){
	shifted = !shifted;
	console.log("Shift: " + shifted);
}