/**
 * script.js
 */

'use strict';

/**
 * Add event listener on multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * PRELOADER
 * (Optional: Add if needed later)
 */

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navTogglers[0].classList.remove("active"); // Assuming the first toggler is the main button
}

addEventOnElements(navLinks, "click", closeNavbar);

/**
 * HEADER ACTIVE ON SCROLL
 */

const header = document.querySelector(".header");

const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeHeader);

/**
 * CUSTOM CURSOR
 */

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Add a slight delay for the outline to create a trailing effect
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll("a, button, .input-field");

addEventOnElements(interactiveElements, "mouseenter", function () {
  cursorOutline.style.width = "50px";
  cursorOutline.style.height = "50px";
  cursorOutline.style.backgroundColor = "hsla(0, 0%, 100%, 0.1)";
});

addEventOnElements(interactiveElements, "mouseleave", function () {
  cursorOutline.style.width = "30px";
  cursorOutline.style.height = "30px";
  cursorOutline.style.backgroundColor = "transparent";
});

/**
 * SCROLL REVEAL ANIMATION
 */

const revealElements = document.querySelectorAll(".section-subtitle, .section-title, .section-text, .about-item, .project-card, .skills-item, .input-wrapper, .input-field, .btn");

const revealOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].style.opacity = "1";
      revealElements[i].style.transform = "translateY(0)";
    } else {
      // Optional: Reset animation when scrolling up
      revealElements[i].style.opacity = "0";
      revealElements[i].style.transform = "translateY(30px)";
      revealElements[i].style.transition = "0.5s ease";
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // Trigger on load
