document.getElementById("burger-menu").addEventListener("click", function () {
    let burgerMenu = document.getElementById("burger");
    let openIcon = document.getElementById ("burger-open");
    let closeIcon = document.getElementById ("burger-close");
    let body = document.body;


    if (burgerMenu.style.display === "none" || burgerMenu.style.display === "") {
        burgerMenu.style.display = "block";
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
        body.style.overflow = "hidden";


    } else {
        burgerMenu.style.display = "none";
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
        body.style.overflow = ""

    }
});