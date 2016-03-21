if (window == top) {
    window.addEventListener('keyup', doKeyPress, false); 
}

function getPageInfo() {
    var title = document.getElementsByTagName("title")[0].innerHTML.trim();
    var url = window.location.href;
    var message = title + "\n" + url;
    var now = new Date();
    message += "\n" + now.toISOString();
    return message;
}

function sendMessge2Background(message) {
    chrome.runtime.sendMessage({
            type: 'copy',
            text: message
    });
}

trigger_key = 69; // e
function doKeyPress(e){
    if (e.ctrlKey && e.keyCode == trigger_key){
        var message = getPageInfo();
        sendMessge2Background(message);
    }
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message && message.type == 'catch_request') {
        alert('xxx2');
        var info = getPageInfo();
        sendMessge2Background(info);
        //sendResponse({text: info});
    }
});


