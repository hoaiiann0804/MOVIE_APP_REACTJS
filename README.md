# 🎬 Movie App with React

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0.0-646CFF?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Ứng dụng xem phim được xây dựng bằng React và TMDb API, cho phép người dùng tìm kiếm và xem thông tin chi tiết về các bộ phim.

![Movie App Screenshot](./public/movie-app-screenshot.png)

## ✨ Tính năng chính

- 🔍 Tìm kiếm phim theo từ khóa
- 🎥 Xem danh sách phim phổ biến
- 📝 Xem thông tin chi tiết phim
- 🌐 Hỗ trợ đa ngôn ngữ (tiếng Việt)
- 🚀 Tốc độ tải trang nhanh với Vite

## 🛠 Công nghệ sử dụng

- **Frontend**: React 18, Vite 4
- **Styling**: CSS3
- **API**: The Movie Database (TMDb)
- **State Management**: React Hooks
- **HTTP Client**: Axios

## 📦 Cài đặt

1. **Clone dự án**
   ```bash
   git clone https://github.com/hoaiiann0804/MOVIE_APP_REACTJS.git
   cd MOVIE_APP_REACTJS
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Chạy ứng dụng**
   ```bash
   npm run dev
   ```

4. **Truy cập ứng dụng**
   Mở trình duyệt và truy cập: [http://localhost:5173](http://localhost:5173)

## 📂 Cấu trúc dự án

```plaintext
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
├── .gitignore
├── package.json
└── README.md
```

## 🎯 Vai trò của tôi

- **Phát triển giao diện người dùng** với React và CSS3
- **Tích hợp API** TMDb để lấy dữ liệu phim
- **Xử lý state** với React Hooks
- **Tối ưu hiệu năng** tải trang

## 🔧 Kết quả đạt được

- Thời gian tải trang dưới 2 giây
- Giao diện thân thiện, dễ sử dụng
- Tương thích tốt trên nhiều thiết bị

## 📚 Bài học rút ra

- Làm việc với API bên thứ 3 (TMDb)
- Quản lý state hiệu quả với React Hooks
- Tối ưu hiệu năng ứng dụng React
- Xử lý lỗi và loading state

## 🤝 Đóng góp

Đóng góp của bạn luôn được chào đón! Hãy tạo issue hoặc pull request nếu bạn muốn đóng góp cho dự án.

1. Tạo Issue mới để thảo luận về tính năng hoặc báo lỗi
2. Fork repository và tạo nhánh mới cho tính năng của bạn
3. Tạo Pull Request với mô tả rõ ràng về thay đổi

## 📄 Giấy phép

Dự án được cấp phép theo [MIT License](LICENSE).

## 📞 Liên hệ

- **Tên**: Nguyễn Hoài An
- **Email**: [hoaiiann0804@gmail.com](mailto:hoaiiann0804@gmail.com)
- **GitHub**: [github.com/hoaiiann0804](https://github.com/hoaiiann0804)

---

> **Lưu ý**: Dự án này sử dụng API của TMDb. Vui lòng sử dụng API key hợp lệ của riêng bạn cho mục đích phát triển.
