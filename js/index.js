console.log("your index.js file");

const menu = document.querySelector(".menu");

$(".hamburger").click(function () {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
    } else {
        menu.classList.add("showMenu");
    }
});
