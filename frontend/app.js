const packages = [
  { id: 'morning-glow', name: 'Morning Glow', category: 'tea-break', categoryLabel: 'TEA BREAK', description: 'Khởi đầu cuộc họp đầy cảm hứng với trà thơm và bánh ngọt thủ công.', price: 89000, minGuests: 10, maxGuests: 50, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85', badge: 'ĐƯỢC YÊU THÍCH', items: ['Trà đào', 'Mini croissant', 'Bánh tart trái cây'] },
  { id: 'garden-afternoon', name: 'Garden Afternoon', category: 'afternoon', categoryLabel: 'TRÀ CHIỀU', description: 'Một khoảng nghỉ thanh lịch với bánh xinh, trái cây tươi và trà tuyển chọn.', price: 149000, minGuests: 8, maxGuests: 30, image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=85', badge: 'SIGNATURE', items: ['Trà hoa', 'Macaron', 'Sandwich', 'Trái cây'] },
  { id: 'little-celebration', name: 'Little Celebration', category: 'finger-food', categoryLabel: 'FINGER FOOD', description: 'Những món nhỏ xinh, chỉn chu cho buổi gặp gỡ và sự kiện thân mật.', price: 189000, minGuests: 15, maxGuests: 100, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85', badge: '', items: ['Canapé mặn', 'Tart trứng', 'Nước trái cây'] },
  { id: 'office-gathering', name: 'Office Gathering', category: 'tea-break', categoryLabel: 'TEA BREAK', description: 'Thực đơn cân bằng cho hội thảo, khai trương và sự kiện công ty.', price: 119000, minGuests: 20, maxGuests: 150, image: 'https://images.unsplash.com/photo-1551024506-0vu8d7b?auto=format&fit=crop&w=900&q=85', badge: 'CHO DOANH NGHIỆP', items: ['Bánh mặn', 'Bánh ngọt', 'Cà phê', 'Trà'] }
];

const ORDER_KEY = 'teavento-demo-orders-v1';
const CART_KEY = 'teavento-demo-cart-v1';
const SETUP_FEE = 120000;
const MIN_ORDER = 500000;
const currency = new Intl.NumberFormat('vi-VN');
const $ = (selector) => document.querySelector(selector);
const grid = $('#package-grid');
const toast = $('#toast');
let activeCategory = 'all';
let toastTimer;
let cart = readStorage(CART_KEY, []);
let orders = readStorage(ORDER_KEY, []);

function readStorage(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return Array.isArray(value) ? value : fallback; }
  catch { return fallback; }
}
function saveCart() { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
function saveOrders() { localStorage.setItem(ORDER_KEY, JSON.stringify(orders)); }
function money(value) { return `${currency.format(value)}đ`; }
function escapeHtml(value = '') { return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }
function getPackage(id) { return packages.find((item) => item.id === id); }
function cartSubtotal() { return cart.reduce((total, line) => total + getPackage(line.packageId).price * line.guests, 0); }
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2800);
}
function updateCartBadge() { $('#cart-count').textContent = String(cart.reduce((sum, line) => sum + line.guests, 0)); }

function renderPackages() {
  const query = $('#search-input').value.trim().toLocaleLowerCase('vi');
  const maxBudget = $('#budget-filter').value === 'all' ? Infinity : Number($('#budget-filter').value);
  const guestCount = $('#guest-filter').value === 'all' ? null : Number($('#guest-filter').value);
  const visible = packages.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = `${item.name} ${item.description} ${item.items.join(' ')} ${item.categoryLabel}`.toLocaleLowerCase('vi').includes(query);
    const matchesBudget = item.price <= maxBudget;
    const matchesGuests = guestCount === null || (item.minGuests <= guestCount && item.maxGuests >= guestCount);
    return matchesCategory && matchesQuery && matchesBudget && matchesGuests;
  });
  $('#result-count').textContent = `${String(visible.length).padStart(2, '0')} gói tiệc`;
  $('#empty-state').hidden = visible.length > 0;
  grid.innerHTML = visible.map((item, index) => `<article class="package-card" style="--card-index:${index}">
    <div class="card-image-wrap"><img class="card-image" src="${item.image}" alt="${escapeHtml(item.name)} — bàn tiệc TEAVENTO" loading="lazy">${item.badge ? `<span class="card-badge">${escapeHtml(item.badge)}</span>` : ''}<button class="quick-add" type="button" data-detail="${item.id}" aria-label="Xem chi tiết ${escapeHtml(item.name)}">+</button></div>
    <div class="card-meta"><span>${item.categoryLabel}</span><span>${item.minGuests}–${item.maxGuests} khách</span></div><h3>${escapeHtml(item.name)}</h3><p class="card-description">${escapeHtml(item.description)}</p><p class="card-items">${item.items.map(escapeHtml).join(' · ')}</p>
    <div class="card-bottom"><p><strong>${money(item.price)}</strong><span> / khách</span></p><button class="card-link" type="button" data-detail="${item.id}">Chi tiết & chọn gói <span>↗</span></button></div></article>`).join('');
}

