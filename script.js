document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };
});
