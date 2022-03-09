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
        document.getElementById("currentURL").innerHTML = result.url;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('submit');
    link.addEventListener('click', function() {
        chrome.storage.sync.get('url', function(result) {
            var url = document.getElementById('url').value;
            var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
            if(regex.test(url)) {
                chrome.storage.sync.set({
                    url: url
                }, function(result) {
               
                });
            }
            else {
                alert("Please enter a valid URL.");
            }
        });
    });
});

chrome.storage.sync.get('url', function(result) {
    if(result.url == undefined) {
        chrome.storage.sync.set({
            url: 'https://www.youtube.com/watch?v=9p8-feOC1gM'
        }, function(result) {
      
        });
    }
});