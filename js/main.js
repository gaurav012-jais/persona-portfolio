/**
 * GAURAV JAISWAL - PORTFOLIO MAIN SCRIPT
 * UI Interactions, Sticky Nav, Counter Animations, Form Handler
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Navbar & Scrollspy
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active Section Tracking
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // 2. Mobile Menu Toggle
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-links");

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      const isOpen = navMenu.style.display === "flex";
      if (isOpen) {
        navMenu.style.display = "";
      } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "80px";
        navMenu.style.left = "0";
        navMenu.style.width = "100%";
        navMenu.style.background = "rgba(7, 6, 13, 0.98)";
        navMenu.style.padding = "2rem";
        navMenu.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
      }
    });

    // Close menu when link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = "";
        }
      });
    });
  }

  // 3. Duplicate Marquee Track for Infinite Smooth Scroll
  const marqueeTrack = document.querySelector(".marquee-track");
  if (marqueeTrack) {
    const clone = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML += clone;
  }

  // 4. Contact Form Handler with Feedback
  const contactForm = document.getElementById("portfolioContactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending Message...</span>`;

      setTimeout(() => {
        submitBtn.innerHTML = `<span>Message Sent Successfully! ✓</span>`;
        submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";

        // Show toast notification
        showToast("Thanks for reaching out! Gaurav will get back to you shortly.");
        contactForm.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = "";
        }, 4000);
      }, 1000);
    });
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "100px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "rgba(18, 15, 33, 0.95)";
    toast.style.border = "1px solid #8b5cf6";
    toast.style.color = "#fff";
    toast.style.padding = "1rem 1.75rem";
    toast.style.borderRadius = "9999px";
    toast.style.boxShadow = "0 10px 30px rgba(139, 92, 246, 0.4)";
    toast.style.zIndex = "9999";
    toast.style.fontSize = "0.95rem";
    toast.style.fontWeight = "600";
    toast.style.textAlign = "center";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "all 0.5s ease";
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
      setTimeout(() => toast.remove(), 500);
    }, 3500);
  }
});
