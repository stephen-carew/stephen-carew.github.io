// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
    });
  });
}

// Theme toggle functionality
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

if (themeToggle) {
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem("theme") || "light";
  body.setAttribute("data-theme", currentTheme);

  // Update toggle button icon
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = themeToggle?.querySelector("i");
  if (icon) {
    icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }
}

// Typewriter effect for hero subtitle
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typewriter effect
window.addEventListener("load", () => {
  const typewriterElement = document.querySelector(".typewriter");
  if (typewriterElement) {
    const text = typewriterElement.textContent;
    setTimeout(() => {
      typeWriter(typewriterElement, text, 80);
    }, 1000);
  }
});

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Filter projects
    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 100);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// Skill progress bar animation
function animateSkillBars() {
  const skillItems = document.querySelectorAll(".skill-item");
  console.log("Animating skill bars, found items:", skillItems.length);

  skillItems.forEach((item, index) => {
    const progressBar = item.querySelector(".skill-progress");
    const width = progressBar.getAttribute("data-width");

    console.log(`Skill ${index}: width=${width}`);

    if (width) {
      // Reset width first
      progressBar.style.width = "0%";

      // Add animate class for additional styling
      progressBar.classList.add("animate");

      // Stagger the animations
      setTimeout(() => {
        progressBar.style.width = width + "%";
        console.log(`Setting width to ${width}% for skill ${index}`);
      }, index * 150 + 300);
    }
  });
}

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = parseInt(counter.textContent.replace(/[^0-9]/g, ""));
    const suffix = counter.textContent.replace(/[0-9]/g, "");
    let current = 0;
    const increment = target / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target + suffix;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current) + suffix;
      }
    }, 40);
  });
}

// Contact form handling with validation
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      showNotification("Please fill in all required fields.", "error");
      return;
    }

    if (!isValidEmail(data.email)) {
      showNotification("Please enter a valid email address.", "error");
      return;
    }

    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      showNotification(
        "Thank you for your message! I'll get back to you soon.",
        "success"
      );
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fas fa-${
      type === "success"
        ? "check-circle"
        : type === "error"
        ? "exclamation-circle"
        : "info-circle"
    }"></i>
    <span>${message}</span>
    <button class="notification-close"><i class="fas fa-times"></i></button>
  `;

  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 5000);

  // Close button functionality
  notification
    .querySelector(".notification-close")
    .addEventListener("click", () => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    });
}

// Scroll animations with Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");

      // Trigger specific animations based on element type
      if (entry.target.classList.contains("skills-grid")) {
        // Animate skill bars when skills section comes into view
        if (!entry.target.classList.contains("skills-animated")) {
          setTimeout(() => animateSkillBars(), 500);
          entry.target.classList.add("skills-animated");
        }
      }

      if (entry.target.classList.contains("skills-overview")) {
        // Animate counters when stats come into view
        if (!entry.target.classList.contains("stats-animated")) {
          setTimeout(() => animateCounters(), 300);
          entry.target.classList.add("stats-animated");
        }
      }
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".project-card, .skills-grid, .skills-overview, .contact-item, .about-highlight, .experience-item"
  )
  .forEach((el) => {
    observer.observe(el);
  });

// Floating icons animation
function createFloatingAnimation() {
  const floatingIcons = document.querySelectorAll(".floating-icon");

  floatingIcons.forEach((icon, index) => {
    const delay = index * 0.5;
    const duration = 3 + Math.random() * 2;

    icon.style.animationDelay = `${delay}s`;
    icon.style.animationDuration = `${duration}s`;
  });
}

// Initialize floating animation
window.addEventListener("load", createFloatingAnimation);

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5;
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
});

// Add CSS for notifications
const notificationStyles = `
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--card-background);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-md);
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    box-shadow: 0 10px 30px var(--shadow-color);
    transform: translateX(400px);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1000;
    max-width: 400px;
  }
  
  .notification.show {
    transform: translateX(0);
    opacity: 1;
  }
  
  .notification-success {
    border-left: 4px solid #22c55e;
  }
  
  .notification-error {
    border-left: 4px solid #ef4444;
  }
  
  .notification-info {
    border-left: 4px solid #3b82f6;
  }
  
  .notification i {
    font-size: 1.25rem;
  }
  
  .notification-success i {
    color: #22c55e;
  }
  
  .notification-error i {
    color: #ef4444;
  }
  
  .notification-info i {
    color: #3b82f6;
  }
  
  .notification-close {
    background: none;
    border: none;
    color: var(--text-color-light);
    cursor: pointer;
    padding: 0.25rem;
    margin-left: auto;
    border-radius: 4px;
    transition: all 0.2s ease;
  }
  
  .notification-close:hover {
    background: var(--background-color-alt);
    color: var(--text-color);
  }
`;

// Inject notification styles
const styleSheet = document.createElement("style");
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add loading animation to page
  document.body.classList.add("loaded");

  // Initialize skill level colors
  const skillLevels = document.querySelectorAll(".skill-level");
  skillLevels.forEach((level) => {
    const text = level.textContent.toLowerCase();
    if (text.includes("expert")) level.classList.add("expert");
    else if (text.includes("advanced")) level.classList.add("advanced");
    else if (text.includes("intermediate")) level.classList.add("intermediate");
    else if (text.includes("beginner")) level.classList.add("beginner");
  });

  // Fallback: Trigger skill bar animation after a delay if not already triggered
  // Enhanced fallback animation trigger
  setTimeout(() => {
    const skillsGrid = document.querySelector(".skills-grid");
    console.log("Fallback trigger - skills grid found:", !!skillsGrid);
    if (skillsGrid && !skillsGrid.classList.contains("skills-animated")) {
      console.log("Triggering fallback animation");
      animateSkillBars();
      skillsGrid.classList.add("skills-animated");
    }
  }, 2000);

  // Additional trigger on window load
  window.addEventListener("load", () => {
    setTimeout(() => {
      const skillsGrid = document.querySelector(".skills-grid");
      if (skillsGrid && !skillsGrid.classList.contains("skills-animated")) {
        console.log("Window load trigger - animating skills");
        animateSkillBars();
        skillsGrid.classList.add("skills-animated");
      }
    }, 1000);
  });

  // Debug: Add manual trigger for testing (remove in production)
  window.testSkillBars = function () {
    console.log("Manual test trigger");
    animateSkillBars();
  };

  // Debug: Log when skills section is in view
  const skillsSection = document.querySelector(".skills-grid");
  if (skillsSection) {
    console.log("Skills section found in DOM");
  } else {
    console.log("Skills section NOT found in DOM");
  }

  // Immediate fallback - force animation on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded - checking for skills");
    setTimeout(() => {
      const skillItems = document.querySelectorAll(".skill-item");
      console.log("Found skill items:", skillItems.length);
      if (skillItems.length > 0) {
        console.log("Forcing immediate animation");
        animateSkillBars();
      }
    }, 500);
  });
});
