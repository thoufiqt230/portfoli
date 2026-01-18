// =========================
// Mobile Navigation Toggle
// =========================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navCloseBtn = document.createElement("span");

// Create a close (X) button
navCloseBtn.innerHTML = "&times;";
navCloseBtn.classList.add("nav-close-btn");
navLinks.prepend(navCloseBtn);

// Open menu
hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

// Close menu
navCloseBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// Close when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// =========================
// Project Modal Popup
// =========================
const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const viewCodeBtn = document.getElementById("viewCode");
const viewLiveBtn = document.getElementById("viewLive");
const modalCloseBtn = modal.querySelector(".close-btn");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalImage.src = card.dataset.image;
    viewCodeBtn.href = card.dataset.code;
    viewLiveBtn.href = card.dataset.live;
    modal.style.display = "flex";
  });
});

// Close modal
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// =========================
// Contact Form Submit
// =========================
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    contactForm.reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});
