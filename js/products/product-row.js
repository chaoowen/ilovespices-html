(function () {
  const productsData = [
    {
      id: 1,
      name: '單方香辛料',
      count: 10,
      img: '../../images/home/product-1.png',
      link: '#',
      isActive: true // 設定哪一個是預設選中
    },
    {
      id: 2,
      name: '複方香辛料',
      count: 4,
      img: '../../images/home/product-2.png',
      link: '#',
      isActive: false
    },
    {
      id: 3,
      name: '自磨香辛料',
      count: 5,
      img: '../../images/home/product-3.png',
      link: '#',
      isActive: false
    },
    {
      id: 4,
      name: '勞倫斯特調',
      count: 6,
      img: '../../images/home/product-4.png',
      link: '#',
      isActive: false
    },
    {
      id: 5,
      name: '玻璃瓶裝',
      count: 16,
      img: '../../images/home/product-5.png',
      link: '#',
      isActive: false
    },
    {
      id: 6,
      name: '調理包',
      count: 5,
      img: '../../images/home/product-1.png',
      link: '#',
      isActive: false
    }
  ];

  // 生成 Grid 卡片 HTML（桌面版）
  function createGridCard(product) {
    const activeClass = product.isActive ? 'products__item--active' : '';
    return `
      <li class="products__item ${activeClass}">
        <a href="${product.link}" class="products__link">
          <div class="products__circle">
            <img src="${product.img}" alt="${product.name}" class="products__img">
          </div>
          <span class="products__name">${product.name} ( ${product.count} )</span>
        </a>
      </li>
    `;
  }

  // 生成 Swiper 卡片 HTML（平板/手機版）
  function createSwiperCard(product) {
    const activeClass = product.isActive ? 'products__item--active' : '';
    return `
      <li class="swiper-slide products__item ${activeClass}">
        <a href="${product.link}" class="products__link">
          <div class="products__circle">
            <img src="${product.img}" alt="${product.name}" class="products__img">
          </div>
          <span class="products__name">${product.name} ( ${product.count} )</span>
        </a>
      </li>
    `;
  }

  // 插入至 Grid（桌面版）
  const gridContainer = document.querySelector('.products__row--grid');
  if (gridContainer) {
    gridContainer.innerHTML = productsData.map(createGridCard).join('');
  }

  // 插入至 Swiper（平板/手機版）
  const swiperContainer = document.querySelector('.products__swiper-content');
  if (swiperContainer) {
    swiperContainer.innerHTML = productsData.map(createSwiperCard).join('');
  }

  console.log('✅ Product row cards generated successfully!');
})();