/**
 * ========================================
 * Home Cover 3 - 食物卡片生成
 * ========================================
 */

(function () {
  // 卡片資料
  const cards = [
    {
      image: '../images/home/food-1.png',
      text: '要做大菜（如烤雞）但怕失敗，怕招待朋友沒面子。',
      btnText: '零失敗大餐攻略',
      btnLink: '#'
    },
    {
      image: '../images/home/food-2.png',
      text: '在戶外做露營燒烤時，怕肉沒味道。',
      btnText: '查看露營必備香料',
      btnLink: '#'
    },
    {
      image: '../images/home/food-3.png',
      text: '下班很累、不想吃煮麵，只想趕快吃完趕緊睡覺迎接天亮。',
      btnText: '3分鐘快速上菜',
      btnLink: '#'
    },
    {
      image: '../images/home/food-4.png',
      text: '水煮餐、雞胸肉怎麼都吃，覺得人生無味。',
      btnText: '拯救無聊水煮餐',
      btnLink: '#'
    }
  ];

  // 生成 Grid 卡片 HTML（桌面/平板）
  function createGridCard(card) {
    return `
      <div class="home-cover-3__card">
        <img class="home-cover-3__card-bg" src="${card.image}" alt="${card.btnText}">
        <p class="home-cover-3__card-text">${card.text}</p>
        <a href="${card.btnLink}" class="home-cover-3__card-btn">${card.btnText}</a>
      </div>
    `;
  }

  // 生成 Swiper 卡片 HTML（手機）
  function createSwiperCard(card) {
    return `
      <div class="swiper-slide">
        <div class="home-cover-3__card">
          <img class="home-cover-3__card-bg" src="${card.image}" alt="${card.btnText}">
          <p class="home-cover-3__card-text">${card.text}</p>
          <a href="${card.btnLink}" class="home-cover-3__card-btn">${card.btnText}</a>
        </div>
      </div>
    `;
  }

  // 插入至 Grid（桌面/平板）
  const grid = document.querySelector('.home-cover-3__grid');
  if (grid) {
    grid.innerHTML = cards.map(createGridCard).join('');
  }

  // 插入至 Swiper（手機）
  const swiperContent = document.querySelector('.home-cover-3__swiper-content');
  if (swiperContent) {
    swiperContent.innerHTML = cards.map(createSwiperCard).join('');
  }

  console.log('✅ Home Cover 3 cards generated successfully!');
})();
