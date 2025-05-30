console.log = function(text){
	var el = document.createElement("p");

	el.innerHTML = "[LOG] " + text;

	document.body.appendChild(el);
};

console.error = function(text){
	var el = document.createElement("div");

	el.innerHTML = "[ERROR] " + text;

	document.body.appendChild(el);
};

console.warn = function(text){
	var el = document.createElement("div");

	el.innerHTML = "[WARN] " + text;

	document.body.appendChild(el);
};

console.info = function(text){
	var el = document.createElement("div");

	el.innerHTML = "[INFO] " + text;

	document.body.appendChild(el);
};