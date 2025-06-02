var limit = 45;

console.log = function(text){
	var con = document.getElementById("console");
	var el = document.createElement("pre");
	var children = con.children;
	if(children.length > limit){
		var firstChild = children[0];
		con.removeChild(firstChild);
	}
	el.innerHTML = "[LOG] " + text;

	con.appendChild(el);
};

console.error = function(text){
	var con = document.getElementById("console");
	var el = document.createElement("pre");
	var children = con.children;
	if(children.length > limit){
		var firstChild = children[0];
		con.removeChild(firstChild);
	}
	el.innerHTML = "[ERROR] " + text;

	con.appendChild(el);
};

console.warn = function(text){
	var con = document.getElementById("console");
	var el = document.createElement("pre");
	var children = con.children;
	if(children.length > limit){
		var firstChild = children[0];
		con.removeChild(firstChild);
	}
	el.innerHTML = "[WARN] " + text;

	con.appendChild(el);
};

console.info = function(text){
	var con = document.getElementById("console");
	var el = document.createElement("pre");
	var children = con.children;
	if(children.length > limit){
		var firstChild = children[0];
		con.removeChild(firstChild);
	}
	el.innerHTML = "[INFO] " + text;

	con.appendChild(el);
};