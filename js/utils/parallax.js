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
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      const container = getContainer(el);

      if (!container) return;

      // 取得容器的位置資訊
      const rect = container.getBoundingClientRect();

      // 只在元素可見時才計算
      if (rect.bottom < 0 || rect.top > windowHeight) return;

      const containerTop = rect.top + scrollY;
      const containerHeight = container.offsetHeight;

      // 計算視差偏移量
      // 當頁面滾動時，圖片以較慢的速度移動
      const offset = (scrollY - containerTop + windowHeight * 0.5) * speed;

      // 限制偏移範圍，避免圖片移動太多露出空白
      const maxOffset = containerHeight * 0.3;
      const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, offset));

      // 套用 transform
      el.style.transform = `translateY(${clampedOffset}px)`;
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
