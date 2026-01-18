/**
 * ========================================
 * Swiper 初始化工具
 * 全站共用的 Swiper 管理工具
 * ========================================
 */

window.SwiperInit = (function () {
  // 儲存所有 swiper 實例
  const instances = {};

  // 儲存響應式 swiper 的設定
  const responsiveConfigs = {};

  /**
   * 建立一般 Swiper
   * @param {string} name - swiper 名稱（用於識別）
   * @param {string} selector - swiper 容器選擇器
   * @param {object} options - swiper 設定
   * @returns {Swiper|null} swiper 實例
   */
  function create(name, selector, options = {}) {
    const container = document.querySelector(selector);
    if (!container) {
      console.warn(`[SwiperInit] Container not found: ${selector}`);
      return null;
    }

    if (typeof Swiper === 'undefined') {
      console.error('[SwiperInit] Swiper library not loaded');
      return null;
    }

    // 如果已存在同名實例，先銷毀
    if (instances[name]) {
      destroy(name);
    }

    // 建立新實例
    instances[name] = new Swiper(selector, options);
    console.log(`✅ Swiper "${name}" initialized`);

    return instances[name];
  }

  /**
   * 建立響應式 Swiper
   * 根據螢幕寬度自動啟用/銷毀
   * @param {string} name - swiper 名稱
   * @param {string} selector - swiper 容器選擇器
   * @param {object} options - swiper 設定
   * @param {number} maxWidth - 最大寬度（超過此寬度會銷毀 swiper）
   */
  function createResponsive(name, selector, options = {}, maxWidth = 1024) {
    // 儲存設定
    responsiveConfigs[name] = { selector, options, maxWidth };

    // 初始化檢查
    function checkAndInit() {
      const container = document.querySelector(selector);
      if (!container) return;

      const shouldEnable = window.innerWidth <= maxWidth;

      if (shouldEnable && !instances[name]) {
        // 啟用 swiper
        instances[name] = new Swiper(selector, options);
        console.log(`✅ Swiper "${name}" initialized (responsive)`);
      } else if (!shouldEnable && instances[name]) {
        // 銷毀 swiper
        instances[name].destroy(true, true);
        instances[name] = null;
        delete instances[name];
        console.log(`✅ Swiper "${name}" destroyed (screen > ${maxWidth}px)`);
      }
    }

    // 初始檢查
    checkAndInit();

    // 監聽視窗大小變化（使用 debounce 優化效能）
    let resizeTimeout;
    const resizeHandler = function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkAndInit, 150);
    };

    // 移除舊的監聽器（如果有）
    if (responsiveConfigs[name].resizeHandler) {
      window.removeEventListener('resize', responsiveConfigs[name].resizeHandler);
    }

    // 儲存並添加新的監聽器
    responsiveConfigs[name].resizeHandler = resizeHandler;
    window.addEventListener('resize', resizeHandler);
  }

  /**
   * 取得 swiper 實例
   * @param {string} name - swiper 名稱
   * @returns {Swiper|null}
   */
  function get(name) {
    return instances[name] || null;
  }

  /**
   * 取得所有 swiper 實例
   * @returns {object}
   */
  function getAll() {
    return { ...instances };
  }

  /**
   * 銷毀指定的 swiper
   * @param {string} name - swiper 名稱
   */
  function destroy(name) {
    if (instances[name]) {
      instances[name].destroy(true, true);
      delete instances[name];
      console.log(`✅ Swiper "${name}" destroyed`);
    }

    // 移除響應式監聽器
    if (responsiveConfigs[name] && responsiveConfigs[name].resizeHandler) {
      window.removeEventListener('resize', responsiveConfigs[name].resizeHandler);
      delete responsiveConfigs[name];
    }
  }

  /**
   * 銷毀所有 swiper
   */
  function destroyAll() {
    Object.keys(instances).forEach(name => destroy(name));
  }

  // 公開 API
  return {
    create,
    createResponsive,
    get,
    getAll,
    destroy,
    destroyAll
  };
})();
