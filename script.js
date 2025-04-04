document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    // Intersection Observer for section animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add animation class
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((section) => observer.observe(section));

    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    // Smooth hide/show header on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            header.style.transform = "translateY(-100%)"; // Hide header on scroll down
        } else {
            header.style.transform = "translateY(0)"; // Show header on scroll up
        }
        lastScrollY = window.scrollY;
    });

    // Ensure smooth transition on repeated scrolls
    header.style.transition = "transform 0.5s ease-in-out"; // Adjusted transition rate
});
