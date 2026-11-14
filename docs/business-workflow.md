## 1. Tổng quan phạm vi nghiệp vụ
Tài liệu này mô tả chi tiết chuỗi hoạt động nghiệp vụ cốt lõi của hệ thống đặt tiệc **Teabreak trực tuyến**, bao gồm **3 quy trình liên kết chặt chẽ**:
1. **Quy trình 1:** Khám phá thực đơn, chọn gói tiệc và giỏ tiệc (Customer Ordering Flow).
2. **Quy trình 2:** Nhập thông tin tổ chức, kiểm tra điều kiện dịch vụ và xác nhận đặt tiệc (Booking & Checkout Flow).
3. **Quy trình 3:** Tiếp nhận, xác nhận lịch bếp, vận hành giao tiệc và cập nhật trạng thái đơn (Order Fulfillment & Admin Flow).

---

## 2. Sơ đồ luồng tổng thể (End-to-End Workflow)

* **Giai đoạn 1 (Chọn thực đơn):** `(1) Truy cập Website` $\rightarrow$ `(2) Lọc theo số khách / ngân sách` $\rightarrow$ `(3) Xem chi tiết set & dụng cụ` $\rightarrow$ `(4) Thêm vào Giỏ tiệc`
* **Giai đoạn 2 (Đặt lịch & Chốt đơn):** `(5) Kiểm tra Giỏ & Đơn tối thiểu` $\rightarrow$ `(6) Nhập ngày/giờ giao, địa điểm & VAT` $\rightarrow$ `(7) Xác nhận đặt tiệc` $\rightarrow$ `(8) Hệ thống sinh mã đơn (Chờ xác nhận)`
* **Giai đoạn 3 (Xử lý & Vận hành):** `(9) Admin kiểm tra đơn & lịch bếp` $\rightarrow$ `(10) Gọi xác nhận / Chốt trạng thái (Đã xác nhận)` $\rightarrow$ `(11) Bếp chuẩn bị & Giao tiệc` $\rightarrow$ `(12) Hoàn tất & Lưu lịch sử`

---

## 3. Chi tiết từng bước trong quy trình nghiệp vụ

### Giai đoạn 1: Khám phá thực đơn & Lựa chọn gói tiệc (Khách hàng)

| Bước | Tên bước | Tác nhân | Hành động chi tiết & Xử lý của hệ thống | Dữ liệu đầu vào / đầu ra |
| :--- | :--- | :--- | :--- | :--- |
| **B01** | **Truy cập & Định hướng nhu cầu** | Khách hàng | Khách hàng truy cập trang chủ website. Hệ thống hiển thị thanh danh mục dịch vụ (*Combo Teabreak trọn gói, Tea Box cá nhân, Bánh ngọt/mặn lẻ, Trái cây & Đồ uống*) cùng thanh tìm kiếm nhanh. | **Đầu ra:** Giao diện danh mục dịch vụ hiển thị rõ mức giá tham khảo/người. |
| **B02** | **Tìm kiếm & Lọc theo ngân sách** | Khách hàng | Khách hàng nhập tên món vào ô tìm kiếm hoặc chọn bộ lọc theo **Quy mô khách** (10–20 người, 20–50 người, trên 50 người) và **Ngân sách/suất** (ví dụ: 50.000đ – 100.000đ/người). Hệ thống lọc và trả về danh sách các gói phù hợp. | **Đầu vào:** Từ khóa, số lượng người, khoảng giá.<br>**Đầu ra:** Danh sách thẻ gói tiệc đã lọc. |
| **B03** | **Xem chi tiết gói tiệc & Quy cách** | Khách hàng | Khách hàng bấm vào một gói tiệc để xem chi tiết: danh sách từng món ăn bên trong set (số lượng bánh ngọt, bánh mặn, trái cây, nước), định lượng khẩu phần và các vật dụng đi kèm (đĩa giấy, nĩa, ly, khăn giấy, kệ trưng bày nếu đặt trọn gói). | **Đầu vào:** Mã gói tiệc (`combo_id`).<br>**Đầu ra:** Trang chi tiết thông số gói tiệc. |
| **B04** | **Tùy chọn số lượng & Thêm vào giỏ** | Khách hàng | Khách hàng chọn số lượng phần ăn hoặc số lượng combo (ví dụ: 25 phần Tea Box hoặc 1 set Teabreak 30 người), có thể chọn thêm món lẻ đi kèm và bấm **"Thêm vào giỏ tiệc"**. Hệ thống cộng dồn số lượng vào biểu tượng giỏ hàng. | **Đầu vào:** `combo_id`, số lượng (`quantity`).<br>**Đầu ra:** Cập nhật giỏ tiệc tạm thời. |

