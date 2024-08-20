import React from 'react';


const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img 
        src={process.env.PUBLIC_URL + item?.img} 
        alt={item?.title} 
        className="product-img" 
      />
      <div className="product-name"></div>
      <div className="product-title">{item?.title}</div>
      <div className="product-price">{item?.price}</div>
      <div>{item?.new == true?"New":""}</div>
    </div>
  );
}

export default ProductCard;
