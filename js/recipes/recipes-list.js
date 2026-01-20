/**
 * ========================================
 * Recipes Page Logic
 * ========================================
 */

(function () {
  // 食譜資料（與首頁相同）
  const recipes = [
    {
      id: 1,
      title: '西南方風味烤雞與香甜馬鈴薯',
      time: '1 小時 30 分鐘',
      image: '../images/home/recipe-1.jpg'
    },
    {
      id: 2,
      title: '奶油蘑菇義大利麵',
      time: '1 小時',
      image: '../images/home/recipe-2.jpg'
    },
    {
      id: 3,
      title: '台式蘿蔔糕',
      time: '30 分鐘',
      image: '../images/home/recipe-3.jpg'
    },
    {
      id: 4,
      title: '香煎檸檬雞排',
      time: '45 分鐘',
      image: '../images/home/recipe-1.jpg'
    },
    {
      id: 5,
      title: '紅酒燉牛肉',
      time: '2 小時',
      image: '../images/home/recipe-2.jpg'
    },
    {
      id: 6,
      title: '海鮮燉飯',
      time: '50 分鐘',
      image: '../images/home/recipe-3.jpg'
    },
    {
      id: 7,
      title: '比佛利山莊豬肉',
      time: '45 分鐘',
      image: '../images/home/recipe-1.jpg'
    },
    {
      id: 8,
      title: '香烤鴨肉',
      time: '2 小時',
      image: '../images/home/recipe-2.jpg'
    },
    {
      id: 9,
      title: '佛跳牆',
      time: '50 分鐘',
      image: '../images/home/recipe-3.jpg'
    }
  ];

  const container = document.querySelector('.recipes-list__container');

  // 生成卡片 HTML（與首頁相同結構）
  function createRecipeCard(recipe) {
    return `
      <a href="#" class="recipe-card">
        <div class="recipe-card__image">
          <img src="${recipe.image}" alt="${recipe.title}">
        </div>
        <div class="recipe-card__info">
          <h3 class="recipe-card__name">${recipe.title}</h3>
          <div class="recipe-card__time">
            <img class="recipe-card__time-icon" src="../images/icons/time.svg" alt="Time">
            <span>調理時間：${recipe.time}</span>
          </div>
        </div>
      </a>
    `;
  }

  // 渲染列表
  function renderRecipes() {
    if (!container) return;

    container.innerHTML = recipes.map(createRecipeCard).join('');

    // 動畫效果
    const cards = container.querySelectorAll('.recipe-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  // 初始化
  renderRecipes();

  console.log('✅ Recipes logic initialized');
})();
