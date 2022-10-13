import React from "react";
import { Container, Box, Stack } from "@mui/material";
import BannerCarouselTouch from "../../components/BannerCarouselTouch.component";
import Brands from "../../components/Brands.component";
import Sidebar from "../../components/Sidebar.component";
import Ad from "../../components/Ad.component";

import "./Homepage.style.scss";
import HomeBestSellers from "../../components/HomeBestSellers.component";
import HomeLatestOffers from "../../components/HomeLatestOffers.component";
import NewsLetterSignUp from "../../components/NewsLetterSignUp.component";

function Homepage() {
  const url = "";
  return (
    <>
      <BannerCarouselTouch />
      <Brands />
      <Container>
        <div className="home-main-wrapper">
          <Sidebar />
          <main className="home-main-content">
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Ad
                variant="horizontal"
                bg="asset/img/banner-2.jpg"
                slogan="WEEKEND DISCOUNT"
                badge={false}
                title="Home Speakers"
                desc="Don't miss the last opportunity"
                to="#"
              />
              <Ad
                variant="horizontal"
                bg="asset/img/banner-box.jpg"
                slogan="WEEKEND DISCOUNT"
                badge={false}
                title="New Smartphones"
                desc="Don't miss the last opportunity"
                to="#"
              />
            </Stack>
            <HomeBestSellers />
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Ad
                variant="horizontal"
                bg="asset/img/banner-4.jpg"
                slogan="WEEKEND DISCOUNT"
                badge={false}
                title="Momentum 3 Headphone"
                desc="Don't miss the last opportunity"
                to="#"
                bgSize="cover"
              />
            </Stack>
            <HomeLatestOffers />
          </main>
        </div>
      </Container>
      <NewsLetterSignUp />
    </>
  );
}

export default Homepage;
