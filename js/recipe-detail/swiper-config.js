/**
 * ========================================
 * Recipe Detail Page - Swiper Configuration
 * ========================================
 */

// 相關食譜 Swiper
SwiperInit.create('recipes', '.recipes-swiper', {
  slidesPerView: 1.2,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  speed: 500,

  // 分頁指示器 (桌機＆手機都有)
  pagination: {
    el: '.recipes-pagination',
    clickable: true,
  },

  // 導航箭頭 (桌機版)
  navigation: {
    nextEl: '.recipes__nav-next',
    prevEl: '.recipes__nav-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
  }
});

console.log('✅ Recipe detail page swiper configured!');
