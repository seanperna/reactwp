import { Container, Box } from "@mui/material";
import React from "react";

import "./Brands.style.scss";

function Brands({
  brands = [
    {
      url: "/asset/img/brands/1.png",
    },
    {
      url: "/asset/img/brands/2.png",
    },
    {
      url: "/asset/img/brands/3.png",
    },
    {
      url: "/asset/img/brands/4.png",
    },
    {
      url: "/asset/img/brands/5.png",
    },
    {
      url: "/asset/img/brands/6.png",
    },
    {
      url: "/asset/img/brands/7.png",
    },
  ],
}) {
  return (
    <Container>
      <Box className="brand-wrapper">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            <img src={brand.url} />
          </div>
        ))}
      </Box>
    </Container>
  );
}

export default Brands;
