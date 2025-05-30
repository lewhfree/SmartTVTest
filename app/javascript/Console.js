var logBox = document.createElement("div");
logBox.style.cssText = "background:#000;color:#0f0;font:12px monospace;padding:4px;";
document.body.appendChild(logBox);

console.log = function(text){
	var el = document.createElement("p");

	el.innerHTML = "[LOG] " + text;

	logBox.appendChild(el);
};

console.error = function(text){
	var el = document.createElement("div");

	el.innerHTML = "[ERROR] " + text;

	logBox.appendChild(el);
};

console.warn = function(text){
	var el = document.createElement("div");

	el.innerHTML = "[WARN] " + text;

	logBox.appendChild(el);
};

console.info = function(text){
	var el = document.createElement("div");

	el.innerHTML = "[INFO] " + text;

	logBox.appendChild(el);
};