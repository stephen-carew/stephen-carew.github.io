// Main JavaScript for Stephen Carew's Portfolio

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initNavigation();
  initTypewriter();
  initProjectFilters();
  initScrollAnimations();
  initCustomCursor();
  initContactForm();
  initBackToTop();
  initThemeToggle();
  initProjectPreviews();
});

// Navigation functionality
function initNavigation() {
  const header = document.getElementById("header");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navLinksItems = document.querySelectorAll(".nav-link");

  // Sticky header on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
  });

  // Mobile menu toggle
  hamburger.addEventListener("click", function () {
    this.classList.toggle("open");
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close mobile menu when clicking a nav link
  navLinksItems.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("open");
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Update active nav link based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + header.offsetHeight + 50;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Initial call to set active nav link
  updateActiveNavLink();
}

// Typewriter effect
function initTypewriter() {
  const typewriterText = document.getElementById("typewriter-text");
  if (!typewriterText) return;

  const phrases = [
    "Full-Stack Developer",
    "Blockchain Engineer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      // Deleting text
      typewriterText.textContent = currentPhrase.substring(
        0,
        currentCharIndex - 1
      );
      currentCharIndex--;
      typingSpeed = 50;
    } else {
      // Typing text
      typewriterText.textContent = currentPhrase.substring(
        0,
        currentCharIndex + 1
      );
      currentCharIndex++;
      typingSpeed = 100;
    }

    // If completed typing the phrase
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause at the end of the phrase
    }

    // If completed deleting the phrase
    if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before typing the next phrase
    }

    setTimeout(type, typingSpeed);
  }

  // Start the typewriter effect
  setTimeout(type, 1000);
}

// Project filtering
function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const viewMoreBtn = document.getElementById("view-more-btn");

  if (filterButtons.length === 0 || projectCards.length === 0) return;

  // Initially show only 6 projects
  let visibleProjects = 6;
  updateProjectVisibility();

  // Filter projects by category
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const categories = card.getAttribute("data-category").split(" ");

        if (filterValue === "all" || categories.includes(filterValue)) {
          card.style.display = "";
          card.classList.add("filter-match");
        } else {
          card.style.display = "none";
          card.classList.remove("filter-match");
        }
      });

      // Reset visible projects count when filter changes
      visibleProjects = 6;
      updateProjectVisibility();
    });
  });

  // View more projects button
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", function () {
      visibleProjects += 3;
      updateProjectVisibility();

      // Hide button if all projects are visible
      const matchingProjects = document.querySelectorAll(
        ".project-card.filter-match"
      ).length;
      if (visibleProjects >= matchingProjects) {
        this.style.display = "none";
      }
    });
  }

  // Update which projects are visible based on the current filter and count
  function updateProjectVisibility() {
    const matchingProjects = document.querySelectorAll(
      ".project-card.filter-match"
    );
    let count = 0;

    matchingProjects.forEach((project) => {
      if (count < visibleProjects) {
        project.style.display = "";
      } else {
        project.style.display = "none";
      }
      count++;
    });

    // Show/hide view more button
    if (viewMoreBtn) {
      if (matchingProjects.length > visibleProjects) {
        viewMoreBtn.style.display = "";
      } else {
        viewMoreBtn.style.display = "none";
      }
    }
  }

  // Add filter-match class to all projects initially
  projectCards.forEach((card) => {
    card.classList.add("filter-match");
  });
}

// Scroll animations
function initScrollAnimations() {
  // Add reveal class to elements that should animate on scroll
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("reveal");
  });

  // Add stagger-reveal class to grid containers
  const gridContainers = document.querySelectorAll(
    ".projects-grid, .skills-grid, .about-cards"
  );
  gridContainers.forEach((container) => {
    container.classList.add("stagger-reveal");
  });

  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  // Handle scroll animations
  function handleScrollAnimations() {
    const revealElements = document.querySelectorAll(
      ".reveal, .stagger-reveal"
    );

    revealElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("active");
      }
    });
  }

  // Listen for scroll events
  window.addEventListener("scroll", handleScrollAnimations);

  // Initial check for elements in viewport
  handleScrollAnimations();
}

// Custom cursor
function initCustomCursor() {
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  if (!cursor || !cursorFollower) return;

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    // Add a slight delay to the follower for a trailing effect
    setTimeout(function () {
      cursorFollower.style.left = e.clientX + "px";
      cursorFollower.style.top = e.clientY + "px";
    }, 50);
  });

  // Hover effect on interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, .project-card, .skill-item, input, textarea"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      cursor.style.width = "15px";
      cursor.style.height = "15px";
      cursorFollower.style.width = "40px";
      cursorFollower.style.height = "40px";
      cursorFollower.style.borderColor = "var(--primary-color)";
    });

    element.addEventListener("mouseleave", function () {
      cursor.style.width = "10px";
      cursor.style.height = "10px";
      cursorFollower.style.width = "30px";
      cursorFollower.style.height = "30px";
      cursorFollower.style.borderColor = "var(--primary-color)";
    });
  });

  // Hide default cursor
  document.body.style.cursor = "none";

  // Handle cursor on touch devices
  if ("ontouchstart" in window) {
    cursor.style.display = "none";
    cursorFollower.style.display = "none";
    document.body.style.cursor = "auto";
  }
}

// Contact form handling
function initContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // In a real implementation, you would send this data to a server
    // For now, we'll just show a success message
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
}

// Back to top button
function initBackToTop() {
  const backToTopButton = document.getElementById("backToTop");

  if (!backToTopButton) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Theme toggle (light/dark mode)
function initThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");

  if (!themeToggle) return;

  // Check for saved theme preference or use device preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme;

    if (currentTheme === "light") {
      newTheme = "dark";
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      newTheme = "light";
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// Project Preview Functionality
function initProjectPreviews() {
  const projectImages = document.querySelectorAll('.project-image[data-url]');
  let hoverTimeout;
  let currentPopup = null;

  projectImages.forEach(projectImage => {
    const popup = projectImage.querySelector('.project-popup');
    const overlay = projectImage.querySelector('.iframe-overlay');
    const closeBtn = popup.querySelector('.popup-close');
    const projectUrl = projectImage.getAttribute('data-url');
    
    // Move popup to body for full-screen positioning
    if (popup && !popup.dataset.moved) {
      document.body.appendChild(popup);
      popup.dataset.moved = 'true';
      popup.dataset.url = projectUrl;
    }
    
    // Hover to show popup after 3 seconds
    projectImage.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => {
        showPopup(popup);
        currentPopup = popup;
      }, 3000); // 3 second delay
    });

    // Clear timeout on mouse leave
    projectImage.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
    });

    // Click overlay to show popup immediately
    overlay.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      clearTimeout(hoverTimeout);
      showPopup(popup);
      currentPopup = popup;
    });

    // Close popup
    closeBtn.addEventListener('click', () => {
      hidePopup(popup);
      currentPopup = null;
    });

    // Close popup when clicking outside
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        hidePopup(popup);
        currentPopup = null;
      }
    });
  });

  // Close popup with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentPopup) {
      hidePopup(currentPopup);
      currentPopup = null;
    }
  });

  function showPopup(popup) {
    popup.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function hidePopup(popup) {
    popup.classList.remove('show');
    document.body.style.overflow = '';
  }
}
