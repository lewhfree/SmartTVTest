var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // sync request
    try {
        xmlHttp.send(null);
        console.log("Status: " + xmlHttp.status);
        console.log("ReadyState: " + xmlHttp.readyState);
        console.log("Response: " + xmlHttp.responseText);
        return xmlHttp.responseText;
    } catch (e) {
        console.error("Request error: " + e.message);
        return null;
    }
}

var Main =
{

};

function realOnload(){
	document.body.style.background = 'lime';
	
	var newEl = document.createElement("p");

	newEl.innerHTML = "JS append test!";

	document.body.appendChild(newEl);
	
	console.log("console.log(horray)");
	console.error("error");
	
	try {
		var result = httpGet("http://10.0.4.6/widgetlist.xml");
		console.log("Result is: " + result);
	} catch (e) {
		console.error("Caught error: " + e.message);
	}
	
}

Main.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
	
	httpGet("10.0.4.46:80/w");
	
};

Main.onUnload = function()
{

};

Main.enableKeys = function()
{
	document.getElementById("anchor").focus();
};

Main.keyDown = function()
{
	var keyCode = event.keyCode;
	alert("Key pressed: " + keyCode);

	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			//addCode();
			widgetAPI.sendReturnEvent();
			break;
		case tvKey.KEY_LEFT:
			//addCode();
			break;
		case tvKey.KEY_RIGHT:
			//addCode();
			break;
		case tvKey.KEY_UP:
			//addCode();
			break;
		case tvKey.KEY_DOWN:
			//addCode();
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			//addCode();
			break;
		default:
			//addCode();
			break;
	}
};
