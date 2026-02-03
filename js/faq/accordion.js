// FAQ Accordion & Filter Functionality

(function() {
  // DOM Elements
  const filterBtns = document.querySelectorAll('.faq__filter-btn');
  const faqItems = document.querySelectorAll('.faq__item');
  const loadMoreBtn = document.querySelector('.faq__load-btn');

  // Accordion Toggle
  faqItems.forEach(item => {
    const header = item.querySelector('.faq__item-header');

    header.addEventListener('click', () => {
      // Close other items (optional - remove this block for multiple open items)
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Filter Functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Get selected category
      const category = btn.dataset.category;

      // Filter items
      faqItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
          item.classList.remove('active'); // Close hidden items
        }
      });
    });
  });

  // Load More Button (placeholder functionality)
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      // This would typically load more FAQ items via AJAX
      // For now, we'll just show an alert or hide the button
      loadMoreBtn.textContent = '已載入全部';
      loadMoreBtn.disabled = true;
      loadMoreBtn.style.opacity = '0.5';
      loadMoreBtn.style.cursor = 'default';
    });
  }
})();
