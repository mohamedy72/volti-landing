"use strict";

/**
 *  Preloading
 *  */

const loadElement = document.querySelector<HTMLDivElement>("[data-preloader]");

window.addEventListener("load", () => {
  loadElement?.classList.add("loaded");
});

/**
 *  Mobile Navbar
 *  */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = () => {
  navbar?.classList.toggle("active");
  navToggler?.classList.toggle("active");
};

navToggler?.addEventListener("click", toggleNavbar);

/**
 *  Header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-go-top-btn]");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header?.classList.add("active");
    backTopBtn?.classList.add("active");
  } else {
    header?.classList.remove("active");
    backTopBtn?.classList.remove("active");
  }
});

/**
 * # Scroll Reveal
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  revealElements.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight / 1.2) {
      el.classList.add("revealed");
    } else {
      el.classList.remove("revealed");
    }
  });
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
export {};