---

### Giai đoạn 2: Kiểm tra điều kiện & Đặt lịch tổ chức tiệc (Khách hàng & Hệ thống)

| Bước | Tên bước | Tác nhân | Hành động chi tiết & Xử lý của hệ thống | Dữ liệu đầu vào / đầu ra |
| :--- | :--- | :--- | :--- | :--- |
| **B05** | **Kiểm tra giỏ tiệc & Đơn tối thiểu** | Khách hàng & Hệ thống | Khách hàng mở trang **Giỏ tiệc** để xem lại danh sách món, tăng/giảm số lượng hoặc xóa món. Hệ thống tự động tính thành tiền từng dòng, tổng tiền tạm tính và kiểm tra **điều kiện đặt tối thiểu** (ví dụ: tổng đơn từ 500.000đ hoặc tối thiểu 10 suất). Nếu chưa đạt, hệ thống hiển thị thanh thông báo số tiền/số suất còn thiếu. | **Đầu vào:** Danh sách sản phẩm trong giỏ.<br>**Đầu ra:** Tổng tạm tính & Trạng thái đủ điều kiện đặt. |
| **B06** | **Nhập thông tin giao tiệc & VAT** | Khách hàng | Khách hàng điền biểu mẫu đặt tiệc gồm:<br>- **Thông tin liên hệ:** Họ tên người đặt, số điện thoại, email.<br>- **Thời gian & Địa điểm:** Ngày tổ chức tiệc, khung giờ nhận tiệc mong muốn (hệ thống kiểm tra điều kiện đặt trước tối thiểu 24 giờ), địa chỉ tòa nhà/văn phòng.<br>- **Yêu cầu bổ sung:** Ghi chú món ăn (ít ngọt, ăn chay, dị ứng...) và ô tích chọn **Xuất hóa đơn đỏ (VAT)** kèm thông tin công ty/Mã số thuế. | **Đầu vào:** Thông tin khách, ngày/giờ tiệc, địa chỉ, thông tin xuất VAT (tùy chọn). |
| **B07** | **Rà soát & Xác nhận đặt tiệc** | Khách hàng | Hệ thống hiển thị trang tóm tắt toàn bộ đơn hàng (thực đơn, thời gian nhận, chi phí dự kiến, phí vận chuyển/set-up nếu có). Khách hàng kiểm tra lần cuối và bấm nút **"Xác nhận đặt tiệc"**. | **Đầu vào:** Xác nhận đồng ý đặt đơn từ khách hàng. |
| **B08** | **Kiểm tra dữ liệu & Lưu đơn hàng** | Hệ thống | Hệ thống kiểm tra tính hợp lệ của dữ liệu (định dạng SĐT, khung giờ hợp lệ), khởi tạo **Mã đơn hàng duy nhất** (ví dụ: `TB-20261113-01`) và lưu toàn bộ thông tin xuống cơ sở dữ liệu với trạng thái mặc định là **`Chờ xác nhận`**. | **Đầu ra:** Bản ghi đơn hàng mới trong CSDL & Thông báo đặt thành công kèm mã đơn. |

---

### Giai đoạn 3: Tiếp nhận, Xác nhận & Vận hành đơn tiệc (Quản trị viên & Khách hàng)

