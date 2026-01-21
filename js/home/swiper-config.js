/**
 * ========================================
 * 首頁 Swiper 設定
 * 使用 SwiperInit 工具初始化所有首頁輪播
 * ========================================
 */

(function () {
  /**
   * Products Swiper（產品輪播）
   * 永遠啟用
   */
  SwiperInit.create('products', '.single-spice-swiper', {
    // 基本設定 - 手機版
    slidesPerView: 2,
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

    // 鍵盤控制
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // 滑鼠滾輪控制
    mousewheel: {
      forceToAxis: true,
    },

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
        slidesPerView: 4,
        spaceBetween: 16,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 16,
        centeredSlides: false,
      },
    },
  });


  /**
   * Recipes Swiper（食譜輪播）
   * 永遠啟用
   */
  SwiperInit.create('recipes', '.recipes-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    speed: 500,

    // 分頁指示器
    pagination: {
      el: '.recipes-pagination',
      clickable: true,
    },

    // 響應式斷點設定
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
    },
  });


  /**
   * Cover 3 Swiper（食物卡片輪播）
   * 響應式：1024px 以下才啟用
   */
  SwiperInit.createResponsive('cover3', '.home-cover-3-swiper', {
    slidesPerView: 1.5,
    spaceBetween: 16,
    centeredSlides: false,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,

    navigation: {
      nextEl: '.home-cover-3__nav-next',
      prevEl: '.home-cover-3__nav-prev',
    },

    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  }, 1024);


  /**
   * Cover 4 Swiper（熱門商品輪播）
   * 響應式：1024px 以下才啟用
   */
  SwiperInit.createResponsive('cover4', '.home-cover-4-swiper', {
    slidesPerView: 1.5,
    spaceBetween: 16,
    centeredSlides: false,
    slidesOffsetBefore: 40,
    slidesOffsetAfter: 40,

    navigation: {
      nextEl: '.home-cover-4__nav-next',
      prevEl: '.home-cover-4__nav-prev',
    },

    breakpoints: {
      769: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  }, 1024);


  /**
   * Tab 切換功能（產品分類）
   */
  const tabs = document.querySelectorAll('.single-spice__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      const category = this.getAttribute('data-category');
      console.log('Switched to category:', category);
    });
  });


  console.log('✅ Home page swipers initialized');
})();
