/**
 * ========================================
 * 產品卡片生成
 * ========================================
 */

(function () {
  // 產品資料（五組相同資料）
  const products = [
    {
      image: '../../images/home/product-1.png',
      nameZh: '研磨式白胡椒粉',
      nameEn: 'Pure Ground White Pepper'
    },
    {
      image: '../../images/home/product-2.png',
      nameZh: '洋蔥粉',
      nameEn: 'Onion Powder'
    },
    {
      image: '../../images/home/product-3.png',
      nameZh: '月桂葉',
      nameEn: 'Bay Leaves'
    },
    {
      image: '../../images/home/product-4.png',
      nameZh: '羅勒葉',
      nameEn: 'Basil Leaves'
    },
    {
      image: '../../images/home/product-5.png',
      nameZh: '香菜葉',
      nameEn: 'Cilantro Leaves'
    },
    {
      image: '../../images/home/product-1.png',
      nameZh: '研磨式白胡椒粉',
      nameEn: 'Pure Ground White Pepper'
    },
    {
      image: '../../images/home/product-1.png',
      nameZh: '研磨式白胡椒粉',
      nameEn: 'Pure Ground White Pepper'
    },
  ];

  // 生成 Product Card HTML
  function createProductCard(product) {
    return `
      <div class="swiper-slide">
        <a href="./single-product.html" class="product-card">
          <div class="product-card__image">
            <img src="${product.image}" alt="${product.nameZh}">
          </div>
          <div class="product-card__info">
            <p class="product-card__name-zh">${product.nameZh}</p>
            <p class="product-card__name-en">${product.nameEn}</p>
          </div>
        </a>
      </div>
    `;
  }

  // 插入至 swiper-wrapper
  const swiperWrapper = document.querySelector('.single-spice-swiper .swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.innerHTML = products.map(createProductCard).join('');
    console.log('✅ Product cards generated successfully!');
  }
})();
