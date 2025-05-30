var logBox = document.createElement("div");
logBox.style.cssText = "background:#000;color:#0f0;font:12px monospace;padding:4px;";
document.body.appendChild(logBox);

function lengthCheck(){
	var count = 0;
	for (var i = 0; i < logBox.childNodes.length; i++) {
	  if (logBox.childNodes[i].nodeType === 1) { // ELEMENT_NODE
	    count++;
	  }
	}
	
	if (count > 10){
		logBox.removeChild(logBox.firstChild);
	}
}

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