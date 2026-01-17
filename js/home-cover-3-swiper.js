/**
 * ========================================
 * Home Cover 3 Swiper - 平板/手機版輪播
 * 桌面版維持 grid，平板/手機版啟用 swiper
 * ========================================
 */

(function () {
  let homeCover3Swiper = null;

  function initHomeCover3Swiper() {
    const swiperContainer = document.querySelector('.home-cover-3-swiper');
    if (!swiperContainer) return;

    // 檢查是否為平板或手機版（1024px 以下）
    const isTabletOrMobile = window.innerWidth <= 1024;

    if (isTabletOrMobile && !homeCover3Swiper) {
      homeCover3Swiper = new Swiper('.home-cover-3-swiper', {
        slidesPerView: 1.5,
        spaceBetween: 16,
        centeredSlides: false,
        navigation: {
          nextEl: '.home-cover-3__nav-next',
          prevEl: '.home-cover-3__nav-prev',
        },
        breakpoints: {
          769: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }
      });
      console.log('✅ Home Cover 3 Swiper initialized');
    } else if (!isTabletOrMobile && homeCover3Swiper) {
      // 桌面版時銷毀 swiper
      homeCover3Swiper.destroy(true, true);
      homeCover3Swiper = null;
      console.log('✅ Home Cover 3 Swiper destroyed (desktop)');
    }
  }

  // 初始化
  initHomeCover3Swiper();

  // 監聽視窗大小變化
  window.addEventListener('resize', initHomeCover3Swiper);
})();
