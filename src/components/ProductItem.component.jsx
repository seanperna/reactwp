import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Icon,
} from "@mui/material";
import React from "react";
import RatingProduct from "./RatingProduct.component";
import SliderProduct from "./SliderProduct.component";

import "./ProductItem.style.scss";
import { useEffect } from "react";
import { useRef } from "react";

function ProductItem({
  label,
  price,
  salePrice,
  imgs,
  features = [],
  outOfStock = false,
}) {
  const featureDiv = useRef();
  const fadeDiv = useRef();
  useEffect(() => {
    console.log(featureDiv.current.offsetHeight);
    console.log(document.querySelector(".product-card-features").offsetHeight);
    fadeDiv.current.style.marginBottom = `-${featureDiv.current.offsetHeight}px`;
  }, [fadeDiv, featureDiv]);
  return (
    <div className="product-item-card">
      <div className="product-sale-percent-badge">
        {(((price - salePrice) * 100) / price).toFixed(0)}%
      </div>
      <SliderProduct imgs={imgs} />
      <div className="product-item-wrapper">
        <div className="product-item-title">{label}</div>
        <RatingProduct reviewNums={4} val={4} />
        <div className="row flex-space-between w-100 p-relative">
          {outOfStock ? (
            <div className="product-out-of-stock">Out of Stock</div>
          ) : (
            <>
              <div className="product-price-wrapper">
                {salePrice ? (
                  <>
                    <span className="product-item-price-old">{price}</span>
                    <span className="product-item-price-sale">{salePrice}</span>
                  </>
                ) : (
                  <span className="product-item-price">{price}</span>
                )}
              </div>
              <Button>
                <Icon
                  sx={{ width: "1.6rem" }}
                  fontSize="small"
                  baseClassName="fa-light"
                  className="fa-cart-plus"
                />
              </Button>
            </>
          )}
        </div>
        <div className="row-flex product-card-delivery">2-day Delivery</div>
        <div className="row-flex p-relative">
          <div className="row product-card-features" ref={featureDiv}>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div ref={fadeDiv} className="product-item-fade"></div>
    </div>
  );
}

export default ProductItem;
