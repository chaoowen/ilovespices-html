/**
 * ========================================
 * Home Cover 4 - 熱門商品卡片生成
 * ========================================
 */

(function () {
  // 熱門商品資料
  const products = [
    {
      image: '../images/home/hot-product-1.jpg',
      nameZh: '味好美 自磨式喜馬拉雅玫瑰岩鹽',
      nameEn: 'Himalayan Pink Salt Grinder'
    },
    {
      image: '../images/home/hot-product-2.jpg',
      nameZh: '味好美 自磨式黑胡椒粒',
      nameEn: 'Grinder-Black Peppercorn'
    },
    {
      image: '../images/home/hot-product-3.jpg',
      nameZh: '味好美 自磨式純海鹽',
      nameEn: 'Sea Salt Grinder'
    },
    {
      image: '../images/home/hot-product-4.jpg',
      nameZh: '味好美 自磨式喜馬拉雅玫瑰岩鹽',
      nameEn: 'Himalayan Pink Salt Grinder'
    }
  ];

  // 生成卡片 HTML
  function createCard(product) {
    return `
      <div class="home-cover-4__card">
        <div class="home-cover-4__card-image">
          <img src="${product.image}" alt="${product.nameZh}">
        </div>
        <div class="home-cover-4__card-info">
          <p class="home-cover-4__card-name">${product.nameZh}</p>
          <p class="home-cover-4__card-name-en">${product.nameEn}</p>
        </div>
      </div>
    `;
  }

  // 插入至 Grid
  const grid = document.querySelector('.home-cover-4__grid');
  if (grid) {
    grid.innerHTML = products.map(createCard).join('');
  }

  console.log('✅ Home Cover 4 cards generated successfully!');
})();
