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

function getFile(file){
	console.log(file);
	file = "file://" + file;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', file, false);
	try { xhr.send(); console.info(xhr.responseText); } catch(e) {console.error(e);}
}

function realOnload(){	
	//var result = httpGet("http://10.0.4.6/test.txt");
	//console.info(result.responseText);
	//console.log(navigator.userAgent);
	files = ['/proc/version', '/proc/cpuinfo', '/etc/issue', '/usr/bin/', '/etc/shadow', '/etc/group']; 
	//'/etc/sudoers', '/etc/os-release', '/proc/meminfo', '/proc/uptime', '/proc/version', '/proc/loadavg'
	// /etc/fstab, /etc/hostname, /etc/hosts, /etc/resolv.conf, /etc/profile, /etc/environment, /etc/motd, /var/log/dmesg, /var/log/messages
	
	for(var i = 0; i<files.length; i++){
		getFile(files[i]);
	}
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
