/**
 * ========================================
 * Single Product Page - Swiper Configuration
 * ========================================
 */

// 相關食譜 Swiper - 始終啟用
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

// 單方香辛料 Swiper (使用首頁 single-spice 樣式)
SwiperInit.create('singleSpice', '.single-spice-swiper', {
  slidesPerView: 1.2,
  spaceBetween: 12,
  centeredSlides: true,
  loop: true,

  // 自動播放
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // 速度與效果
  speed: 600,
  effect: 'slide',

  // 觸控設定
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,

  // 分頁指示器
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // 導航箭頭
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 響應式斷點設定
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
      centeredSlides: false,
    },
  },
});

console.log('✅ Single product page swipers configured!');
