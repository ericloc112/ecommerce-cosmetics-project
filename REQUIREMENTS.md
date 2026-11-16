# ĐẶC TẢ YÊU CẦU HỆ THỐNG 

## 1. Mục tiêu dự án (Project Objectives)

* **Mục tiêu kinh doanh:**
* Số hóa và tự động hóa quy trình báo giá: Rút ngắn thời gian nhận báo giá từ vài giờ (chờ nhân viên kinh doanh phản hồi thủ công) xuống còn dưới 3 phút thông qua công cụ tự tùy chỉnh thực đơn và tính giá tự động theo số lượng khách (pax).
Tối ưu hóa chuyển đổi khách hàng B2B & Event Agency: Cung cấp trải nghiệm đặt tiệc minh bạch, chuyên nghiệp (hỗ trợ xuất báo giá nhanh, quản lý thông tin xuất hóa đơn VAT, đặt cọc trực tuyến) nhằm tăng tỷ lệ chốt đơn từ nhóm khách hàng doanh nghiệp.
Gia tăng giá trị trung bình trên mỗi đơn hàng (AOV): Khuyến khích khách hàng nâng cấp gói hoặc chọn thêm món lẻ (bánh ngọt, trái cây, đồ uống) thông qua tính năng gợi ý thông minh của AI Chatbot dựa trên ngân sách và tính chất sự kiện.
Đảm bảo tính chính xác trong vận hành (Setup & Giao nhận): Kiểm soát chặt chẽ khung giờ giao hàng, thời gian setup tại địa điểm sự kiện và số lượng nhân sự/dụng cụ đi kèm, giảm thiểu rủi ro trễ giờ sự kiện.
.
* **Mục tiêu kỹ thuật:**
* Xây dựng nền tảng Web Responsive toàn diện: Giao diện trực quan, tương thích mượt mà trên cả máy tính (phục vụ HR/Admin đặt hàng tại văn phòng) và thiết bị di động (phục vụ khách hàng theo dõi tiến độ tiệc tại hiện trường).
Xây dựng bộ máy tính giá và kiểm tra lịch động (Dynamic Pricing & Slot Booking): Xử lý chính xác logic tính giá theo đầu người (kèm chiết khấu theo quy mô khách), cộng dồn món lẻ, phí vận chuyển/setup và khóa khung giờ nhận tiệc dựa trên năng lực phục vụ của bếp.
Tích hợp AI Chatbot tư vấn thực đơn: Ứng dụng LLM API kết hợp dữ liệu thực đơn nội bộ để tư vấn tự động theo số lượng người, ngân sách/người và loại hình sự kiện (hội thảo, khai trương, trà chiều).
Tích hợp cổng thanh toán trực tuyến (Sandbox): Hoàn thiện luồng thanh toán đặt cọc (30% - 50%) và thanh toán toàn bộ qua cổng VNPay/MoMo môi trường Sandbox, đảm bảo đồng bộ trạng thái đơn hàng tự động qua Webhook/IPN.


---

## 2. Phạm vi dự án (Scope)

2.1. Trong phạm vi dự án (In-Scope)
Phân hệ / Nhóm tính năng
Chi tiết nghiệp vụ triển khai
Quản lý danh mục & Gói tiệc
Hiển thị thông tin các gói tiệc chuẩn (Tea Break hội thảo, Trà chiều, Finger Food, Khai trương...) kèm định lượng món/người, hình ảnh thực tế, mức đặt tối thiểu (MOQ - ví dụ: từ 15 pax) và danh sách món lẻ gọi thêm.
Công cụ thiết kế tiệc & Báo giá tự động
Cho phép khách nhập số lượng khách, chọn gói cơ bản, tùy chỉnh thay đổi/thêm bớt món lẻ; hệ thống tự động tính đơn giá/người, tổng chi phí, thuế VAT và cho phép tải file báo giá PDF.
Đặt lịch & Quản lý thông tin sự kiện
Chọn ngày, khung giờ bắt đầu sự kiện, khung giờ yêu cầu setup hoàn tất; nhập địa chỉ giao hàng, ghi chú điều kiện mặt bằng (thang máy, hầm gửi xe, nguồn điện) và thông tin xuất hóa đơn doanh nghiệp.
AI Chatbot tư vấn thực đơn
Tư vấn 24/7 giúp khách hàng chọn gói tiệc phù hợp với ngân sách (VD: "Tiệc cho 40 người ngân sách 100k/người"), giải đáp các câu hỏi về thành phần món ăn (chay, ít ngọt) và thời gian chuẩn bị.
Giỏ hàng & Thanh toán (Sandbox)
Hỗ trợ hình thức thanh toán đặt cọc (VD: 50% giá trị đơn) hoặc thanh toán 100% qua VNPay/MoMo Sandbox; cập nhật trạng thái thanh toán tự động.
Quản trị vận hành (Admin Portal)
Quản lý thực đơn/nguyên liệu cấu thành gói; quản lý đơn hàng theo trạng thái đặc thù ngành tiệc (Chờ xác nhận → Đã cọc → Đang chuẩn bị bếp → Đang giao & Setup → Hoàn tất / Thu hồi dụng cụ); quản lý năng lực nhận đơn theo khung giờ.

2.2. Ngoài phạm vi dự án (Out-of-Scope)
Tích hợp xuất hóa đơn điện tử tự động (E-Invoice API): Hệ thống chỉ lưu trữ thông tin mã số thuế, tên công ty, email nhận hóa đơn của khách B2B để kế toán xuất thủ công bên ngoài, không kết nối trực tiếp với hệ thống của Tổng cục Thuế hay bên thứ ba (MISA, VNPT).
Định vị GPS tài xế/nhân sự setup theo thời gian thực (Real-time Tracking): Không xây dựng bản đồ theo dõi vị trí shipper trực tiếp như ứng dụng giao đồ ăn nhanh; chỉ cập nhật trạng thái đơn hàng theo các mốc thời gian.
Quản lý kho nguyên liệu thô & định mức bếp sâu (ERP/Inventory): Không tính toán tự động lượng bột, đường, bơ tồn kho theo từng mẻ bánh; Admin chỉ bật/tắt trạng thái "Còn phục vụ / Hết món" và giới hạn số lượng tiệc tối đa trong một khung giờ.
Ứng dụng di động gốc (Native Mobile App trên iOS/Android): Chỉ phát triển giao diện Web Responsive, không đóng gói ứng dụng đưa lên App Store hay Google Play.
Thanh toán công nợ trả sau (Credit Line) tự động: Các hợp đồng doanh nghiệp thanh toán sau sự kiện sẽ do Admin duyệt thủ công, không xây dựng hệ thống chấm điểm tín dụng hay quản lý hạn mức công nợ tự động.

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
