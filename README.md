# 🎬 Ứng dụng Xem Phim với React

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0.0-646CFF?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🌟 Giới thiệu
Ứng dụng Xem Phim là dự án cá nhân được xây dựng trong 2 tuần để học hỏi React và tích hợp API bên thứ ba. Ứng dụng sử dụng TMDb API để cung cấp thông tin phim theo thời gian thực.
Điểm nổi bật:

Tích hợp trailer YouTube với phản hồi nhanh.
Giao diện responsive, hỗ trợ tiếng Việt.
Tối ưu hiệu năng với Vite (tải trang <2 giây).

Vai trò của tôi:

Phát triển giao diện người dùng với React và CSS3.
Tích hợp TMDb API để lấy dữ liệu phim.
Quản lý state với React Hooks.
Tối ưu hiệu năng tải trang.

📸 Hình ảnh demo
Danh sách phim phổ biến
![Movie App Screenshot](https://github.com/hoaiiann0804/MOVIE_APP_REACTJS/raw/main/screenshots/list_movies.png)
Thông tin chi tiết phim
![Movie App Screenshot](https://github.com/hoaiiann0804/MOVIE_APP_REACTJS/raw/main/screenshots/detail.png)
Tìm kiếm phim theo từ khóa
![Movie App Screenshot](https://github.com/hoaiiann0804/MOVIE_APP_REACTJS/raw/main/screenshots/search_keyword.png)
🚀 Công nghệ sử dụng

Frontend: React 18.2.0
Build Tool: Vite 4.0.0
Styling: CSS3
API: The Movie Database (TMDb)
State Management: React Hooks
HTTP Client: Axios
Router: React Router

🛠 Bắt đầu
Yêu cầu hệ thống

Node.js >= 14.0.0
npm hoặc yarn
API key từ The Movie Database

Cài đặt

Clone dự án:git clone https://github.com/hoaiiann0804/MOVIE_APP_REACTJS.git
cd MOVIE_APP_REACTJS


Tạo file .env:VITE_API_KEY=your_tmdb_api_key_here


Cài đặt dependencies:npm install
# hoặc
yarn install


Chạy ứng dụng:npm run dev
# hoặc
yarn dev


Truy cập: http://localhost:5173
Dữ liệu thử nghiệm:
Sử dụng API key từ TMDb.
Hoặc dùng file JSON mẫu trong screenshots/sample_data.json (nếu có).



🎯 Cách sử dụng

Nhập từ khóa vào ô tìm kiếm và nhấn Enter để tìm phim.
Nhấn vào phim để xem chi tiết và trailer YouTube.
Nhấn nút đóng để quay lại danh sách phim.

📂 Cấu trúc dự án

```
MOVIE_APP_REACTJS/
├── public/           # Tài nguyên tĩnh
├── src/
│   ├── assets/       # Hình ảnh, icons
│   ├── components/   # Các thành phần React
│   │   ├── Detail.jsx
│   │   ├── Search.jsx
│   │   └── Search.css
│   ├── App.jsx       # Component chính
│   ├── App.css       # Style chính
│   └── main.jsx      # Điểm vào ứng dụng
├── screenshots/      # Ảnh chụp màn hình
├── .gitignore
├── package.json
└── README.md
```
🔍 Trạng thái dự án
Đang phát triển tích cực - Phiên bản hiện tại: v1.0.0
Tính năng đang phát triển

 Thêm tính năng lưu phim yêu thích
 Tích hợp đánh giá phim

🔧 Kết quả đạt được

Tải trang dưới 2 giây nhờ Vite.
Giao diện thân thiện, tương thích trên nhiều thiết bị.
Tích hợp API TMDb mượt mà, phản hồi nhanh.

📚 Bài học rút ra

Thành thạo làm việc với API bên thứ ba (TMDb).
Quản lý state hiệu quả với React Hooks.
Tối ưu hiệu năng ứng dụng React.
Xử lý lỗi và loading state.

🚀 Triển khai


Build production: npm run build


Triển khai lên Vercel:
Fork repository: github.com/hoaiiann0804/MOVIE_APP_REACTJS.
Đăng nhập Vercel, tạo dự án mới, kết nối repository.
Cấu hình biến môi trường VITE_API_KEY với TMDb API key.
Nhấn Deploy.

🌍 Demo Online: [Movie App ReactJS](https://movie-app-reactjs-pink.vercel.app)

Dự án đã được triển khai thành công trên Vercel.  
Mỗi khi cập nhật code và push lên GitHub, ứng dụng sẽ tự động được build và triển khai lại.


🤝 Đóng góp

Tạo Issue: Mô tả vấn đề hoặc tính năng mới, kèm ảnh chụp màn hình nếu cần.
Tạo Pull Request:git clone https://github.com/hoaiiann0804/MOVIE_APP_REACTJS.git
git checkout -b feature/your-feature-name
git add .
git commit -m "feat: mô tả thay đổi"
git push origin feature/your-feature-name


Nguyên tắc code:
Tuân thủ coding style hiện có.
Viết unit test với Jest (nếu có).
Cập nhật tài liệu nếu thay đổi giao diện hoặc API.



🙏 Ghi nhận

Dữ liệu phim được cung cấp bởi The Movie Database (TMDb).
Xây dựng bởi hoaiiann0804.

📄 Giấy phép
Dự án được cấp phép theo MIT License.
📞 Liên hệ

Tên: Nguyễn Hoài An
Email: hoaiiann0804@gmail.com
GitHub: github.com/hoaiiann0804


Lưu ý: 
-Sử dụng API key hợp lệ từ TMDb cho mục đích phát triển.
- "Với TMDB API key tôi để trực tiếp vì đây là public key. Với các API quan trọng (payment, AI, backend riêng) thì tôi sẽ dùng backend hoặc serverless function để bảo mật."

