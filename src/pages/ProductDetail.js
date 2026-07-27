import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loading">Đang tải thông tin...</div>;
  if (!product) return <div className="page-container">Không tìm thấy sản phẩm!</div>;

  const handleAddToCart = () => {
    alert(`Đã thêm ${quantity} sản phẩm "${product.title}" vào giỏ hàng!`);
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Quay lại
      </button>

      <div className="detail-wrapper">
        <div className="detail-img">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="detail-info">
          <span className="card-category">{product.category}</span>
          <h2>{product.title}</h2>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-desc">{product.description}</p>

          <div className="quantity-control">
            <label>Số lượng: </label>
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>

          <button className="add-cart-btn" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;