"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video-background");
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 1600,
    mousewheel: {},

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  swiper.on("slideChange", function () {
    gsap.to(video, 1.6, {
      currentTime: (video.duration / (this.slides.length - 1)) * this.realIndex,
      ease: Power2.easeOut,
    });
  });
  swiper
    .on("slideChangeTransitionStart", function () {
      video.classList.add("change");
    })
    .on("slideChangeTransitionEnd", function () {
      video.classList.remove("change");
    });
});
