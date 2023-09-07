import React from "react";

export default function ShoesItem({ product }) {
  return (
    <div className="card mb-4">
      <img className="product-img" src={product.image} alt={product.name} />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.description}</p>
        <div className="d-flex justify-content-between">
          <h6 className="text-success">
            Price ($)<span>{product.price}</span>
          </h6>
          <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
