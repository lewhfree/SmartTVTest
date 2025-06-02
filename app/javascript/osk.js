var shifted = true;

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
	textBox = document.getElementById("search");
	iframe = document.getElementById("if");
	iframe.src = textBox.value;
	console.log(textBox.value);
}

function OSKShift(){
	shifted = !shifted;
	console.log("Shift: " + shifted);
}

function OSKUpload(){
	value = document.getElementById("search").value;
	uploadFile(value, False);
	console.log("uploaded file: " + value);
}