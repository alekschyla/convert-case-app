const textArea = document.getElementById("text");
const toUpperCaseButton = document.getElementById("toUpperCaseButton");
const toLowerCaseButton = document.getElementById("toLowerCaseButton");

toUpperCaseButton.onclick = function () {
    let text = textArea.value;
    textArea.value = text.toUpperCase();
};

toLowerCaseButton.onclick = function () {
    var text = textArea.value;
    textArea.value = text.toLowerCase();
};