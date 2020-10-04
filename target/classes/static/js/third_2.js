var bgDiv = document.querySelector('#bgDiv');
function blurBgDiv() {
    bgDiv.classList.add('obscured');
}
function restoreBgDiv() {
    bgDiv.classList.remove('obscured');
}

var section = document.querySelector('.lightSlider');
var ls = lightSlider(section);