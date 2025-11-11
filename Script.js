// Dark/Light Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  
  // Update theme toggle icon
  const themeIcon = document.querySelector('.theme-toggle i');
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.className = "fas fa-sun";
  } else {
    themeIcon.className = "fas fa-moon";
  }
}

// Typing effect
const typingText = document.querySelector(".typing");
const fullText = typingText.textContent;
typingText.textContent = "";
let index = 0;

function typeEffect() {
  if (index < fullText.length) {
    typingText.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

// Animate skill bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.width = level + '%';
  });
}

// Fade-in observer
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        
        // If it's the skills section, animate the bars
        if (entry.target.id === 'skills') {
          setTimeout(animateSkillBars, 300);
        }
      }
    });
  },
  { threshold: 0.2 }
);

window.onload = () => {
  // Set initial theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = "fas fa-sun";
  }
  
  // Initialize effects
  typeEffect();
  faders.forEach(fade => observer.observe(fade));
  
  console.log("Portfolio loaded successfully ✅");
};