console.log = function(text){
	var el = document.createElement("pre");

	el.innerHTML = "[LOG] " + text;

	document.body.appendChild(el);
};

console.error = function(text){
	var el = document.createElement("pre");

	el.innerHTML = "[ERROR] " + text;

	document.body.appendChild(el);
};

console.warn = function(text){
	var el = document.createElement("pre");

	el.innerHTML = "[WARN] " + text;

	document.body.appendChild(el);
};

console.info = function(text){
	var el = document.createElement("pre");

	el.innerHTML = "[INFO] " + text;

	document.body.appendChild(el);
};