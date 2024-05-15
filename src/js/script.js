"use strict";



window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		speed: 1600,
		mousewheel: { },
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
