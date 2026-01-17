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

  // 生成 Grid 卡片 HTML（桌面/平板）
  function createGridCard(product) {
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

  // 生成 Swiper 卡片 HTML（手機）
  function createSwiperCard(product) {
    return `
      <div class="swiper-slide">
        <div class="home-cover-4__card">
          <div class="home-cover-4__card-image">
            <img src="${product.image}" alt="${product.nameZh}">
          </div>
          <div class="home-cover-4__card-info">
            <p class="home-cover-4__card-name">${product.nameZh}</p>
            <p class="home-cover-4__card-name-en">${product.nameEn}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 插入至 Grid（桌面/平板）
  const grid = document.querySelector('.home-cover-4__grid');
  if (grid) {
    grid.innerHTML = products.map(createGridCard).join('');
  }

  // 插入至 Swiper（手機）
  const swiperContent = document.querySelector('.home-cover-4__swiper-content');
  if (swiperContent) {
    swiperContent.innerHTML = products.map(createSwiperCard).join('');
  }

  console.log('✅ Home Cover 4 cards generated successfully!');
})();
