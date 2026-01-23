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

  // 生成產品卡片 HTML
  function createProductItem(product) {
    return `
      <div class="products__list-item">
        <a href="./single-product.html" class="products__list-item__image">
          <img src="${product.image}" alt="${product.nameZh}">
        </a>
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

  console.log('✅ Product list initialized');
})();
