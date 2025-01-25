import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import "../pages/Home.css";
import "../pages/Products.css";
import { useState } from "react";

function ProductCard({ product, handleAddCart }) {
  return (
    <div className="main-card p-1 rounded-1">
      <div>
        <NavLink
          className="text-decoration-none"
          to={`/products/${product.slug}`}
        >
          <img
            src={`https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/products/${product.image}?t=2023-09-19T13%3A20%3A01.474Z`}
            className="card-img img-card"
            alt={product.name}
          />
        </NavLink>
        <div className="card-body px-3 py-1 mt-2 d-flex flex-column justify-content-between card-info">
          <NavLink
            className="text-decoration-none"
            to={`/products/${product.slug}`}
          >
            <p className="card-title text-dark text-uppercase fw-bold product-name">
              {product.name}
            </p>
          </NavLink>

          <div className="d-flex justify-content-between align-items-center mt-1">
            <p className="card-text price-text fs-4 fw-semibold mt-2 mb-2">
              $ {product.price}
            </p>
            <button
              className="add-btn px-3 py-2 d-flex align-items-center"
              onClick={() => {
                handleAddCart(product);
              }}
            >
              <BsCartFill className="me-1" /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
