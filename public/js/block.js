document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener("keydown", function (e) {
    //document.onkeydown = function(e) {
    // "I" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        alert("Hành động đã bị chặn !");
        e.preventDefault();
    }
    // "J" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        alert("Hành động đã bị chặn !");
        e.preventDefault();
    }
    // "S" key + macOS
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        alert("Hành động đã bị chặn !");
        e.preventDefault();
    }
    // "U" key
    if (e.ctrlKey && e.keyCode == 85) {
        alert("Hành động đã bị chặn !");
        e.preventDefault();
    }
    // "F12" key
    if (event.keyCode == 123) {
        alert("Hành động đã bị chặn !");
        e.preventDefault();
    }
}, false);