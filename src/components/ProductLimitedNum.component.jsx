import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Icon,
  LinearProgress,
  linearProgressClasses,
  styled,
} from "@mui/material";
import React from "react";
import RatingProduct from "./RatingProduct.component";
import SliderProduct from "./SliderProduct.component";

import "./ProductLimitedNum.style.scss";
import { useEffect } from "react";
import { useRef } from "react";

function ProductLimitedNum({ label, price, salePrice, imgs, features = [] }) {
  const featureDiv = useRef();
  const fadeDiv = useRef();

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#fec21d" : "#308fe8",
    },
  }));
  return (
    <div className="product-item-limited-num-card">
      <div className="product-sale-percent-badge">
        {(((price - salePrice) * 100) / price).toFixed(0)}%
      </div>
      <SliderProduct imgs={imgs} />
      <div className="product-item-wrapper">
        <div className="product-item-title">{label}</div>
        <RatingProduct reviewNums={4} val={4} />
        <div className="row flex-space-between w-100 p-relative">
          <div className="product-price-wrapper">
            {salePrice ? (
              <>
                <span className="product-item-price-sale">{salePrice}</span>
                <span className="product-item-price-old">{price}</span>
              </>
            ) : (
              <span className="product-item-price">{price}</span>
            )}
          </div>
        </div>

        <div className="product-item-remained">
          <span className="available">
            available:<strong>20</strong>
          </span>
          <span className="total">
            total:<strong>45</strong>
          </span>
        </div>

        <div className="product-progress-bar-wrapper">
          <BorderLinearProgress variant="determinate" value={20} />
        </div>
        <div className="row-flex product-card-delivery">2-day Delivery</div>
        {/* <div className="row-flex p-relative">
          <div className="row product-card-features" ref={featureDiv}>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
      <div ref={fadeDiv} className="product-item-fade"></div>
    </div>
  );
}

export default ProductLimitedNum;
