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
      image: '../../images/home/product-1.png',
      subtitle: '味好美的月桂葉，是特選來自土耳其的完整葉片，香氣特別濃郁，用量更節省！',
      content: '被廣泛使用於法式、印度及地中海料理，可用於料理各式肉類、熬湯、蔬菜和醬汁烹調中，亦適合用來燉魚、燉肉尤適合海鮮烹調，含有淡淡的薄荷香氣與木質風味。',
      recipe: '月桂葉馬鈴薯泥'
    },
    {
      id: 2,
      nameZh: '味好美 自磨式黑胡椒粒',
      nameEn: 'Grinder-Black Peppercorn',
      image: '../../images/home/product-2.png',
      subtitle: '具有濃郁洋蔥風味及辛辣味',
      content: '以乾燥洋蔥磨碎呈粉狀，洋蔥粉可代替1/2杯切碎的新鮮洋蔥，若以與新鮮洋蔥搭配使用更具有風味。',
      recipe: '脆烤沙拉三明治佐 TZATZIKI 希臘醬汁'
    },
    {
      id: 3,
      nameZh: '味好美 自磨式純海鹽',
      nameEn: 'Sea Salt Grinder',
      image: '../../images/home/product-3.png',
      subtitle: '100%海鹽研磨而成',
      content: '<ul><li>粉末狀的白胡椒粉，味道溫和，香氣濃郁，十分適合放入醬汁中或是加入奶油口味的料理中來提味</li><li>使用在海鮮上或禽類料理最能帶出食物鮮美的原味</li></ul>',
      recipe: '月桂葉馬鈴薯泥'
    },
    {
      id: 4,
      nameZh: '味好美 自磨式喜馬拉雅玫瑰岩鹽',
      nameEn: 'Himalayan Pink Salt Grinder',
      image: '../../images/home/product-4.png',
      subtitle: '具有濃郁洋蔥風味及辛辣味',
      content: '以乾燥洋蔥磨碎呈粉狀，洋蔥粉可代替1/2杯切碎的新鮮洋蔥，若以與新鮮洋蔥搭配使用更具有風味。',
      recipe: '月桂葉馬鈴薯泥'
    },
    {
      id: 5,
      nameZh: '味好美 粗粒黑胡椒',
      nameEn: 'Coarse Ground Black Pepper',
      image: '../../images/home/product-1.png',
      subtitle: '具有濃郁洋蔥風味及辛辣味',
      content: '以乾燥洋蔥磨碎呈粉狀，洋蔥粉可代替1/2杯切碎的新鮮洋蔥，若以與新鮮洋蔥搭配使用更具有風味。',
      recipe: '月桂葉馬鈴薯泥'
    },
    {
      id: 6,
      nameZh: '味好美 義大利式香料',
      nameEn: 'Italian Seasoning',
      image: '../../images/home/product-2.png',
      subtitle: '具有濃郁洋蔥風味及辛辣味',
      content: '以乾燥洋蔥磨碎呈粉狀，洋蔥粉可代替1/2杯切碎的新鮮洋蔥，若以與新鮮洋蔥搭配使用更具有風味。',
      recipe: '月桂葉馬鈴薯泥'
    },
    {
      id: 7,
      nameZh: '味好美 羅勒葉',
      nameEn: 'Basil Leaves',
      image: '../../images/home/product-3.png',
      subtitle: '具有濃郁洋蔥風味及辛辣味',
      content: '以乾燥洋蔥磨碎呈粉狀，洋蔥粉可代替1/2杯切碎的新鮮洋蔥，若以與新鮮洋蔥搭配使用更具有風味。',
      recipe: '月桂葉馬鈴薯泥'
    },
    {
      id: 8,
      nameZh: '味好美 洋香菜葉',
      nameEn: 'Parsley Flakes',
      image: '../../images/home/product-4.png',
      subtitle: '具有濃郁洋蔥風味及辛辣味',
      content: '',
      recipe: '月桂葉馬鈴薯泥'
    }
  ];

  const container = document.querySelector('.products__list');

  // 生成產品卡片 HTML
  function createProductItem(product) {
    return `
      <div class="products__list-item">
        <div class="products__list-item__image">
          <img src="${product.image}" alt="${product.nameZh}">
        </div>
        <div class="products__list-item__content">
          <div class="products__list-item__text">
            <p class="products__list-item__title-zh">${product.nameZh}</p>
            <p class="products__list-item__title-en">${product.nameEn}</p>
            <p class="products__list-item__subtitle">${product.subtitle}</p>
            <div class="products__list-item__decs">${product.content}</div>
          </div>
          <div class="products__list-item__recipe">
            <img src="../../images/icons/cook.svg" alt="cook-icon" >
            <span>食譜推薦：${product.recipe}</span>
          </div>
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
