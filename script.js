/* =========================================================
   HERO IMAGE SLIDER
========================================================= */
const heroImages = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg",
  "images/hero4.jpg"
];

let heroIndex = 0;
const heroImg = document.getElementById("heroImage");

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  heroImg.style.opacity = 0;

  setTimeout(() => {
    heroImg.src = heroImages[heroIndex];
    heroImg.style.opacity = 1;
  }, 500);
}, 5000);


/* =========================================================
   DARK / LIGHT MODE
========================================================= */
const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
};


/* =========================================================
   FAQ TOGGLE
========================================================= */
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const ans = btn.nextElementSibling;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});


/* =========================================================
   FADE-IN ON SCROLL
========================================================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".section, .card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  observer.observe(el);
});


/* =========================================================
   MODAL FORM (FREE CONSULTATION + HIRE ME)
========================================================= */

// Open modal (called from HTML onclick)
function openForm() {
  const modal = document.getElementById("hireModal");
  modal.style.display = "flex";
}

// Close modal (called from close ×)
function closeForm() {
  const modal = document.getElementById("hireModal");
  modal.style.display = "none";
}

// Close modal when clicking outside the form
window.addEventListener("click", (e) => {
  const modal = document.getElementById("hireModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
