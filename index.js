// sticky nav

var stickynav = document.getElementById("nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        stickynav.classList.add("sticky");
    }
    else {
        stickynav.classList.remove("sticky");
    }
})