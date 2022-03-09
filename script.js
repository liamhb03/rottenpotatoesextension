var currentTime = new Date();
window.onload = replacer;
function replacer() {
if (currentTime.getMonth() == 2 && currentTime.getDate() == 9) {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = function() {
    chrome.storage.sync.get('url', function(result) {
    window.open(result.url, '_self');
    });
    return false;
}
}
}
}
if(window.location.href.indexOf("options") > -1) {
    chrome.storage.sync.get('url', function(result) {
        document.getElementById("currentURL").innerHTML = "Current URL: " + result.url;
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('submit');
    link.addEventListener('click', function() {
        chrome.storage.sync.get('url', function(result) {
            var url = document.getElementById('url').value;
            chrome.storage.sync.set({
                url: url
            }, function(result) {
            });
            document.getElementById("currentURL").innerHTML = "Current URL: " + url;
        });
    });
});
chrome.storage.sync.get('url', function(result) {
    if(result.url == undefined) {
        chrome.storage.sync.set({
            url: 'https://www.youtube.com/watch?v=a3Z7zEc7AXQ'
        }, function(result) {
        });
    }
});