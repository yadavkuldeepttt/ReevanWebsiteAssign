"use strict";

window.addEventListener("load", function () {
  var preloadpage = document.getElementById("page_load");
  preloadpage.style.display = "none";
});

function updateScroll() {
  var reevanHeader = document.querySelector(".reevan-header");
  if (window.scrollY >= 80) {
    reevanHeader.classList.add("sticky");
  } else {
    reevanHeader.classList.remove("sticky");
  }
}
window.addEventListener("scroll", updateScroll);
updateScroll();

var videoPopups = document.querySelectorAll(".video-popup");
videoPopups.forEach(function (videoPopup) {
  videoPopup.addEventListener("click", function () {});
});

document.querySelectorAll("[data-background]").forEach(function (element) {
  element.style.backgroundImage =
    "url(" + element.getAttribute("data-background") + ")";
});

var navItems = document.querySelectorAll("li.megamenu");
navItems.forEach(function (navItem) {
  navItem.addEventListener("mouseover", function () {
    navItem.classList.add("hover");
  });

  navItem.addEventListener("mouseout", function () {
    navItem.classList.remove("hover");
  });
});

function showTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll(".tab-pane");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
    tab.classList.remove("show");
  });

  // Deactivate all buttons
  const buttons = document.querySelectorAll(".nav-link");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show the selected tab
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add("active");
    selectedTab.classList.add("show");
  }

  // Activate the clicked button
  for (let i = 1; i <= 4; i++) {
    const clickedButton = document.getElementById(
      tabId + String.fromCharCode(95 + i)
    );
    if (clickedButton) {
      clickedButton.classList.add("active");
    }
  }
  event.preventDefault();
}

let currentIndex = 0;

function showBox(index) {
  const boxes = document.querySelectorAll(".review-slider");
  const dots = document.querySelectorAll(".dot");

  if (index >= 0 && index < boxes.length) {
    const direction = index > currentIndex ? "left" : "right";

    boxes[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    boxes[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;

    // Apply animation direction
    boxes[currentIndex].style.animation = `${direction}Slide 0.5s ease-in-out`;
  }
}

// Initialize the page with the first slider and active dot
showBox(currentIndex);

// Add click event listeners to the dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showBox(index);
  });
});
