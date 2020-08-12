
chrome.tabs.query({windowType: 'normal'}, function(tabs) {
	for (var i = 0, l = tabs.length; i < l; i++) {
		// Set badge text equal to the number of open tabs
		chrome.browserAction.setBadgeText({text: JSON.stringify(tabs.length)});
		chrome.browserAction.setBadgeBackgroundColor({ color: "#0FABC1"});
		var listNode = document.createElement("li");
		var preNode = document.createElement("pre");
		var titleNode = document.createTextNode(tabs[i].title)
		var a = document.createElement("a");
		listNode.appendChild(titleNode);

		listNode.appendChild(preNode);
		a.textContent = tabs[i].url;
		a.setAttribute('style', 'color: black');
		a.setAttribute('class', 'user-select-all')
		listNode.appendChild(a);
		document.getElementById("oList").appendChild(listNode);
	}
});

function clearBadge() {
	chrome.browserAction.setBadgeText({text: ''});
	window.close();
}

function copyToClipboard() {
	document.execCommand("copy");
	chrome.runtime.sendMessage({"message" : "copied"});
}

window.onload = function() {
	document.getElementById('clear').addEventListener('click', clearBadge);
	document.getElementById('copy').addEventListener('click', copyToClipboard);
}

$(document).ready(function () {
	$("li").dblclick(function(){
		$(this).hide();
	})
});