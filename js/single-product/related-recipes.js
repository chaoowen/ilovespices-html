/**
 * ========================================
 * Related Recipes - 相關食譜卡片生成
 * ========================================
 */

(function () {
  // 食譜資料
  const recipes = [
    {
      image: '../images/home/recipe-1.jpg',
      name: '西南方風味烤雞與香甜馬鈴薯',
      time: '1 小時 30 分鐘',
    },
    {
      image: '../images/home/recipe-2.jpg',
      name: '奶油蘑菇義大利麵',
      time: '1 小時',
    },
    {
      image: '../images/home/recipe-3.jpg',
      name: '台式蘿蔔糕',
      time: '30 分鐘',
    },
    {
      image: '../images/home/recipe-1.jpg',
      name: '香煎檸檬雞排',
      time: '45 分鐘',
    }
  ];

  // 生成食譜卡片 HTML
  function createRecipeCard(recipe) {
    return `
      <div class="swiper-slide">
        <a href="#" class="recipe-card">
          <div class="recipe-card__image">
            <img src="${recipe.image}" alt="${recipe.name}">
          </div>
          <div class="recipe-card__info">
            <h3 class="recipe-card__name">${recipe.name}</h3>
            <div class="recipe-card__time">
              <img src="../images/icons/time.svg" alt="Time">
              <span>調理時間：${recipe.time}</span>
            </div>
          </div>
        </a>
      </div>
    `;
  }

  // 插入至 swiper-wrapper
  const swiperWrapper = document.querySelector('.recipes-swiper .swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.innerHTML = recipes.map(createRecipeCard).join('');
    console.log('✅ Related recipe cards generated successfully!');
  }
})();
