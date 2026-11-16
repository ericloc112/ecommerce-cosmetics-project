## QUY TẮC HƯỚNG DẪN AI HỖ TRỢ DỰ ÁN (AGENTS.md)
Dự án: TEAVENTO – Nền tảng đặt dịch vụ tiệc trà và sự kiện doanh nghiệp
Người phụ trách: Đinh Phạm Mỹ Duyên (AI Manager & QA Tester / Security & Innovation Dev)
Mục đích tài liệu: Thiết lập bộ quy tắc chuẩn về ngữ cảnh nghiệp vụ, kiến trúc kỹ thuật, bảo mật và quy trình làm việc cho các công cụ AI (GitHub Copilot, ChatGPT, Claude, Gemini, Cursor...) khi hỗ trợ các thành viên trong nhóm sinh mã nguồn, thiết kế CSDL và kiểm thử.
1. Ngữ cảnh nghiệp vụ cốt lõi (Domain Context)
Mọi công cụ AI khi hỗ trợ dự án bắt buộc phải hiểu đúng mô hình kinh doanh của TEAVENTO:
Không phải web bán lẻ hàng hóa thông thường: TEAVENTO là nền tảng đặt dịch vụ tiệc trà trọn gói (Catering & Event) kết hợp tùy chỉnh thực đơn theo sự kiện (Tea Break hội thảo, Trà chiều văn phòng, Finger Food, Tiệc khai trương, Tiệc tiếp khách).
Đặc thù dữ liệu sản phẩm: Sản phẩm chính là các Gói tiệc (Party Packages / Combos) được tính giá theo đầu người (price_per_pax), có quy định số lượng khách tối thiểu (min_pax) và thời gian đặt trước tối thiểu (lead_time_hours, mặc định 24h), đi kèm các Món lẻ (Add-on Items) và dịch vụ trang trí/setup.
Đặc thù đơn hàng (Booking Order): Mỗi đơn đặt tiệc bắt buộc phải gắn với Ngày tổ chức (event_date), Khung giờ hoàn tất setup (setup_time_slot), Địa điểm tổ chức (event_address, district) và đi qua chuỗi trạng thái: Chờ xác nhận (Pending)  Đã phân công (Assigned)  Đang setup (Setting Up)  Hoàn thành (Completed) (hoặc Đã hủy (Cancelled)).
2. Quy tắc về Kiến trúc & Công nghệ (Architecture & Tech Stack)
AI chỉ được phép sinh mã nguồn nằm trong phạm vi công nghệ nhóm đã thống nhất:
Frontend: HTML5, CSS3 (Tailwind CSS), JavaScript thuần (ES6+). Giao diện đảm bảo Responsive (Desktop, Tablet, Mobile) với phong cách trang nhã, tôn vinh hình ảnh bàn tiệc thực tế.
Backend: Node.js (Express.js) hoặc PHP (Laravel) theo mô hình MVC / RESTful API rõ ràng, tách biệt tầng xử lý nghiệp vụ (Controllers/Services) và tầng truy cập dữ liệu (Models/Repositories).
Cơ sở dữ liệu: MySQL / PostgreSQL. Các bảng liên quan đến đơn hàng và thanh toán phải đảm bảo toàn vẹn khóa ngoại (Foreign Keys) và sử dụng Transaction khi lưu đơn tiệc kèm danh sách món tùy chỉnh.
Quy ước đặt tên (Naming Conventions):
Tên biến và hàm (JS/PHP): camelCase (ví dụ: calculatePartyTotal, validateSetupTime).
Tên bảng và cột CSDL: snake_case (ví dụ: party_packages, min_pax, setup_time_slot).
Tên tệp tài liệu quy chuẩn: Giữ đúng tên gốc của dự án (README.md, PROJECT_PLAN.md, REQUIREMENTS.md, AGENTS.md, AI_USAGE_LOG.md, docs/competitor-analysis.md, docs/business-workflow.md).
Giới hạn phạm vi (Anti-Overengineering): AI không tự ý đề xuất hoặc cài đặt các thư viện/hạ tầng vượt quá phạm vi đồ án học phần (không dùng Microservices, Docker/Kubernetes phức tạp, WebSockets/GPS tracking thời gian thực hay cổng thanh toán quốc tế ngoài VNPay/MoMo Sandbox).
3. Quy tắc Bảo mật & Quyền riêng tư (Security & Privacy Rules)
Vì dự án được lưu trữ trên GitHub Repository ở chế độ Public, AI và các thành viên phải tuân thủ nghiêm ngặt 6 nguyên tắc bảo mật sau:
Tuyệt đối không Hardcode khóa bí mật (No Hardcoded Secrets):
Không bao giờ viết trực tiếp thông tin kết nối Database, khóa cấu hình cổng thanh toán (VNP_TMNCODE, VNP_HASHSECRET, MOMO_SECRET_KEY) hoặc khóa AI Chatbot (GEMINI_API_KEY / OPENAI_API_KEY) vào mã nguồn.
Bắt buộc đọc qua biến môi trường (process.env.* hoặc env()) từ tệp .env. Tệp .env phải nằm trong .gitignore và chỉ được phép đẩy tệp mẫu .env.example lên GitHub.
Xác thực giá và công thức tính tiền tại Backend (Server-side Price Calculation):
AI tuyệt đối không viết code Backend nhận trực tiếp tổng số tiền (total_amount) từ phía Client (Frontend) gửi lên để lưu đơn hoặc tạo link thanh toán.
Backend bắt buộc phải truy vấn lại đơn giá từ CSDL và tự tính lại theo công thức:



