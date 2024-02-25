let navbar = document.querySelector(".navbar");

document.querySelector("#menu-bar").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  navbar.classList.remove("active");
};
let navbar2 = document.querySelector(".like-bar");

document.querySelector("#menu-likes").onclick = () => {
  navbar2.classList.toggle("active");
};

document.querySelector("#closelikes").onclick = () => {
  navbar2.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  if (window.scrollY > 100) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
};
let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-moon");
  if (themeToggler.classList.contains("fa-moon")) {
    document.querySelector("body").classList.add("active");
  } else {
    document.querySelector("body").classList.remove("active");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });

  // Pause autoplay on hover
  swiper.el.addEventListener("mouseover", function () {
    swiper.autoplay.stop();
  });

  // Restart autoplay on mouse leave
  swiper.el.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Set the end date and time of the deal (YYYY-MM-DD HH:MM:SS format)
  var endDate = new Date("2024-03-16T00:00:00");

  function updateCountdown() {
    var now = new Date();
    var timeDifference = endDate - now;

    // Calculate remaining time
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");

    // If the countdown is over, display a message or take appropriate action
    if (timeDifference < 0) {
      clearInterval(timerInterval); // Stop the countdown
      document.querySelector(".count-down").innerHTML = "Deal has ended!";
      // Optionally, you can hide the countdown or take any other action when the deal ends
    }
  }

  // Update the countdown every second
  var timerInterval = setInterval(updateCountdown, 1000);

  // Initial call to display the countdown immediately
  updateCountdown();
});

// Get all heart icons for each product
const heartIcons = document.querySelectorAll(".heart-icon");

// Add event listener to each heart icon
heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener("click", toggleFavorite);
});

// Function to toggle favorite status
function toggleFavorite(event) {
  event.stopPropagation(); // Prevents event bubbling

  let heartIcon = event.target;
  let slide = heartIcon.closest(".slide");

  if (heartIcon.classList.contains("far")) {
    heartIcon.classList.remove("far");
    heartIcon.classList.add("fas");
    // Add the product to favorites
    addToFavorites(slide);
  } else {
    heartIcon.classList.remove("fas");
    heartIcon.classList.add("far");
    // Remove the product from favorites
    removeFromFavorites(slide);
  }
}

// Function to add product to favorites
function addToFavorites(slide) {
  let imageSrc = slide.querySelector(".image img").getAttribute("src");
  let favoritesList = document.getElementById("liked-products");

  let productItem = document.createElement("div");
  productItem.classList.add("product-item");
  productItem.innerHTML = `
        <img src="${imageSrc}" alt="" class="product-image">
        <a href="#" class="fa-solid fa-cart-shopping"></a>
        <i class="fas fa-solid fa-trash" onclick="removeFromFavorites(this)"></i>
    `;

  favoritesList.appendChild(productItem);
}

// Function to remove product from favorites
function removeFromFavorites(deleteIcon) {
  let productItem = deleteIcon.parentElement;
  productItem.remove();
}
