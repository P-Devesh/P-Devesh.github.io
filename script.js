// Typing Animation for Hero Section
const typingElement = document.querySelector(".typing");
const textArray = [
  "AI & Data Enthusiast",
  "Machine Learning Engineer",
  "Generative AI Explorer",
  "Data Analyst"
];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typingElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(typeEffect, 500);
});

// Smooth Scrolling for Nav Links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll animations using Intersection Observer
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
