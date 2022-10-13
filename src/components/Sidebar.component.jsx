import { Stack } from "@mui/material";
import React from "react";

import Ad from "./Ad.component";
import Services from "./Services.component";

function Sidebar({ url = "" }) {
  return (
    <Stack className="home-sidebar" direction={"column"} spacing={4}>
      <Services sx={{ marginBottom: "1rem" }} />
      <Ad
        minHeight={450}
        bg="asset/img/banner-3.jpg"
        bgColor="#fbfbfb"
        slogan="SUPER DISCOUNT"
        badge={false}
        title="New Phone 11"
        desc="Don't miss the last opportunity"
        to="#"
      />
      {/* <LimitedOffer /> */}
    </Stack>
  );
}

export default Sidebar;
