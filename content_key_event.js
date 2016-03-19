if (window == top) {
    window.addEventListener('keyup', doKeyPress, false); 
}

trigger_key = 69; // shift + e
function doKeyPress(e){
    if (e.ctrlKey && e.keyCode == trigger_key){
        //alert('数据已拷贝到剪贴板')
        //chrome.extension.sendRequest({redirect: newurl});
        var title = document.getElementsByTagName("title")[0].innerHTML.trim();
        var url = window.location.href
        var message = title + "\n" + url
        var now = new Date()
        message += "\n" + now.toISOString()
        chrome.runtime.sendMessage({
            type: 'copy',
            text: message
        });
    }
}