function showPackageDetail(packageId) {
  const item = getPackage(packageId);
  if (!item) return;
  $('#package-detail').innerHTML = `<div class="detail-layout"><img src="${item.image}" alt="${escapeHtml(item.name)}"><div class="detail-copy"><p class="eyebrow"><span></span> ${item.categoryLabel}</p><h2>${escapeHtml(item.name)}</h2><p>${escapeHtml(item.description)}</p><p><strong>${money(item.price)}</strong> / khách · Nhận từ ${item.minGuests} đến ${item.maxGuests} khách</p><h3>Thực đơn gồm</h3><ul>${item.items.map((dish) => `<li>${escapeHtml(dish)}</li>`).join('')}</ul><label>Số lượng khách <input id="detail-guests" type="number" min="${item.minGuests}" max="${item.maxGuests}" value="${item.minGuests}" step="1"></label><p class="detail-estimate">Tạm tính gói: <strong id="detail-total">${money(item.price * item.minGuests)}</strong></p><button class="button button-dark" type="button" id="detail-add" data-package="${item.id}">Thêm vào giỏ tiệc <span>+</span></button></div></div>`;
  const dialog = $('#package-dialog');
  if (!dialog.open) dialog.showModal();
  const guestsInput = $('#detail-guests');
  guestsInput.addEventListener('input', () => { const count = Math.max(0, Number(guestsInput.value) || 0); $('#detail-total').textContent = money(item.price * count); });
  $('#detail-add').addEventListener('click', () => {
    const guests = Number(guestsInput.value);
    if (!Number.isInteger(guests) || guests < item.minGuests || guests > item.maxGuests) { showToast(`Gói này nhận từ ${item.minGuests} đến ${item.maxGuests} khách.`); return; }
    cart.push({ lineId: `${item.id}-${Date.now()}`, packageId: item.id, guests });
    saveCart(); renderCart(); dialog.close(); showToast(`Đã thêm ${item.name} (${guests} khách) vào giỏ.`);
  });
}

function renderCart() {
  const linesContainer = $('#cart-lines');
  $('#cart-lines-label').textContent = `${cart.length} gói`;
  $('#cart-empty').hidden = cart.length > 0;
  linesContainer.innerHTML = cart.map((line) => {
    const item = getPackage(line.packageId);
    if (!item) return '';
    return `<article class="cart-line"><img src="${item.image}" alt=""><div class="cart-line-info"><strong>${escapeHtml(item.name)}</strong><small>${money(item.price)} / khách · ${item.minGuests}–${item.maxGuests} khách</small><button type="button" class="remove-line" data-remove="${escapeHtml(line.lineId)}">Xóa gói</button></div><label class="guest-stepper">Số khách<input data-guests="${escapeHtml(line.lineId)}" type="number" min="${item.minGuests}" max="${item.maxGuests}" value="${line.guests}"></label><strong class="line-total">${money(item.price * line.guests)}</strong></article>`;
  }).join('');
  const subtotal = cartSubtotal();
  const setup = cart.length ? SETUP_FEE : 0;
  $('#cart-subtotal').textContent = money(subtotal);
  $('#cart-setup').textContent = money(setup);
  $('#cart-total').textContent = money(subtotal + setup);
  $('#go-checkout').classList.toggle('is-disabled', cart.length === 0 || subtotal + setup < MIN_ORDER);
  $('#go-checkout').setAttribute('aria-disabled', String(cart.length === 0 || subtotal + setup < MIN_ORDER));
  updateCartBadge();
}

