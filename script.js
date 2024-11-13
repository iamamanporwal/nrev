document.addEventListener("DOMContentLoaded", function () {
  // Parallax effect for product screenshot

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Slideshow functionality
  const screenshots = document.querySelectorAll(".screenshot");
  const tabButtons = document.querySelectorAll(".tab-button");
  let currentIndex = 0;
  let slideshowInterval;

  function showImage(index) {
    screenshots.forEach((img) => img.classList.remove("active"));
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    screenshots[index].classList.add("active");
    tabButtons[index].classList.add("active");
    currentIndex = index;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % screenshots.length;
    showImage(currentIndex);
  }

  // Start slideshow
  function startSlideshow() {
    slideshowInterval = setInterval(nextImage, 5000);
  }

  // Stop slideshow on user interaction
  function stopSlideshow() {
    clearInterval(slideshowInterval);
  }

  // Handle tab button clicks
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      stopSlideshow();
      const index = parseInt(button.dataset.index);
      showImage(index);
      // Restart slideshow after user interaction
      setTimeout(startSlideshow, 10000);
    });
  });

  // Initialize slideshow
  startSlideshow();

  // Hover effect for screenshots
  const screenshotContainer = document.querySelector(".screenshot-container");
  screenshotContainer.addEventListener("mousemove", (e) => {
    const rect = screenshotContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    screenshots.forEach((img) => {
      const translateX = (x - rect.width / 2) / 20;
      const translateY = (y - rect.height / 2) / 20;
      img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${
        img.classList.contains("active") ? 1 : 1.02
      })`;
    });
  });

  screenshotContainer.addEventListener("mouseleave", () => {
    screenshots.forEach((img) => {
      img.style.transform = `scale(${
        img.classList.contains("active") ? 1 : 1.02
      })`;
    });
  });

  // Stop slideshow when user hovers over the container
  screenshotContainer.addEventListener("mouseenter", stopSlideshow);
  screenshotContainer.addEventListener("mouseleave", startSlideshow);
});

document.querySelectorAll(".stat").forEach((stat) => {
  stat.addEventListener("mouseenter", () => {
    stat.style.backgroundColor = "#7c3aed";
    stat.style.transform = "scale(1.1)";
    stat.style.zIndex = "10";
    stat.querySelector(".stat-number").style.fontSize = "3rem";
    stat.querySelector(".stat-label").style.fontSize = "1.5rem";
    stat.querySelector(".stat-description").style.fontSize = "1rem";
  });

  stat.addEventListener("mouseleave", () => {
    stat.style.backgroundColor = "#1f2937";
    stat.style.transform = "scale(1)";
    stat.style.zIndex = "1";
    stat.querySelector(".stat-number").style.fontSize = "2.25rem";
    stat.querySelector(".stat-label").style.fontSize = "1.25rem";
    stat.querySelector(".stat-description").style.fontSize = "0.875rem";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Add any interactive functionality here
  console.log("Benefits Section script loaded");

  // Example: Add click event listener to the notification button
  const notificationButton = document.querySelector(".notification-button");
  if (notificationButton) {
    notificationButton.addEventListener("click", function () {
      alert("You will be notified of new deals and events!");
    });
  }

  // Example: Add submit event listener to the input fields
  const inputs = document.querySelectorAll(".input");
  inputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        alert(`You entered: ${this.value}`);
        this.value = "";
      }
    });
  });
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !expanded);

    const answer = button.nextElementSibling;
    answer.classList.toggle("active");

    // Close other answers
    document.querySelectorAll(".faq-question").forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.setAttribute("aria-expanded", "false");
        otherButton.nextElementSibling.classList.remove("active");
      }
    });
  });
});

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.target.classList.contains("faq-question")) {
    const questions = [...document.querySelectorAll(".faq-question")];
    const currentIndex = questions.indexOf(e.target);

    if (e.key === "ArrowUp" && currentIndex > 0) {
      questions[currentIndex - 1].focus();
    } else if (e.key === "ArrowDown" && currentIndex < questions.length - 1) {
      questions[currentIndex + 1].focus();
    }
  }
});
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
