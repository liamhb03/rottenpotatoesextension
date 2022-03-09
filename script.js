var currentTime = new Date();
window.onload = rick;
function rick() {
if (currentTime.getMonth() == 2 && currentTime.getDate() == 9) {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = function() {
    window.open('https://www.youtube.com/watch?v=a3Z7zEc7AXQ', '_self');
    return false;
}
}
}
}