
// Progress bar
window.addEventListener("scroll", () => {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;

  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  bar.style.width = (scrollTop / height) * 100 + "%";
});


// Mobile menu (FIXED)
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

if (menuIcon && navLinks) {
  menuIcon.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    // ganti icon ☰ <-> X
    if (isOpen) {
      menuIcon.classList.remove("ri-menu-line");
      menuIcon.classList.add("ri-close-line");
    } else {
      menuIcon.classList.remove("ri-close-line");
      menuIcon.classList.add("ri-menu-line");
    }
  });

  // klik link -> tutup menu + reset icon
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuIcon.classList.remove("ri-close-line");
      menuIcon.classList.add("ri-menu-line");
    });
  });
}


// Typing effect
const typingText = ["Frontend Developer", "UI/UX Designer", "Creative Thinker"];
let index = 0, charIndex = 0;
const typingElement = document.getElementById("typing");
function typeEffect() {
  if (charIndex < typingText[index].length) {
    typingElement.textContent += typingText[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}
function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % typingText.length;
    setTimeout(typeEffect, 300);
  }
}
typeEffect();


// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// Dark mode
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.classList.toggle("ri-moon-line");
    themeToggle.classList.toggle("ri-sun-line");
  });
}

const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-skill");
    }
  });
}, { threshold: 0.2 });

skillCards.forEach(card => observer.observe(card));

const wrapper = document.getElementById("scroll-wrapper");

// duplikat isi biar seamless
wrapper.innerHTML += wrapper.innerHTML;

let pos = 0;
let speed = 0.4; // atur kecepatan
let isPaused = false;

// pause pas hover
wrapper.parentElement.addEventListener("mouseenter", () => {
  isPaused = true;
});

wrapper.parentElement.addEventListener("mouseleave", () => {
  isPaused = false;
});

function seamlessScroll() {
  if (!isPaused) {
    pos -= speed;

    if (Math.abs(pos) >= wrapper.scrollWidth / 2) {
      pos = 0;
    }

    wrapper.style.transform = `translateX(${pos}px)`;
  }

  requestAnimationFrame(seamlessScroll);
}

seamlessScroll();

const showcase = wrapper.parentElement;

// pause saat sentuh (mobile)
showcase.addEventListener("touchstart", () => {
  isPaused = true;
}, { passive: true });

// lanjut lagi pas lepas sentuhan
showcase.addEventListener("touchend", () => {
  isPaused = false;
});

showcase.addEventListener("touchcancel", () => {
  isPaused = false;
});

const philosophy = document.querySelector(".philosophy");
const divider = philosophy.querySelector(".divider");

const philosophyObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        divider.style.animation = "dividerGrow 1.2s ease-out forwards";
      }
    });
  },
  { threshold: 0.4 }
);

philosophyObserver.observe(philosophy);

const contactForm = document.getElementById("contact-form");
const submitBtn = contactForm.querySelector("button");

contactForm.addEventListener("submit", () => {
  submitBtn.classList.add("loading");
});

// reset form setiap halaman di-load
window.addEventListener("load", () => {
  const form = document.getElementById("contact-form");
  if (form) form.reset();
});

const contactSection = document.querySelector(".contact");

const contactObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSection.classList.add("show");
        contactObserver.unobserve(contactSection);
      }
    });
  },
  { threshold: 0.25 }
);

contactObserver.observe(contactSection);

const form = document.getElementById("contact-form");
const btn = form.querySelector("button");

form.addEventListener("submit", () => {
  btn.classList.add("loading");
  btn.textContent = "Sending";
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

// show / hide button
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// smooth scroll to top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const navbar = document.querySelector("header") || document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