function getStatusLabel(status) { return ({ pending: 'Chờ xác nhận', confirmed: 'Đã xác nhận', preparing: 'Đang chuẩn bị & giao tiệc', completed: 'Hoàn thành', cancelled: 'Đã hủy' })[status] || status; }
function getOrderByCode(code) { return orders.find((order) => order.code.toLowerCase() === code.trim().toLowerCase()); }
function renderTracking(order) {
  const target = $('#tracking-result');
  if (!order) { target.innerHTML = '<p class="lookup-error">Không tìm thấy mã đơn. Hãy kiểm tra mã đơn hoặc tạo đơn demo trước.</p>'; return; }
  const steps = ['pending', 'confirmed', 'preparing', 'completed'];
  const currentIndex = steps.indexOf(order.status);
  target.innerHTML = `<article class="tracking-card"><div class="tracking-top"><div><span>MÃ ĐƠN</span><strong>${escapeHtml(order.code)}</strong></div><span class="status-pill status-${order.status}">${getStatusLabel(order.status)}</span></div><div class="tracking-steps">${steps.map((status, index) => `<div class="tracking-step ${index <= currentIndex && order.status !== 'cancelled' ? 'step-done' : ''}"><span>${index < currentIndex ? '✓' : index + 1}</span><small>${getStatusLabel(status)}</small></div>`).join('')}</div><div class="tracking-details"><p><strong>Khách hàng:</strong> ${escapeHtml(order.customerName)}</p><p><strong>Ngày tiệc:</strong> ${escapeHtml(order.eventDate)} · ${escapeHtml(order.setupTime)}</p><p><strong>Địa điểm:</strong> ${escapeHtml(order.address)}</p><p><strong>Tổng dự kiến:</strong> ${money(order.total)} · <strong>Thanh toán lúc tạo:</strong> ${money(order.amountDue)}</p></div></article>`;
}

function renderAdmin() {
  const body = $('#admin-orders');
  const doneRevenue = orders.filter((order) => order.status === 'completed').reduce((total, order) => total + order.total, 0);
  $('#metric-orders').textContent = String(orders.length);
  $('#metric-pending').textContent = String(orders.filter((order) => order.status === 'pending').length);
  $('#metric-revenue').textContent = money(doneRevenue);
  $('#admin-empty').hidden = orders.length > 0;
  body.innerHTML = [...orders].reverse().map((order) => `<tr><td><strong>${escapeHtml(order.code)}</strong></td><td>${escapeHtml(order.customerName)}<small>${escapeHtml(order.phone)}</small></td><td>${escapeHtml(order.eventDate)}<small>${escapeHtml(order.setupTime)}</small></td><td>${money(order.total)}</td><td><span class="status-pill status-${order.status}">${getStatusLabel(order.status)}</span></td><td><select class="admin-status" data-order="${escapeHtml(order.code)}" aria-label="Cập nhật trạng thái ${escapeHtml(order.code)}"><option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Chờ xác nhận</option><option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>Đã xác nhận</option><option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Đang chuẩn bị</option><option value="completed" ${order.status === 'completed' ? 'selected' : ''}>Hoàn thành</option><option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Đã hủy</option></select></td></tr>`).join('');
}

