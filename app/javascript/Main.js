var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // sync request
    try {
        xmlHttp.send(null);
        return xmlHttp;
    } catch (e) {
        console.error("Request error: " + e.message);
        console.log("Status: " + xmlHttp.status);
        console.log("ReadyState: " + xmlHttp.readyState);
        return null;
    }
}

var Main =
{

};

function realOnload(){	
	var result = httpGet("http://10.0.4.6/test.txt");
	console.info(result.responseText);
	console.log(navigator.userAgent);
	console.log("etcpswd");
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'file:///etc/passwd', false);
	try { xhr.send(); console.log(xhr.responseText); } catch(e) {console.error(e);}
	
	var resul = httpGet("file:///bin/ls");
	console.info("binls");
	console.info(resul);
}

Main.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
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
	console.info("pressed key");
	console.info(keyCode);
	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			
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
