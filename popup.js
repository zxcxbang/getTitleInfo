chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {type: "catch_request"}, function(response) {
    var text = response.text;
    console.log('text:' + text);
    document.getElementById('text').textContent = text;
  });
});

// chrome.runtime.onMessage.addListener(function(message) {
//     //alert('popup');
//     if (message && message.type == 'show') {
//         var text = response.text;
//         console.log('text:' + text);
//         document.getElementById('text').textContent = text;
//     }
// });

// function setPort(callback) {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         port = chrome.tabs.connect(tabs[0].id, {name: "popup"});
//         callback(port);
//     });
// }

// function clickHandler(e) {
//     setPort(function(port) {
//         if (port) { 
//           port.postMessage({type: 'catch_request'}); 
//         }
//     });  
// }

// document.addEventListener('DOMContentLoaded', function() {
//   //alert('xx');
//   var title = document.getElementsByTagName("title")[0].innerHTML.trim();
//   var url = window.location.href;
//   var message = title + "\n" + url;
//   var now = new Date();
//   message += "\n" + now.toISOString();
//   chrome.runtime.sendMessage({
//     type: 'copy',
//     text: message
//   });
//   //document.getElementById('data').textContent = message;
// });