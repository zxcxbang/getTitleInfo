function sendMessge2Pop(message) {
    chrome.runtime.sendMessage({
            type: 'show',
            text: message
    });
}

chrome.runtime.onMessage.addListener(function(message) {
    if (message && message.type == 'copy') {
        var input = document.createElement('textarea');
        document.body.appendChild(input);
        input.value = message.text;
        input.focus();
        input.select();
        document.execCommand('Copy');
        input.remove();
        sendMessge2Pop(message.text);
    }
});
