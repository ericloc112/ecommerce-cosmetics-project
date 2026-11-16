# KẾ HOẠCH THỰC HIỆN DỰ ÁN (`PROJECT_PLAN.md`)

- **Dự án:** TEAVENTO – Nền tảng đặt dịch vụ tiệc trà và sự kiện doanh nghiệp
- **Mục tiêu:** Thiết lập kế hoạch chi tiết về phân công nhân sự, tiến độ 6 giai đoạn, danh mục công việc và quản lý rủi ro cho toàn bộ đồ án học phần.

---

## 1. Thành viên và vai trò

*(Ghi chú: Toàn bộ 6 thành viên trong nhóm cùng phối hợp thực hiện việc Lập trình Website và Soạn thảo Báo cáo Word đồ án; mỗi thành viên đảm nhận vai trò Chịu trách nhiệm chính - Lead cho mảng chuyên môn của mình).*

| Thành viên | Vai trò chuyên môn | Tài liệu ban đầu | Phần việc Lập trình Web | Phân công Báo cáo Word |
| :--- | :--- | :--- | :--- | :--- |
| **Phạm Thị Thảo** | BA & Light Frontend Lead | Soạn thảo & nộp `README.md` và `PROJECT_PLAN.md`. | Dựng giao diện trang Giới thiệu (About Us) & FAQ TEAVENTO, nhập dữ liệu mẫu tiệc trà, kiểm thử UI người dùng. | Viết Chương 1 (Tổng quan), Chương 5 (Kết luận), tổng hợp file Báo cáo Word (`.docx`) và Bảng đánh giá đóng góp thành viên. |
| **Võ Thị Ngọc Hiển** | UI/UX & Responsive Lead | Phân tích 3 đối thủ và nộp `docs/competitor-analysis.md`. | Thiết kế Wireframe, bản nguyên mẫu Figma UI/UX (Desktop & Mobile), cắt mã Frontend HTML/Tailwind CSS chuẩn Responsive. | Viết Chương 2 (Phân tích đối thủ & Thiết kế giao diện Figma UI). |
| **Nguyễn Thị Kim Nguyên** | Business Analyst & Frontend Client Lead | Phân tích yêu cầu và nộp `REQUIREMENTS.md` (mục tiêu, phạm vi, vai trò, F01-F08). | Lập trình JavaScript phía Client: Bộ lọc tiệc theo ngân sách, chọn mốc ngày/giờ setup linh hoạt, tùy chỉnh món phụ, Giỏ hàng & Checkout. | Viết Chương 3 (Phát triển giao diện & tương tác Frontend Client). |
| **Lê Trí Lộc** | Git Admin / DevOps & Backend Lead | Khởi tạo kho lưu trữ GitHub Public, cây thư mục & GitHub Issues. | Thiết kế CSDL MySQL, hệ thống RESTful API, tích hợp thanh toán VNPay/MoMo Sandbox & API tính phí vận chuyển/setup. | Viết Chương 2 & 3 (Thiết kế CSDL MySQL, Hệ thống API & Payment Sandbox). |
| **Hồ Thu Hằng** | System Analyst & Admin Lead | Mô tả sơ đồ luồng nghiệp vụ và nộp `docs/business-workflow.md`. | Phát triển phân hệ Admin Dashboard (biểu đồ thống kê doanh thu/đơn tiệc, duyệt lịch trống) và Module Voucher/Khuyến mãi. | Viết Chương 2 & 3 (Sơ đồ luồng nghiệp vụ, Phân hệ Admin Dashboard & Voucher). |
| **Đinh Phạm Mỹ Duyên** | AI Manager & QA / Security / Innovation Lead | Soạn thảo quy tắc AI `AGENTS.md` và nhật ký AI `AI_USAGE_LOG.md`. | Lập kịch bản kiểm thử (Test Cases), kiểm thử bảo mật (Auth, XSS, SQLi) và phát triển tính năng Innovation (AI Chatbot tư vấn tiệc). | Viết Chương 4 (Security & Testing) và Phụ lục (Link GitHub, Nhật ký AI). |

---

## 2. Các giai đoạn thực hiện dự án

Dự án TEAVENTO được triển khai qua 6 giai đoạn chính xuyên suốt học phần:

