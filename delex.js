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

// Scroll Reveal
(function () {
  // Only direct container-fluid children of body (each page section)
  var sections = document.querySelectorAll("body > div.container-fluid");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );

  sections.forEach(function (el) {
    // Skip footer and copyright bar — they use negative-margin overlap layout
    // that breaks when transform is applied
    var bg = el.getAttribute("style") || "";
    var cls = el.className || "";
    if (cls.indexOf("bg-dark-blue") !== -1 || bg.indexOf("061429") !== -1 || bg.indexOf("091e3e") !== -1) {
      return;
    }

    // Skip the stats section (pt-lg-0) — it sits flush against the hero
    // and must always be visible regardless of scroll position
    if (cls.indexOf("pt-lg-0") !== -1) {
      return;
    }

    // Skip if already visible in viewport on page load (e.g. stats below hero)
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      return;
    }

    el.classList.add("scroll-reveal");
    observer.observe(el);
  });
})();