Tổngthanhtoán=(ĐơngiágóiSốkhách)+(ĐơngiámónlẻSốlượng)+PhíSetuptheoQuận-GiảmgiáVoucher

Kiểm soát phân quyền chặt chẽ (RBAC & Chống lỗi IDOR):
Mọi route thuộc phân hệ Quản trị (/admin/* hoặc /api/admin/*) phải có Middleware kiểm tra phiên đăng nhập và vai trò role === 'admin'.
Khi khách hàng xem chi tiết hoặc hủy đơn đặt tiệc cá nhân, Backend phải kiểm tra order.user_id === currentUser.id để ngăn chặn hành vi thay đổi ID trên URL nhằm xem lén thông tin sự kiện của doanh nghiệp khác.
Bảo mật mật khẩu & Dữ liệu đầu vào (Input Validation & Sanitization):
Mật khẩu người dùng bắt buộc phải được băm (hash) bằng bcrypt hoặc argon2 trước khi lưu vào CSDL.
Toàn bộ dữ liệu nhập từ người dùng (đặc biệt là ghi chú thực đơn, dị ứng thực phẩm, địa chỉ sự kiện, mã Voucher) phải được kiểm tra hợp lệ (Validate) và lọc mã độc để chống SQL Injection (sử dụng Prepared Statements / ORM) và XSS (Escape dữ liệu khi hiển thị).
An toàn khi tích hợp AI Chatbot tư vấn thực đơn:
Giới hạn độ dài tin nhắn đầu vào của người dùng (ví dụ: tối đa 300 ký tự/lần hỏi) và giới hạn tần suất gọi API (Rate Limiting).
Thiết lập System Prompt chặt chẽ để Chatbot chỉ tư vấn gói tiệc, thực đơn và báo giá ước tính dựa trên danh mục của TEAVENTO, từ chối trả lời các câu hỏi ngoài phạm vi hoặc các lệnh cố tình khai thác hệ thống (Prompt Injection).
Bảo vệ dữ liệu cá nhân (PII):
Không ghi log (console.log / file log) chứa mật khẩu, mã OTP, chữ ký số thanh toán hoặc toàn bộ thông tin nhạy cảm của khách hàng.
4. Quy trình sử dụng AI của nhóm (AI Collaboration Workflow)
Nguyên tắc "Con người kiểm soát" (Human-in-the-Loop):
AI chỉ đóng vai trò trợ lý gợi ý cấu trúc, sinh code khung và phản biện. Thành viên phụ trách module nào phải đọc hiểu 100% đoạn code do AI sinh ra trước khi đưa vào dự án.
Quy trình 4 bước khi dùng AI viết code hoặc tài liệu:
Bước 1 – Cung cấp ngữ cảnh: Đính kèm yêu cầu từ REQUIREMENTS.md, docs/business-workflow.md và các quy tắc trong AGENTS.md vào câu lệnh (Prompt).
Bước 2 – Kiểm tra chéo (Review & Refactor): Đối chiếu kết quả AI trả về với bài toán TEAVENTO (kiểm tra xem AI có bị nhầm sang web bán hàng thông thường không).
Bước 3 – Kiểm thử (Testing): Chạy thử nghiệm các trường hợp biên (Edge cases: đặt số khách nhỏ hơn min_pax, chọn ngày trong quá khứ, nhập mã Voucher hết hạn, hủy thanh toán Sandbox).
Bước 4 – Ghi nhật ký: Cập nhật lịch sử sử dụng và các quyết định chỉnh sửa vào tệp AI_USAGE_LOG.md trước khi tạo Pull Request hoặc đóng GitHub Issue.


