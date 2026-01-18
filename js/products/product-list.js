/**
 * ========================================
 * Product List Logic
 * ========================================
 */

(function () {
  // 模擬產品資料
  const products = [
    {
      id: 1,
      nameZh: '味好美 自磨式七彩胡椒粒',
      nameEn: 'Grinder-Mixed Peppercorn',
      image: '../../images/home/product-1.png'
    },
    {
      id: 2,
      nameZh: '味好美 自磨式黑胡椒粒',
      nameEn: 'Grinder-Black Peppercorn',
      image: '../../images/home/product-2.png'
    },
    {
      id: 3,
      nameZh: '味好美 自磨式純海鹽',
      nameEn: 'Sea Salt Grinder',
      image: '../../images/home/product-3.png'
    },
    {
      id: 4,
      nameZh: '味好美 自磨式喜馬拉雅玫瑰岩鹽',
      nameEn: 'Himalayan Pink Salt Grinder',
      image: '../../images/home/product-4.png'
    },
    {
      id: 5,
      nameZh: '味好美 粗粒黑胡椒',
      nameEn: 'Coarse Ground Black Pepper',
      image: '../../images/home/product-1.png'
    },
    {
      id: 6,
      nameZh: '味好美 義大利式香料',
      nameEn: 'Italian Seasoning',
      image: '../../images/home/product-2.png'
    },
    {
      id: 7,
      nameZh: '味好美 羅勒葉',
      nameEn: 'Basil Leaves',
      image: '../../images/home/product-3.png'
    },
    {
      id: 8,
      nameZh: '味好美 洋香菜葉',
      nameEn: 'Parsley Flakes',
      image: '../../images/home/product-4.png'
    }
  ];

  const container = document.querySelector('.products__list');
  const loadMoreBtn = document.querySelector('.btn'); // 假設載入更多按鈕有 .btn class

  // 生成產品卡片 HTML
  function createProductItem(product) {
    return `
      <div class="products__list-item">
        <div class="products__list-item__image">
          <img src="${product.image}" alt="${product.nameZh}">
        </div>
        <div class="products__list-item__content">
          <p class="products__list-item__title-zh">${product.nameZh}</p>
          <p class="products__list-item__title-en">${product.nameEn}</p>
        </div>
      </div>
    `;
  }

  // 渲染列表
  function renderProducts() {
    if (!container) return;

    // 簡單渲染所有產品
    container.innerHTML = `
      ${products.map(createProductItem).join('')}
    `;
  }

  // 初始化
  renderProducts();

  // 簡單的載入更多互動（示範用）
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      // 這裡可以實作載入更多邏輯，目前僅顯示提示
      loadMoreBtn.textContent = '沒有更多產品了';
      loadMoreBtn.style.opacity = '0.5';
      loadMoreBtn.style.pointerEvents = 'none';
    });
  }

  console.log('✅ Product list initialized');
})();
