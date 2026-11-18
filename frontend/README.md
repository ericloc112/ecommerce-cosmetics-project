# TEAVENTO Frontend Prototype

Prototype bước A: giao diện responsive bằng HTML, CSS và JavaScript thuần. Dữ liệu gói tiệc mẫu nằm trong `app.js`; giỏ hàng và đơn demo được lưu cục bộ bằng `localStorage`.

## Chạy thử

```bash
cd frontend
python -m http.server 8000
```

Mở http://localhost:8000.

## Các luồng prototype

- Trang chủ và danh mục gói tiệc; tìm kiếm, lọc danh mục, ngân sách tối đa/khách và số khách dự kiến.
- Chi tiết gói hiển thị thực đơn, giá/khách, quy mô phục vụ; nhập số khách rồi thêm vào giỏ.
- Giỏ tiệc cho phép đổi số khách hoặc xóa gói; kiểm tra đơn tối thiểu 500.000đ và cộng phí setup demo 120.000đ.
- Đặt lịch gồm liên hệ, ngày tiệc (tối thiểu 24 giờ sau), khung giờ setup, địa chỉ, ghi chú; chọn mức đặt cọc demo 50% hoặc toàn bộ.
- Tra cứu đơn theo mã TV-xxxxxx; quản trị demo xem đơn, số đơn/doanh thu hoàn thành và cập nhật trạng thái.
- Dữ liệu mẫu: bốn gói tiệc có tên, giá, ảnh, danh sách món, min/max khách trong `app.js`.

**Lưu ý:** Đây chỉ là prototype frontend. Giỏ hàng, đơn và trạng thái chỉ lưu trên cùng trình duyệt. Không có backend, xác thực/phân quyền thực sự hay thanh toán; không nhập dữ liệu khách hàng thật. Kết nối API, xác minh giá phía server và bảo vệ admin cần làm ở bước B/C.
