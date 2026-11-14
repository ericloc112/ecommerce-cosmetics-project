## 1. Tổng quan phạm vi nghiệp vụ
Tài liệu này mô tả chi tiết chuỗi hoạt động nghiệp vụ cốt lõi của hệ thống đặt tiệc **Teabreak trực tuyến**, bao gồm **3 quy trình liên kết chặt chẽ**:
1. **Quy trình 1:** Khám phá thực đơn, chọn gói tiệc và giỏ tiệc (Customer Ordering Flow).
2. **Quy trình 2:** Nhập thông tin tổ chức, kiểm tra điều kiện dịch vụ và xác nhận đặt tiệc (Booking & Checkout Flow).
3. **Quy trình 3:** Tiếp nhận, xác nhận lịch bếp, vận hành giao tiệc và cập nhật trạng thái đơn (Order Fulfillment & Admin Flow).

---

## 2. Sơ đồ luồng tổng thể (End-to-End Workflow)

```text
[GIAI ĐOẠN 1: CHỌN THỰC ĐƠN]
(1) Truy cập Website -> (2) Lọc theo số khách / ngân sách -> (3) Xem chi tiết set & dụng cụ -> (4) Thêm vào Giỏ tiệc

[GIAI ĐOẠN 2: ĐẶT LỊCH & CHỐT ĐƠN]
(5) Kiểm tra Giỏ & Đơn tối thiểu -> (6) Nhập ngày/giờ giao, địa điểm & VAT -> (7) Xác nhận đặt tiệc -> (8) Hệ thống sinh mã đơn (Chờ xác nhận)

[GIAI ĐOẠN 3: XỬ LÝ & VẬN HÀNH]
(9) Admin kiểm tra đơn & lịch bếp -> (10) Gọi xác nhận / Chốt trạng thái (Đã xác nhận) -> (11) Bếp chuẩn bị & Giao tiệc -> (12) Hoàn tất & Lưu lịch sử
