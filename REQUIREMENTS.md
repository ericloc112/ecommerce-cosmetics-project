# ĐẶC TẢ YÊU CẦU HỆ THỐNG (BẢN NHÁP BAN ĐẦU)

## 1. Mục tiêu dự án (Project Objectives)

* **Mục tiêu kinh doanh:** Xây dựng hệ thống thương mại điện tử/nền tảng số giúp tối ưu hóa quy trình quản lý sản phẩm, đơn hàng và nâng cao trải nghiệm mua sắm trực tuyến cho khách hàng.
* **Mục tiêu kỹ thuật:** Phát triển ứng dụng web/mobile đáp ứng tiêu chuẩn hiệu năng cao, bảo mật thông tin người dùng, giao diện thân thiện (UI/UX) và dễ dàng mở rộng tính năng trong tương lai.

---

## 2. Phạm vi dự án (Scope)

### Trong phạm vi (In-Scope)
* Hệ thống quản lý tài khoản người dùng (Đăng ký, Đăng nhập, Phân quyền).
* Quản lý danh mục sản phẩm, tìm kiếm và lọc sản phẩm theo tiêu chí.
* Giỏ hàng và quy trình thanh toán trực tuyến cơ bản.
* Trang quản trị (Admin Dashboard) quản lý sản phẩm, đơn hàng và người dùng.
* Ghi nhận log hoạt động và lịch sử giao dịch.

### Ngoài phạm vi (Out-of-Scope)
* Tích hợp các cổng thanh toán quốc tế phức tạp ngoài phạm vi hỗ trợ ban đầu (ví dụ: tiền mã hóa, ví điện tử quốc tế chuyên biệt).
* Hệ thống giao hàng tự động bằng drone hoặc vận chuyển nội bộ phức tạp (sẽ tích hợp API bên thứ ba ở giai đoạn sau).
* Tính năng thực tế ảo (AR) thử sản phẩm trực tuyến.

---

## 3. Bảng vai trò, Danh sách chức năng & Yêu cầu phi chức năng

### 3.1. Bảng vai trò người dùng (User Roles)

| STT | Vai trò | Mô tả / Trách nhiệm chính |
| :---: | :--- | :--- |
| **1** | Khách vãng lai | Xem trang chủ, tìm kiếm sản phẩm, xem chi tiết sản phẩm nhưng chưa thể đặt hàng. |
| **2** | Khách hàng (có tài khoản) | Đăng ký/đăng nhập tài khoản, quản lý giỏ hàng, đặt hàng, theo dõi trạng thái đơn hàng và đánh giá sản phẩm. |
| **3** | Admin | Quản lý toàn bộ hệ thống: thêm/sửa/xóa sản phẩm, duyệt/cập nhật trạng thái đơn hàng, quản lý tài khoản người dùng và xem báo cáo thống kê. *(Chức năng này dành cho nội bộ nhân sự của công ty: bán hàng, kế toán,..)*[cite: 8, 9] |

### 3.2. Danh sách chức năng (Functional Requirements - F01 đến F08)

| Mã chức năng | Tên chức năng | Mô tả ngắn | Mức độ ưu tiên |
| :---: | :--- | :--- | :---: |
| **F01** | Đăng ký & Đăng nhập | Cho phép người dùng tạo tài khoản mới và đăng nhập an toàn vào hệ thống. | Cao (High) |
| **F02** | Tìm kiếm & Lọc sản phẩm | Cho phép tìm kiếm sản phẩm theo tên, danh mục, khoảng giá và sắp xếp theo tiêu chí. | Cao (High) |
| **F03** | Xem chi tiết sản phẩm | Hiển thị thông tin mô tả, hình ảnh, giá cả, thông số kỹ thuật và đánh giá của sản phẩm. | Cao (High) |
| **F04** | Quản lý giỏ hàng | Cho phép thêm, sửa số lượng hoặc xóa sản phẩm khỏi giỏ hàng trước khi thanh toán. | Cao (High) |
| **F05** | Thanh toán & Đặt hàng | Quy trình nhập địa chỉ nhận hàng, chọn phương thức thanh toán và xác nhận đặt đơn hàng. | Cao (High) |
| **F06** | Quản lý đơn hàng cá nhân | Cho phép khách hàng theo dõi lịch sử mua hàng và trạng thái xử lý đơn hàng. | Trung bình (Medium) |
| **F07** | Quản lý sản phẩm (Admin) | Cho phép Admin thêm mới, cập nhật hoặc xóa sản phẩm trong cơ sở dữ liệu. | Cao (High) |
| **F08** | Thống kê & Báo cáo (Admin) | Cung cấp giao diện tổng hợp doanh thu, số lượng đơn hàng và sản phẩm bán chạy theo thời gian. | Thấp (Low / Nice-to-have) |

---

## 4. Yêu cầu phi chức năng (Non-Functional Requirements)

* **Hiệu năng (Performance):**
  * Thời gian tải trang trung bình dưới 2 giây trong điều kiện mạng tiêu chuẩn.
  * Hệ thống hỗ trợ tối thiểu 100 người dùng truy cập đồng thời mà không bị suy giảm hiệu suất đáng kể.
* **Bảo mật (Security):**
  * Mật khẩu người dùng bắt buộc phải được mã hóa (hashing) trước khi lưu trữ vào cơ sở dữ liệu.
  * Dữ liệu truyền tải giữa client và server phải được mã hóa qua giao thức HTTPS.
* **Khả năng sử dụng (Usability):**
  * Giao diện responsive, hiển thị tốt trên cả máy tính (Desktop), máy tính bảng (Tablet) và điện thoại di động (Mobile).
  * Thiết kế trực quan, thao tác đơn giản, dễ làm quen đối với người dùng mới.
* **Độ tin cậy & Sẵn sàng (Reliability & Availability):**
  * Hệ thống hoạt động ổn định với thời gian uptime đạt tối thiểu 99%.
  * Có cơ chế tự động sao lưu (backup) cơ sở dữ liệu định kỳ để phòng ngừa rủi ro mất mát dữ liệu.
