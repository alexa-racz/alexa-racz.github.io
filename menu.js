var menu = document.getElementById("menu");
var button = document.getElementById("button");
var savedZIndex = menu.style.zIndex;
var savedPosition = menu.style.position;
var savedBackgroundColor = menu.style.backgroundColor;

function toggleMenu() {
    menu.style.display = menu.style.display != "flex" ? "flex" : "none";
    menu.style.zIndex++;
    menu.style.position = "absolute";
    menu.style.left = "0";
    menu.style.top = (button.offsetTop + button.offsetHeight) + "px";
    menu.style.backgroundColor = "#640c0c"; // rgb(100, 12, 12);
    menu.style.width = "100%";
}
function resetMenu() {
    menu.style.display = "";
    menu.style.zIndex = savedZIndex;
    menu.style.position = savedPosition;
    menu.style.backgroundColor = savedBackgroundColor;
}
