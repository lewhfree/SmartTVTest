var shifted = True;

function OSKPressed(key){
	textBox = document.getElementById("search");
	if(!shifted){
		key = key.toLowerCase();
	}
	textBox.value += key;
}

function OSKBackspace(){
	textBox = document.getElementById("search");
	str = textBox.value;
	str = str.substring(0, str.length - 1);
	textBox.value = str;
}

function OSKEnter(){
	console.log("enterenterenter");
}

function OSKShift(){
	shifted = !shifted;
	console.log("Shift: " + shifted);
}