| Bước | Tên bước | Tác nhân | Hành động chi tiết & Xử lý của hệ thống | Dữ liệu đầu vào / đầu ra |
| :--- | :--- | :--- | :--- | :--- |
| **B09** | **Tiếp nhận & Rà soát lịch bếp** | Quản trị viên (Admin) | Admin đăng nhập trang quản trị, xem danh sách đơn mới ở trạng thái `Chờ xác nhận`, kiểm tra thực đơn, số lượng suất ăn, khung giờ giao và đối chiếu năng lực phục vụ của bếp trong khung giờ đó. | **Đầu vào:** Danh sách đơn hàng trạng thái `Chờ xác nhận`. |
| **B10** | **Xác nhận lịch phục vụ** | Quản trị viên (Admin) | Admin liên hệ nhanh qua SĐT/Zalo của khách (nếu cần chốt lại giờ lên bàn hoặc thông tin xuất hóa đơn VAT), sau đó bấm cập nhật trạng thái đơn trên hệ thống sang **`Đã xác nhận`**. | **Đầu ra:** Trạng thái đơn chuyển thành `Đã xác nhận`. |
| **B11** | **Chuẩn bị tiệc & Giao hàng** | Quản trị viên / Bộ phận Bếp | Đến ngày tổ chức, bếp tiến hành chuẩn bị bánh, trái cây, đồ uống theo thực đơn đã chốt. Admin cập nhật trạng thái sang **`Đang chuẩn bị & Giao tiệc`** để khách nắm thông tin. | **Đầu ra:** Trạng thái đơn chuyển thành `Đang chuẩn bị & Giao tiệc`. |
| **B12** | **Bàn giao, Hoàn tất & Tra cứu** | Khách hàng & Admin | Nhân viên giao hàng bàn giao tiệc đúng giờ tại địa điểm khách đặt. Sau khi bàn giao xong, Admin chuyển trạng thái đơn sang **`Hoàn thành`**. Khách hàng có thể vào mục **Tra cứu đơn hàng** bằng mã đơn hoặc số điện thoại để xem lại toàn bộ tiến trình và lịch sử đặt tiệc. | **Đầu ra:** Trạng thái `Hoàn thành` được lưu vào lịch sử hệ thống. |

---

## 4. Vòng đời trạng thái của một đơn đặt tiệc (Order Status Lifecycle)

Để thống nhất khi thiết kế cơ sở dữ liệu và giao diện quản lý đơn, mỗi đơn hàng Teabreak trên hệ thống chỉ chuyển đổi qua **5 trạng thái chuẩn** sau:

1. **`Chờ xác nhận` (Pending):** Đơn hàng vừa được khách tạo thành công trên website, đang đợi Admin kiểm tra lịch bếp.
2. **`Đã xác nhận` (Confirmed):** Admin đã duyệt đơn và chốt lịch phục vụ với khách hàng.
3. **`Đang chuẩn bị & Giao tiệc` (Preparing / Delivering):** Bếp đang chế biến hoặc nhân viên đang vận chuyển tiệc đến địa điểm của khách.
4. **`Hoàn thành` (Completed):** Tiệc đã được bàn giao đầy đủ và thanh toán xong.
5. **`Đã hủy` (Cancelled):** Đơn bị hủy do khách báo hủy hợp lệ trước giờ chuẩn bị hoặc hai bên thỏa thuận hủy do hết lịch phục vụ.

---

## 5. Quy tắc xử lý các tình huống ngoại lệ (Business Rules)

| Tình huống ngoại lệ | Điều kiện xảy ra | Hướng xử lý của hệ thống & Admin |
| :--- | :--- | :--- |
| **1. Đặt tiệc gấp (dưới 24 giờ)** | Khách chọn thời gian nhận tiệc cách thời điểm đặt hiện tại ít hơn 24 tiếng. | Hệ thống hiển thị cảnh báo ngay trên biểu mẫu đặt hàng (*"Đơn đặt gấp trong vòng 24h cần xác nhận trực tiếp lịch bếp"*), vẫn cho gửi yêu cầu hoặc gợi ý bấm nút gọi Hotline/Zalo nhanh. |
| **2. Đơn chưa đạt giá trị tối thiểu** | Tổng giá trị giỏ tiệc dưới 500.000đ (hoặc dưới 10 suất). | Khóa nút chuyển sang bước thanh toán và hiển thị gợi ý các món bánh/nước lẻ để khách bổ sung cho đủ điều kiện đơn tối thiểu. |
| **3. Khách yêu cầu tăng/giảm số lượng** | Đơn đang ở trạng thái `Chờ xác nhận` hoặc `Đã xác nhận` (trước giờ giao tối thiểu 12h). | Khách liên hệ Admin để cập nhật lại số suất ăn; Admin chỉnh sửa chi tiết đơn trên trang quản trị và hệ thống tự động tính lại tổng tiền. |
| **4. Khách yêu cầu hủy đơn** | Đơn chưa chuyển sang trạng thái `Đang chuẩn bị & Giao tiệc`. | Khách hàng có thể gửi yêu cầu hủy đơn (kèm lý do). Nếu đơn đã ở trạng thái `Đang chuẩn bị & Giao tiệc`, hệ thống không cho phép tự hủy trực tuyến. |
| **5. Trùng lịch cao điểm** | Khung giờ khách chọn đã kín lịch bếp. | Admin liên hệ trực tiếp khách hàng để đề xuất dời khung giờ giao sớm/muộn hơn 30–60 phút; nếu khách không đồng ý, Admin chuyển đơn sang `Đã hủy` kèm ghi chú lý do. |
