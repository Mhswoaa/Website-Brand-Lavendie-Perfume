document.addEventListener("DOMContentLoaded", () => {
  // 1. PRELOADER
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
      setTimeout(handleReveal, 300);
    }, 1200);
  } else {
    setTimeout(handleReveal, 100);
  }

  // 2. NAVBAR SCROLL EFFECT
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 3. MOBILE MENU TOGGLE
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  if (hamburger && mobileMenu) {
    const toggleMenu = () => {
      mobileMenu.classList.toggle("active");
      hamburger.innerHTML = mobileMenu.classList.contains("active")
        ? "✕"
        : "☰";
    };

    hamburger.addEventListener("click", toggleMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener("click", toggleMenu);
    });
  }

  // 4. SCROLL REVEAL ANIMATIONS
  const reveals = document.querySelectorAll(".reveal");

  function handleReveal() {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", handleReveal);

  // 5. FAQ ACCORDION
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      document.querySelectorAll(".faq-item").forEach((otherItem) => {
        if (otherItem !== item) otherItem.classList.remove("open");
      });
      item.classList.toggle("open");
    });
  });

  // 6. TESTIMONIAL SLIDER (Simplified manual for landing page)
  const track = document.querySelector(".slider-track");
  const dots = document.querySelectorAll(".slider-dot");

  if (track && dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");
      });
    });
  }

  // 7. AUTO FOOTER YEAR
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
