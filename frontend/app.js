const packages = [
  {
    id: 'morning-glow', name: 'Morning Glow', category: 'tea-break', categoryLabel: 'TEA BREAK',
    description: 'Khởi đầu cuộc họp đầy cảm hứng với trà thơm và bánh ngọt thủ công.', price: 89000, minGuests: 10, maxGuests: 50,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85', badge: 'ĐƯỢC YÊU THÍCH', items: 'Trà đào · Mini croissant · Bánh tart trái cây'
  },
  {
    id: 'garden-afternoon', name: 'Garden Afternoon', category: 'afternoon', categoryLabel: 'TRÀ CHIỀU',
    description: 'Một khoảng nghỉ thanh lịch với bánh xinh, trái cây tươi và trà tuyển chọn.', price: 149000, minGuests: 8, maxGuests: 30,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=85', badge: 'SIGNATURE', items: 'Trà hoa · Macaron · Sandwich · Trái cây'
  },
  {
    id: 'little-celebration', name: 'Little Celebration', category: 'finger-food', categoryLabel: 'FINGER FOOD',
    description: 'Những món nhỏ xinh, chỉn chu cho buổi gặp gỡ và sự kiện thân mật.', price: 189000, minGuests: 15, maxGuests: 100,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85', badge: '', items: 'Canapé mặn · Tart trứng · Nước trái cây'
  },
  {
    id: 'office-gathering', name: 'Office Gathering', category: 'tea-break', categoryLabel: 'TEA BREAK',
    description: 'Thực đơn cân bằng cho hội thảo, khai trương và sự kiện công ty.', price: 119000, minGuests: 20, maxGuests: 150,
    image: 'https://images.unsplash.com/photo-1551024506-0vu8d7b?auto=format&fit=crop&w=900&q=85', badge: 'CHO DOANH NGHIỆP', items: 'Bánh mặn · Bánh ngọt · Cà phê · Trà'
  }
];

const currency = new Intl.NumberFormat('vi-VN');
const grid = document.querySelector('#package-grid');
const searchInput = document.querySelector('#search-input');
const budgetFilter = document.querySelector('#budget-filter');
const guestFilter = document.querySelector('#guest-filter');
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const cartCount = document.querySelector('#cart-count');
const toast = document.querySelector('#toast');
let activeCategory = 'all';
let cartItems = Number(localStorage.getItem('teavento-cart-count') || 0);
let toastTimer;

function renderPackages() {
  const query = searchInput.value.trim().toLocaleLowerCase('vi');
  const maxBudget = budgetFilter.value === 'all' ? Infinity : Number(budgetFilter.value);
  const guestLimit = guestFilter.value;
  const visible = packages.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = `${item.name} ${item.description} ${item.items} ${item.categoryLabel}`.toLocaleLowerCase('vi').includes(query);
    const matchesBudget = item.price <= maxBudget;
    let matchesGuests = true;
    if (guestLimit === '20') matchesGuests = item.minGuests <= 20 && item.maxGuests <= 50;
    if (guestLimit === '50') matchesGuests = item.minGuests <= 50 && item.maxGuests >= 20;
    if (guestLimit === '100') matchesGuests = item.maxGuests >= 50;
    return matchesCategory && matchesQuery && matchesBudget && matchesGuests;
  });

  resultCount.textContent = `${String(visible.length).padStart(2, '0')} gói tiệc`;
  emptyState.hidden = visible.length > 0;
  grid.innerHTML = visible.map((item, index) => `
    <article class="package-card" style="--card-index:${index}">
      <div class="card-image-wrap">
        <img class="card-image" src="${item.image}" alt="${item.name} — gợi ý bàn tiệc TEAVENTO" loading="lazy">
        ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
        <button class="quick-add" type="button" data-add="${item.id}" aria-label="Thêm ${item.name} vào giỏ">+</button>
      </div>
      <div class="card-meta"><span>${item.categoryLabel}</span><span>${item.minGuests}–${item.maxGuests} khách</span></div>
      <h3>${item.name}</h3>
      <p class="card-description">${item.description}</p>
      <p class="card-items">${item.items}</p>
      <div class="card-bottom"><p><strong>${currency.format(item.price)}đ</strong><span> / khách</span></p><button class="card-link" type="button" data-add="${item.id}">Chọn gói <span>↗</span></button></div>
    </article>`).join('');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2600);
}

function addToCart(packageId) {
  const selected = packages.find((item) => item.id === packageId);
  if (!selected) return;
  cartItems += 1;
  localStorage.setItem('teavento-cart-count', String(cartItems));
  cartCount.textContent = String(cartItems);
  showToast(`Đã thêm ${selected.name} vào giỏ tiệc.`);
}

document.querySelectorAll('.tab').forEach((tab) => tab.addEventListener('click', () => {
  document.querySelector('.tab.active')?.classList.remove('active');
  tab.classList.add('active');
  activeCategory = tab.dataset.category;
  renderPackages();
}));
searchInput.addEventListener('input', renderPackages);
budgetFilter.addEventListener('change', renderPackages);
guestFilter.addEventListener('change', renderPackages);
grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-add]');
  if (button) addToCart(button.dataset.add);
});

const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  document.querySelector('.main-nav').classList.toggle('nav-open', !isOpen);
});
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('.main-nav').classList.remove('nav-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

cartCount.textContent = String(cartItems);
renderPackages();
