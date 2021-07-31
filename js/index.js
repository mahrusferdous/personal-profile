const toggleBtn = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navlink")[0];

toggleBtn.addEventListener("click", function () {
    if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
    ) {
        navbarLinks.classList.toggle("active");
    }
});

window.onscroll = function () {
    if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
    ) {
        $(".nav-bar-nav").addClass("nav-fixed");
        $(".toggle-button").addClass("toggle-fix");
    } else {
        $(".nav-bar-nav").removeClass("nav-fixed");
        $(".toggle-button").removeClass("toggle-fix");
        $(".navlink").removeClass("active");
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

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        start: "top 65%",
        onEnter: () => $(".envelope").addClass("envelope-show"),
    },
});

tl.fromTo(
    ".envelope",
    { yPercent: -500, duration: 0 },
    { yPercent: 0, duration: 1 }
);
