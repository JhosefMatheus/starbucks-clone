const mapButton = document.getElementById("map-button");
const mapSvg = document.getElementById("map-svg");

mapButton.onmouseover = () => {
    mapSvg.style.fill = "#00754a";
}

mapButton.onmouseout = () => {
    mapSvg.style.fill = "#000";
}