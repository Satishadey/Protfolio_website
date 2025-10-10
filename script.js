// ===== Navbar Smooth Scroll & Active Link =====
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    document.getElementById("menu-toggle").checked = false;
  });
});

const contactForm = document.querySelector(".contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formMessage.textContent = " Form submitted successfully!";
  formMessage.style.color = "green";

  contactForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 4000);
});