* **Giai đoạn 1: Khảo sát và xác định yêu cầu**
  Cả nhóm cùng khảo sát bài toán kinh doanh tiệc trà TEAVENTO; Võ Thị Ngọc Hiển khảo sát 3 đối thủ; Nguyễn Thị Kim Nguyên xác định phạm vi & chức năng (`REQUIREMENTS.md`); Lê Trí Lộc khởi tạo GitHub Repository; Phạm Thị Thảo nộp bộ tài liệu kế hoạch ban đầu.
* **Giai đoạn 2: Thiết kế giao diện và kiến trúc dữ liệu**
  Võ Thị Ngọc Hiển chủ trì vẽ sơ đồ giao diện Wireframe & bản Figma (Desktop/Mobile); Hồ Thu Hằng & Lê Trí Lộc thiết kế CSDL MySQL và vẽ luồng nghiệp vụ đặt tiệc; cả nhóm tham gia đóng góp ý kiến.
* **Giai đoạn 3: Xây dựng các chức năng frontend**
  Võ Thị Ngọc Hiển & Nguyễn Thị Kim Nguyên chủ trì lập trình giao diện Client (Responsive), phát triển bộ lọc tiệc theo ngân sách, tính năng chọn mốc giờ setup và giỏ hàng; Phạm Thị Thảo làm trang Giới thiệu/FAQ & nhập liệu mẫu; Hồ Thu Hằng dựng giao diện Admin Dashboard.
* **Giai đoạn 4: Phát triển backend và cơ sở dữ liệu**
  Lê Trí Lộc chủ trì xây dựng CSDL MySQL & hệ thống API, tích hợp cổng thanh toán Sandbox (VNPay/MoMo) và tính phí vận chuyển; Hồ Thu Hằng phát triển Module Voucher; toàn nhóm tham gia chạy thử và kết nối dữ liệu.
* **Giai đoạn 5: Tích hợp và kiểm thử**
  Đinh Phạm Mỹ Duyên chủ trì lập Test Cases và kiểm thử bảo mật (XSS, SQLi, Auth); toàn nhóm cùng tham gia kiểm thử liên vết (QA Testing), sửa lỗi giao diện/API và tích hợp tính năng Innovation (AI Chatbot).
* **Giai đoạn 6: Triển khai và hoàn thiện**
  Lê Trí Lộc triển khai website lên môi trường Internet (Deployment); Phạm Thị Thảo chủ trì tổng hợp Báo cáo Word đồ án (`.docx`) từ phần đóng góp của 6 thành viên; toàn nhóm chuẩn bị Slide và luyện tập kiểm thử sửa code (Live Coding Test) phục vụ bảo vệ.

---

## 3. Danh mục công việc chi tiết

| Mã công việc | Người phụ trách (Lead) | Nội dung nhiệm vụ & Kết quả cần đạt | Trạng thái |
| :---: | :--- | :--- | :---: |
| **01** | Phạm Thị Thảo (BA Lead) | Lập tài liệu `README.md`, `PROJECT_PLAN.md`; điều phối dự án; dựng trang Giới thiệu/FAQ & nhập dữ liệu tiệc mẫu; chủ trì tổng hợp Báo cáo Word đồ án. | Chưa bắt đầu |
| **02** | Võ Thị Ngọc Hiển (UI/UX Lead) | Lập tài liệu `docs/competitor-analysis.md`; thiết kế Figma UI/UX; lập trình giao diện Client Responsive và viết nội dung Chương 2 trong bài báo cáo Word. | Chưa bắt đầu |
| **03** | Nguyễn Thị Kim Nguyên (BA Lead) | Lập tài liệu `REQUIREMENTS.md`; lập trình JS bộ lọc tiệc theo ngân sách, chọn ngày/giờ setup linh hoạt, giỏ hàng tự động và viết nội dung Chương 3 (Client Frontend) trong bài báo cáo Word. | Chưa bắt đầu |
| **04** | Lê Trí Lộc (Backend Lead) | Khởi tạo Repo GitHub & Issues; thiết kế CSDL MySQL, hệ thống API, tích hợp thanh toán VNPay/MoMo Sandbox, API tính phí vận chuyển và viết nội dung Chương 2 & 3 (CSDL & Payment API) trong bài báo cáo Word. | Chưa bắt đầu |
| **05** | Hồ Thu Hằng (Admin Lead) | Lập tài liệu `docs/business-workflow.md`; phát triển phân hệ Admin Dashboard (biểu đồ thống kê), Module Voucher và viết nội dung Chương 2 & 3 (Admin & Voucher) trong bài báo cáo Word. | Chưa bắt đầu |
| **06** | Đinh Phạm Mỹ Duyên (QA & AI Lead) | Lập `AGENTS.md`, `AI_USAGE_LOG.md`; lập bộ Test Cases kiểm thử bảo mật (XSS, SQLi); phát triển Module AI Chatbot và viết nội dung Chương 4 (Testing & Security) trong bài báo cáo Word. | Chưa bắt đầu |

