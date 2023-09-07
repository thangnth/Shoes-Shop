import React from "react";
import ShoesItem from "./ShoesItem";

export default function ShoesList({ products }) {
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-md-3">
            <ShoesItem product={product} />
          </div>
        );
      })}
    </div>
  );
}
