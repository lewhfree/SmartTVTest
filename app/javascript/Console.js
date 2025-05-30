window.onload = function() {
var logBox = document.createElement("div");
logBox.style.cssText = 
	  "position: fixed;" +   // fixed so it stays visible
	  "bottom: 0; left: 0; right: 0;" +  // stick to bottom full width
	  "max-height: 200px;" +  // limit height with scroll
	  "overflow-y: auto;" +   // scroll if too tall
	  "background: black;" + 
	  "color: lime;" + 
	  "font-family: monospace;" +
	  "font-size: 12px;" +
	  "padding: 5px;" +
	  "z-index: 9999;";

document.body.appendChild(logBox);

function lengthCheck(){
	if (logBox.childNodes.length > 100){
		logBox.removeChild(logBox.firstChild);
	}
}

console.log = function(text){
	var el = document.createElement("p");

	el.innerHTML = "[LOG] " + text;

	logBox.appendChild(el);
	lengthCheck();
};

console.error = function(text){
	var el = document.createElement("div");

	el.innerHTML = "[ERROR] " + text;

	logBox.appendChild(el);
	lengthCheck();
};

console.warn = function(text){
	var el = document.createElement("div");

	el.innerHTML = "[WARN] " + text;

	logBox.appendChild(el);
	lengthCheck();
};

console.info = function(text){
	var el = document.createElement("div");

	el.innerHTML = "[INFO] " + text;

	logBox.appendChild(el);
	lengthCheck();
};
};