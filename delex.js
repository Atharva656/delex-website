// owl-carousel-1

$(".testimonial-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  smartSpeed: 1500,
  nav: false,
  dots: true,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".blog-bottom-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  smartSpeed: 1500,
  nav: false,
  dots: false,
  margin: 45,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// navbar scrolled

const navElement = document.querySelector(".navbar-default");
const logo = navElement.querySelector(".logo-txt-a");
const navLinks = navElement.querySelectorAll(".nav-links-a");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 35) {
    navElement.classList.add("navbar-scrolled");

    logo.classList.remove("text-white");

    logo.classList.add("text-orange");

    navLinks.forEach((link) => link.classList.add("nav-links-scrolled"));
  } else {
    navElement.classList.remove("navbar-scrolled");

    logo.classList.remove("text-orange");

    logo.classList.add("text-white");

    navLinks.forEach((link) => link.classList.remove("nav-links-scrolled"));
  }
});
// Back to top button
const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return; // Don't prevent default or scroll for empty hash

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});
