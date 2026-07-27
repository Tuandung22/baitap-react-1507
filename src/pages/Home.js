import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Chào Mừng Đến Với DT Store</h1>
        <p>Khám phá danh sách sản phẩm chất lượng cao.</p>
        <Link to="/products" className="cta-btn">
          Xem Sản Phẩm Ngay
        </Link>
      </div>
    </div>
  );
}

export default Home;