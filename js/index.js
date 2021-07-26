const toggleBtn = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-link")[0];

toggleBtn.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
});

window.onscroll = function () {
    if (
        document.documentElement.clientWidth >= 1000 &&
        (document.body.scrollTop > 30 ||
            document.documentElement.scrollTop > 30)
    ) {
        $(".nav-bar").addClass("nav-fixed");
    } else {
        $(".nav-bar").removeClass("nav-fixed");
    }
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".envelope",
        start: "bottom center",
        toggleClass: { targets: ".envelope", className: "envelope-show" },
    },
});
