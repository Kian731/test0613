
var changetext = document.getElementById("change");

document.getElementById("button").onclick = function () {
    if (changetext.dataset.num == "2") {
        changetext.dataset.num = "1"
        changetext.innerHTML = "start123";
    } else {
        changetext.dataset.num = "2";
        changetext.innerHTML = "456end";
    }
}