import { Box, Button } from "@mui/material";
import React from "react";

import "./Ad.style.scss";

function Ad({
  minHeight = 0,
  bg = "",
  bgColor = "transparent",
  slogan = "WEEKEND DISCOUNT",
  badge = false,
  title = "New Smartphones",
  desc = "Don't miss the last opportunity",
  to = "#",
  bgSize = "contain",
}) {
  return (
    <>
      <Box
        className="home-banner-wrapper"
        sx={{
          background: `${bgColor} url(${bg}) right bottom/${bgSize} no-repeat`,
          minHeight: minHeight === 0 ? "none" : minHeight,
        }}
      >
        <span className="slogan">{slogan}</span>
        <h6 className="title">{title}</h6>
        <span className="desc">{desc}</span>
        <br />
        <Button variant="contained" className="btn">
          Shop Now
        </Button>
      </Box>
    </>
  );
}

export default Ad;
