/**
 * ========================================
 * Home Cover 4 Swiper - 手機版輪播
 * 桌面/平板版維持 grid，手機版啟用 swiper
 * ========================================
 */

(function () {
  let homeCover4Swiper = null;

  function initHomeCover4Swiper() {
    const swiperContainer = document.querySelector('.home-cover-4-swiper');
    if (!swiperContainer) return;

    // 檢查是否為平板或手機版（1024px 以下）
    const isTabletOrMobile = window.innerWidth <= 1024;

    if (isTabletOrMobile && !homeCover4Swiper) {
      homeCover4Swiper = new Swiper('.home-cover-4-swiper', {
        slidesPerView: 1.5,
        spaceBetween: 16,
        centeredSlides: false,
        navigation: {
          nextEl: '.home-cover-4__nav-next',
          prevEl: '.home-cover-4__nav-prev',
        },
        breakpoints: {
          769: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          }
        }
      });
      console.log('✅ Home Cover 4 Swiper initialized (tablet/mobile)');
    } else if (!isTabletOrMobile && homeCover4Swiper) {
      // 桌面版時銷毀 swiper
      homeCover4Swiper.destroy(true, true);
      homeCover4Swiper = null;
      console.log('✅ Home Cover 4 Swiper destroyed (desktop)');
    }
  }

  // 初始化
  initHomeCover4Swiper();

  // 監聽視窗大小變化
  window.addEventListener('resize', initHomeCover4Swiper);
})();
