import React from 'react';
import { useNavigate } from 'react-router';


const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/detail/${item.id}`)
  }
  return (
    <div className="product-card" onClick={showDetail}>
      <img 
        src={process.env.PUBLIC_URL + item?.img} 
        alt={item?.title} 
        className="product-img" 
      />
      <div>{item?.choice === true ? <strong>the best choice</strong> : ""}</div>
      <div className="product-name"></div>
      <div className="product-title">{item?.title}</div>
      <div className="product-price">{item?.price}</div>
      <div>{item?.new == true?"New":""}</div>
    </div>
  );
}

export default ProductCard;
