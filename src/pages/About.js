import React from 'react';

function About() {
  return (
    <div className="page-container">
      <h2>Về Chúng Tôi</h2>
      <p style={{ marginTop: '15px', lineHeight: '1.6', color: '#555' }}>
        Ứng dụng demo được xây dựng bằng React Router, Axios và Fake Store API 
        giúp thực hành điều hướng trang đơn (SPA) dễ dàng.
      </p>
    </div>
  );
}

export default About;