import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-container not-found">
      <h1>404</h1>
      <h2>Trang Không Tồn Tại</h2>
      <Link to="/" className="cta-btn" style={{ marginTop: '20px' }}>
        Quay về Trang Chủ
      </Link>
    </div>
  );
}

export default NotFound;