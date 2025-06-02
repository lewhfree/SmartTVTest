console.log = function(text){
	var con = document.getElementById("console");
	var el = document.createElement("pre");

	el.innerHTML = "[LOG] " + text;

	con.appendChild(el);
};

console.error = function(text){
	var con = document.getElementById("console");
	var el = document.createElement("pre");

	el.innerHTML = "[ERROR] " + text;

	con.appendChild(el);
};

console.warn = function(text){
	var con = document.getElementById("console");
	var el = document.createElement("pre");

	el.innerHTML = "[WARN] " + text;

	con.appendChild(el);
};

console.info = function(text){
	var con = document.getElementById("console");
	var el = document.createElement("pre");

	el.innerHTML = "[INFO] " + text;

	con.appendChild(el);
};