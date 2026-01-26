/**
 * ========================================
 * Parallax Effect Utility
 * 視差滾動效果工具
 * ========================================
 *
 * 使用方式：
 * <img class="xxx__bg" src="..." data-parallax="0.3">
 *
 * data-parallax 值說明：
 * - 0.1 ~ 0.5 之間，數字越大視差效果越明顯
 * - 建議值：0.3
 *
 * 可選 data 屬性：
 * - data-parallax-container: 指定父容器選擇器（預設自動偵測）
 */

const Parallax = (function() {
  // 儲存所有視差元素
  let elements = [];
  let ticking = false;

  /**
   * 初始化視差效果
   */
  function init() {
    // 找到所有有 data-parallax 屬性的元素
    elements = Array.from(document.querySelectorAll('[data-parallax]'));

    if (elements.length === 0) return;

    // 綁定滾動事件
    window.addEventListener('scroll', onScroll, { passive: true });

    // 初始執行一次
    updateParallax();

    console.log(`✅ Parallax initialized for ${elements.length} element(s)`);
  }

  /**
   * 滾動事件處理（使用 requestAnimationFrame 優化效能）
   */
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  }

  /**
   * 取得元素的視差容器
   */
  function getContainer(el) {
    // 優先使用指定的容器
    const containerSelector = el.dataset.parallaxContainer;
    if (containerSelector) {
      return el.closest(containerSelector);
    }

    // 自動偵測：找最近的有 overflow:hidden 的父元素
    let parent = el.parentElement;
    while (parent) {
      const style = window.getComputedStyle(parent);
      if (style.overflow === 'hidden' || style.overflowY === 'hidden') {
        return parent;
      }
      parent = parent.parentElement;
    }

    // 如果都沒有，使用直接父元素
    return el.parentElement;
  }

  /**
   * 更新所有視差元素的位置
   */
  function updateParallax() {
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      const container = getContainer(el);

      if (!container) return;

      // 取得容器的位置資訊
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;

      // 只在元素可見時才計算
      if (rect.bottom < 0 || rect.top > windowHeight) return;

      // 計算滾動進度：0 = 剛從底部進入, 1 = 完全離開頂部
      const progress = (windowHeight - rect.top) / (windowHeight + containerHeight);

      // 將進度映射為偏移量（以 0.5 為中心點）
      const offset = (progress - 0.5) * containerHeight * speed * 2;

      // 套用 transform
      el.style.transform = `translateY(${offset}px)`;
    });
  }

  /**
   * 銷毀視差效果（如需要時使用）
   */
  function destroy() {
    window.removeEventListener('scroll', onScroll);
    elements.forEach(el => {
      el.style.transform = '';
    });
    elements = [];
  }

  // 公開方法
  return {
    init,
    destroy
  };
})();

// 自動初始化
Parallax.init();
