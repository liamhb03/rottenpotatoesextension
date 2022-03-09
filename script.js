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



//Show current value of url as value currentURL.
if(window.location.href.indexOf("options") > -1) {
    chrome.storage.sync.get('url', function(result) {
        document.getElementById("currentURL").innerHTML = result.url;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('submit');
    // onClick's logic below:
    link.addEventListener('click', function() {
        chrome.storage.sync.get('url', function(result) {
            var url = document.getElementById('url').value;
            chrome.storage.sync.set({
                url: url
            }, function(result) {
                console.log("saved")
                console.log(result);
            });
            document.getElementById("currentURL").innerHTML = url;
        });
    });
});

chrome.storage.sync.get('url', function(result) {
    if(result.url == undefined) {
        chrome.storage.sync.set({
            url: 'https://www.youtube.com/watch?v=a3Z7zEc7AXQ'
        }, function(result) {
            console.log("saved")
            console.log(result);
        });
    }
});