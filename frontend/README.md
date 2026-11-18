# TEAVENTO Frontend Prototype

Prototype bước A: landing page và danh mục gói tiệc responsive bằng HTML, CSS và JavaScript thuần. Gói tiệc hiện là dữ liệu demo trong `app.js`; giỏ hàng chỉ lưu số lượng demo trong trình duyệt (localStorage), chưa tạo đơn thật và chưa kết nối API.

## Chạy thử

Mở `index.html` trong trình duyệt hoặc phục vụ thư mục này bằng một máy chủ tĩnh:

```bash
cd frontend
python -m http.server 8000
```

Sau đó mở http://localhost:8000.

## Đã có

- Trang chủ TEAVENTO và điều hướng đến danh mục gói tiệc.
- Thẻ gói tiệc, thông tin giá/khách và quy mô khách mẫu.
- Tìm kiếm, lọc danh mục, ngân sách và quy mô khách.
- Nút thêm gói vào giỏ demo, giữ số lượng sau khi tải lại trang.
- Responsive cho desktop và mobile; không cần cài package.

Các bước giỏ hàng/checkout thực tế, xác thực, dữ liệu cơ sở dữ liệu và thanh toán thuộc giai đoạn B/C.
