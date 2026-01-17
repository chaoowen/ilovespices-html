/**
 * ========================================
 * 輪播設定
 * ========================================
 */

/**
 * 初始化 Swiper 功能
 * 支援兩種載入方式：
 * 1. 透過 fetch + new Function 動態載入（HTML 開發階段）
 * 2. 透過 PHP include 直接載入（正式環境）
 */
function initSingleSpiceSwiper() {
  /**
   * 初始化 Swiper 輪播
   */
  const singleSpiceSwiper = new Swiper('.single-spice-swiper', {
    // 基本設定 - 手機版
    slidesPerView: 2,
    spaceBetween: 12,
    centeredSlides: true,
    loop: true, // 循環播放，滑到最後會回到第一個

    // 自動播放 (可選)
    autoplay: {
      delay: 3500,
      disableOnInteraction: false, // 使用者互動後繼續自動播放
      pauseOnMouseEnter: true, // 滑鼠懸停時暫停
    },

    // 速度與效果
    speed: 600,
    effect: 'slide', // 可選: 'slide', 'fade', 'cube', 'coverflow', 'flip'

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
    grabCursor: true, // 顯示抓取游標

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
      // 當螢幕寬度 >= 768px（平板）
      768: {
        slidesPerView: 4,
        spaceBetween: 16,
        centeredSlides: false,
      },
      // 當螢幕寬度 >= 1024px（桌機）
      1024: {
        slidesPerView: 5,
        spaceBetween: 16,
        centeredSlides: false,
      },
    },

    // 事件監聽
    on: {
      init: function () {
        console.log('Swiper initialized');
      },
      slideChange: function () {
        console.log('Slide changed to: ' + this.activeIndex);
      },
    },
  });


  /**
   * Tab 切換功能
   * 切換不同產品分類
   */
  const tabs = document.querySelectorAll('.single-spice__tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // 移除所有 active class
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      // 添加 active class 到被點擊的 tab
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      // 獲取分類
      const category = this.getAttribute('data-category');
      console.log('Switched to category:', category);

      // 這裡可以添加 AJAX 請求來載入不同分類的產品
      // 或者觸發其他事件
      loadProductsByCategory(category);
    });
  });


  /**
   * 根據分類載入產品 (示例函數)
   * 實際使用時需要連接後端 API
   */
  function loadProductsByCategory(category) {
    // 示例：發送 AJAX 請求
    /*
    fetch(`/api/products/${category}`)
        .then(response => response.json())
        .then(data => {
            updateSwiperContent(data.products);
        })
        .catch(error => {
            console.error('Error loading products:', error);
        });
    */

    // 暫時用 console.log 代替實際 API 調用
    console.log(`Loading products for category: ${category}`);

    // 可以在這裡添加載入動畫
    showLoadingAnimation();

    // 模擬 API 延遲
    setTimeout(() => {
      hideLoadingAnimation();
      // updateSwiperContent(mockProducts);
    }, 500);
  }


  /**
   * 更新 Swiper 內容 (示例函數)
   */
  function updateSwiperContent(products) {
    // 清空現有內容
    singleSpiceSwiper.removeAllSlides();

    // 添加新的產品卡片
    products.forEach(product => {
      const slide = `
                <div class="swiper-slide">
                    <div class="product-card">
                        <div class="product-card__image">
                            <img src="${product.image}" alt="${product.nameZh}">
                        </div>
                        <div class="product-card__info">
                            <h3 class="product-card__name-zh">${product.nameZh}</h3>
                            <p class="product-card__name-en">${product.nameEn}</p>
                        </div>
                    </div>
                </div>
            `;
      singleSpiceSwiper.appendSlide(slide);
    });
  }


  /**
   * 顯示載入動畫
   */
  function showLoadingAnimation() {
    const carousel = document.querySelector('.single-spice__carousel');
    if (carousel) {
      carousel.style.opacity = '0.5';
      carousel.style.pointerEvents = 'none';
    }
  }


  /**
   * 隱藏載入動畫
   */
  function hideLoadingAnimation() {
    const carousel = document.querySelector('.single-spice__carousel');
    if (carousel) {
      carousel.style.opacity = '1';
      carousel.style.pointerEvents = 'auto';
    }
  }


  /**
   * 鍵盤快捷鍵
   * 左右箭頭控制輪播
   */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      singleSpiceSwiper.slidePrev();
    } else if (e.key === 'ArrowRight') {
      singleSpiceSwiper.slideNext();
    }
  });


  /**
   * 滾動到區塊時播放動畫 (可選)
   */
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 區塊進入視窗時啟動自動播放
        singleSpiceSwiper.autoplay.start();
      } else {
        // 區塊離開視窗時暫停自動播放 (可選)
        // singleSpiceSwiper.autoplay.stop();
      }
    });
  }, observerOptions);

  const singleSpiceSection = document.querySelector('.single-spice');
  if (singleSpiceSection) {
    observer.observe(singleSpiceSection);
  }


  /**
   * 暴露 swiper 實例到全域 (方便除錯)
   */
  window.singleSpiceSwiper = singleSpiceSwiper;

  console.log('Single Spice Swiper loaded successfully!');
}

/**
 * 自動初始化邏輯：
 * - 如果 DOM 已經載入完成（透過 fetch 動態載入的情況），直接執行
 * - 如果 DOM 尚未載入完成（透過 script 標籤正常載入），等待 DOMContentLoaded
 */
if (document.readyState === 'loading') {
  // DOM 尚未載入完成，等待事件（PHP 環境）
  document.addEventListener('DOMContentLoaded', initSingleSpiceSwiper);
} else {
  // DOM 已載入完成，直接執行（fetch 動態載入環境）
  initSingleSpiceSwiper();
}


/**
 * ========================================
 * 後端整合說明
 * ========================================
 * 
 * 1. 產品資料格式 (JSON):
 * {
 *   "id": 1,
 *   "nameZh": "研磨式白胡椒粉",
 *   "nameEn": "Pure Ground White Pepper",
 *   "image": "/images/products/white-pepper.png",
 *   "category": "white-label",
 *   "description": "產品描述..."
 * }
 * 
 * 2. API 端點建議:
 * GET /api/products/{category} - 獲取特定分類的產品
 * GET /api/products - 獲取所有產品
 * 
 * 3. 動態生成 HTML:
 * 可以使用後端模板引擎 (如 Blade, Jinja2, EJS) 
 * 直接渲染產品卡片，不需要 AJAX
 * 
 * 4. 效能優化:
 * - 使用圖片懶加載 (Swiper 內建支援)
 * - 壓縮產品圖片 (建議 WebP 格式)
 * - 實作快取機制
 */