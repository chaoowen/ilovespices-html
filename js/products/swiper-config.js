/**
 * ========================================
 * Products 頁面 Swiper 設定
 * 使用 SwiperInit 工具初始化輪播
 * ========================================
 */

(function () {
  /**
   * Products Row Swiper
   * 響應式：1200px 以下才啟用
   */
  SwiperInit.createResponsive('productsRow', '.products-row-swiper', {
    slidesPerView: 2.6,
    spaceBetween: 16,
    centeredSlides: true,
    centeredSlidesBounds: true,

    // 觀察容器變化，自動更新
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: '.products__nav-next',
      prevEl: '.products__nav-prev',
    },

    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  }, 1200);

  console.log('✅ Products page swipers initialized');
})();
