
// SELECT ALL ELEMENTS WITH REVEAL CLASS
const revealElements = document.querySelectorAll(".reveal");

// CREATE INTERSECTION OBSERVER
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });
}, {
    threshold: 0.15
});

// OBSERVE EACH ELEMENT
revealElements.forEach((element) => {
    observer.observe(element);
});



// HAMBURGER MENU

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// BACK TO TOP BUTTON

const backToTop = document.getElementById("back-to-top");

// SHOW BUTTON WHEN SCROLLING
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// SCROLL TO TOP WHEN CLICKED
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
