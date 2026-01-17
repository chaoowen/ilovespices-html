/**
 * ========================================
 * Recipes Swiper 初始化
 * ========================================
 */

(function () {
  // 檢查 Swiper 和 DOM 元素是否存在
  if (typeof Swiper === 'undefined') {
    console.error('Swiper is not loaded');
    return;
  }

  const swiperContainer = document.querySelector('.recipes-swiper');
  if (!swiperContainer) {
    console.error('Recipes swiper container not found');
    return;
  }

  // 初始化 Recipes Swiper
  const recipesSwiper = new Swiper('.recipes-swiper', {
    // 基本設定
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    // 速度與效果
    speed: 500,

    // 分頁指示器
    pagination: {
      el: '.recipes-pagination',
      clickable: true,
    },

    // 響應式斷點設定
    breakpoints: {
      // >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },

    // 事件監聽
    on: {
      init: function () {
        console.log('✅ Recipes Swiper initialized');
      },
    },
  });

  // 暴露到全域（方便除錯）
  window.recipesSwiper = recipesSwiper;
})();
