import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading">Đang tải sản phẩm...</div>;

  return (
    <div className="page-container">
      <h2 className="page-title">Danh Sách Sản Phẩm</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm theo tên..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div key={p.id} className="product-card">
            <div className="card-img-wrap">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="card-body">
              <span className="card-category">{p.category}</span>
              <h3 className="card-title">{p.title}</h3>
              <div className="card-footer">
                <span className="card-price">${p.price.toFixed(2)}</span>
                <Link to={`/products/${p.id}`} className="detail-btn">
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;