$('#package-grid').addEventListener('click', (event) => { const button = event.target.closest('[data-detail]'); if (button) showPackageDetail(button.dataset.detail); });
$('#package-dialog').querySelector('.dialog-close').addEventListener('click', () => $('#package-dialog').close());
$('#package-dialog').addEventListener('click', (event) => { if (event.target === $('#package-dialog')) $('#package-dialog').close(); });
document.querySelectorAll('.tab').forEach((tab) => tab.addEventListener('click', () => { document.querySelector('.tab.active')?.classList.remove('active'); tab.classList.add('active'); activeCategory = tab.dataset.category; renderPackages(); }));
$('#search-input').addEventListener('input', renderPackages);
$('#budget-filter').addEventListener('change', renderPackages);
$('#guest-filter').addEventListener('change', renderPackages);
$('#cart-lines').addEventListener('click', (event) => { const button = event.target.closest('[data-remove]'); if (button) { cart = cart.filter((line) => line.lineId !== button.dataset.remove); saveCart(); renderCart(); } });
$('#cart-lines').addEventListener('change', (event) => { const input = event.target.closest('[data-guests]'); if (!input) return; const line = cart.find((entry) => entry.lineId === input.dataset.guests); const item = line && getPackage(line.packageId); const guests = Number(input.value); if (!line || !Number.isInteger(guests) || guests < item.minGuests || guests > item.maxGuests) { showToast(`Số khách phải từ ${item.minGuests} đến ${item.maxGuests}.`); renderCart(); return; } line.guests = guests; saveCart(); renderCart(); });

const minEventDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
$('#event-date').min = `${minEventDate.getFullYear()}-${String(minEventDate.getMonth() + 1).padStart(2, '0')}-${String(minEventDate.getDate()).padStart(2, '0')}`;
$('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!cart.length) { showToast('Hãy chọn ít nhất một gói tiệc trước khi đặt lịch.'); location.hash = '#packages'; return; }
  const total = cartSubtotal() + SETUP_FEE;
  if (total < MIN_ORDER) { showToast(`Giá trị đơn tối thiểu là ${money(MIN_ORDER)}.`); location.hash = '#cart'; return; }
  const form = new FormData(event.currentTarget);
  const eventDate = String(form.get('eventDate'));
  const dateAtMidnight = new Date(`${eventDate}T00:00:00`);
  const tomorrow = new Date(); tomorrow.setHours(0, 0, 0, 0); tomorrow.setDate(tomorrow.getDate() + 1);
  if (dateAtMidnight < tomorrow) { showToast('Ngày tổ chức cần cách ngày đặt ít nhất 24 giờ.'); return; }
  const plan = String(form.get('paymentPlan'));
  const order = { code: `TV-${Math.floor(100000 + Math.random() * 900000)}`, customerName: String(form.get('customerName')).trim(), phone: String(form.get('phone')).trim(), email: String(form.get('email')).trim(), eventDate, setupTime: String(form.get('setupTime')), address: String(form.get('address')).trim(), notes: String(form.get('notes')).trim(), paymentPlan: plan, total, amountDue: plan === 'deposit' ? Math.ceil(total / 2) : total, status: 'pending', createdAt: new Date().toISOString(), items: cart.map((line) => ({ ...line })) };
  orders.push(order); saveOrders(); cart = []; saveCart(); renderCart(); renderAdmin(); event.currentTarget.reset(); $('#event-date').min = `${minEventDate.getFullYear()}-${String(minEventDate.getMonth() + 1).padStart(2, '0')}-${String(minEventDate.getDate()).padStart(2, '0')}`;
  $('#tracking-code').value = order.code; renderTracking(order); showToast(`Đã tạo đơn demo ${order.code}.`); location.hash = '#tracking';
});
$('#tracking-form').addEventListener('submit', (event) => { event.preventDefault(); renderTracking(getOrderByCode(new FormData(event.currentTarget).get('trackingCode'))); });
$('#admin-orders').addEventListener('change', (event) => { const select = event.target.closest('[data-order]'); if (!select) return; const order = getOrderByCode(select.dataset.order); if (!order) return; order.status = select.value; saveOrders(); renderAdmin(); showToast(`Đã cập nhật ${order.code}: ${getStatusLabel(order.status)}.`); if ($('#tracking-code').value.trim().toLowerCase() === order.code.toLowerCase()) renderTracking(order); });
$('#refresh-admin').addEventListener('click', renderAdmin);
const menuToggle = $('.menu-toggle');
menuToggle.addEventListener('click', () => { const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!isOpen)); $('.main-nav').classList.toggle('nav-open', !isOpen); });
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => { $('.main-nav').classList.remove('nav-open'); menuToggle.setAttribute('aria-expanded', 'false'); }));

renderPackages(); renderCart(); renderAdmin();