---

## 4. Quản lý rủi ro

| STT | Rủi ro tiềm ẩn (Dự đoán) | Mức độ ảnh hưởng | Biện pháp phòng ngừa & Phương án dự phòng |
| :---: | :--- | :---: | :--- |
| **1** | **Rủi ro về khả năng làm chủ mã nguồn khi Bảo vệ đồ án (Live Coding Test):** Thành viên được giảng viên chỉ định ngẫu nhiên lên đứng máy có thể bị lúng túng hoặc chưa nắm sâu luồng code khi bị yêu cầu sửa code trực tiếp tại chỗ. | Rất cao *(Ảnh hưởng trực tiếp đến điểm số)* | • **Phòng ngừa:** Mỗi thành viên bắt buộc phải tự lập trình và tự viết báo cáo Word cho phân hệ mình phụ trách.<br>• **Dự phòng:** Trước buổi bảo vệ 1 tuần, nhóm sẽ tổ chức các buổi "Review code chéo" và chạy thử kịch bản Giảng viên hỏi/yêu cầu sửa code để tất cả 6 thành viên đều hiểu luồng chạy chung của hệ thống. |
| **2** | **Rủi ro kỹ thuật khi tích hợp Payment Sandbox & API Phí vận chuyển:** Viết kết nối cổng thanh toán thử nghiệm (VNPay/MoMo) và API tính phí setup/giao hàng có thể gặp lỗi bất ngờ hoặc không phản hồi đúng trạng thái giao dịch. | Cao | • **Phòng ngừa:** Lê Trí Lộc (Backend Lead) thống nhất định dạng dữ liệu đầu vào/đầu ra (JSON schema) với bộ phận Frontend trước khi lập trình API.<br>• **Dự phòng:** Viết sẵn cơ chế bắt lỗi (`try-catch`), lưu nhật ký giao dịch (log) và chuẩn bị sẵn dữ liệu thử nghiệm (Mock Data) phòng trường hợp cổng Sandbox của bên thứ ba bị gián đoạn. |
| **3** | **Rủi ro xung đột mã nguồn (Merge Conflicts) trên GitHub:** Khi cả 6 thành viên cùng đẩy mã nguồn Web và bài viết Markdown lên kho lưu trữ chung, có thể xảy ra tình trạng đè code hoặc mất dữ liệu. | Trung bình | • **Phòng ngừa:** Lê Trí Lộc (Git Admin) quy định nghiêm ngặt: Mỗi thành viên chỉ làm việc trên nhánh tính năng riêng (`feature/frontend`, `feature/backend`...), tuyệt đối không push trực tiếp vào nhánh `main`.<br>• **Dự phòng:** Bắt buộc phải tạo Pull Request và kiểm tra mã nguồn chéo trước khi hợp nhất vào nhánh chính. |
| **4** | **Rủi ro chậm tiến độ (Behind Schedule) giữa Lập trình Web và Soạn Báo cáo Word:** Khối lượng công việc lớn có thể dẫn đến việc các thành viên tập trung làm Web mà quên cập nhật nội dung cho bài báo cáo Word hoặc ngược lại. | Trung bình | • **Phòng ngừa:** Phạm Thị Thảo (Trưởng nhóm) chia nhỏ tiến độ theo từng mốc Buổi học và tạo danh sách nhiệm vụ chi tiết trên GitHub Issues.<br>• **Dự phòng:** Duy trì họp ngắn nội bộ 15 phút sau mỗi buổi học để kiểm tra tiến độ song song (Web + Word), thành viên xong sớm sẽ hỗ trợ thành viên đang gặp vướng mắc. |
