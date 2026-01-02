AOS.init({
  duration: 800,
  once: true,
  mirror: false,
  offset: 100,
  disable: "mobile", // Mobile smooth karne ke liye
});

// 2. Combined Scroll Logic (Saari galtiyan yahan theek ki hain)
window.addEventListener("scroll", function () {
  const scrollBtn = document.getElementById("scrollToTop");
  const nav = document.querySelector(".navbar");
  const scrollLine = document.querySelector(".scroll-line");

  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;

  if (scrollLine) {
    scrollLine.style.width = scrolled + "%";
  }

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  if (winScroll > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// 3. Typewriter Logic
document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.querySelector(".typewriter");
  if (typewriter) {
    const words = JSON.parse(typewriter.getAttribute("data-words"));
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typewriter.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriter.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 100 : 200;
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }
      setTimeout(type, typeSpeed);
    }
    type();
  }
});

// 4. Scroll to Top Click Event
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
