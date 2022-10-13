import { Button, Icon, Stack, Typography } from "@mui/material";
import React from "react";

import "./HomeLatestOffers.style.scss";
import ProductLimitedNum from "./ProductLimitedNum.component";

function HomeLatestOffers() {
  return (
    <>
      <Stack
        className="latest-offers-title"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Typography className="label" variant="h5" gutterBottom>
          Lastest Offers
        </Typography>
        <Button
          variant="text"
          endIcon={
            <Icon
              sx={{ width: "1.6rem" }}
              fontSize="small"
              baseClassName="fa-light"
              className="fa-arrow-right-long"
            />
          }
        >
          View All
        </Button>
      </Stack>
      <Stack
        className="latest-offers-content"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 2 }}
      >
        <ProductLimitedNum
          label="Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB"
          price={699.99}
          salePrice={629.99}
          features={[
            "Screen Size 10.9 in",
            "Operating System Apple iOS",
            "Product Length 9.74 in",
          ]}
          delivery={2}
          imgs={[
            {
              id: 1,
              url: "asset/img/demo/ipad (1).jpg",
            },
            {
              id: 2,
              url: "asset/img/demo/ipad (2).jpg",
            },
            {
              id: 3,
              url: "asset/img/demo/ipad (3).jpg",
            },
          ]}
        />
        <ProductLimitedNum
          label="Apple iPhone 13 ProMax Unlock 256GB"
          price={1299.99}
          salePrice={1029.99}
          features={[
            "32Mpx Camera with Night Mode",
            "iOS 16 with face mode",
            "6in Screen Size OLED",
          ]}
          delivery={2}
          imgs={[
            {
              id: 1,
              url: "asset/img/demo/iphone (1).jpg",
            },
            {
              id: 2,
              url: "asset/img/demo/iphone (2).jpg",
            },
            {
              id: 3,
              url: "asset/img/demo/iphone (3).jpg",
            },
          ]}
        />
        <ProductLimitedNum
          label="Apple iPhone 13 ProMax Unlock 256GB"
          price={1299.99}
          salePrice={1029.99}
          features={[
            "32Mpx Camera with Night Mode",
            "iOS 16 with face mode",
            "6in Screen Size OLED",
          ]}
          delivery={2}
          imgs={[
            {
              id: 1,
              url: "asset/img/demo/iphone (1).jpg",
            },
            {
              id: 2,
              url: "asset/img/demo/iphone (2).jpg",
            },
            {
              id: 3,
              url: "asset/img/demo/iphone (3).jpg",
            },
          ]}
        />
        <ProductLimitedNum
          label="Apple iPhone 13 ProMax Unlock 256GB"
          price={1299.99}
          salePrice={1029.99}
          features={[
            "32Mpx Camera with Night Mode",
            "iOS 16 with face mode",
            "6in Screen Size OLED",
            "6in Screen Size OLED",
            "6in Screen Size OLED",
            "6in Screen Size OLED",
          ]}
          delivery={2}
          imgs={[
            {
              id: 1,
              url: "asset/img/demo/iphone (1).jpg",
            },
            {
              id: 2,
              url: "asset/img/demo/iphone (2).jpg",
            },
            {
              id: 3,
              url: "asset/img/demo/iphone (3).jpg",
            },
          ]}
        />
        <ProductLimitedNum
          label="Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB"
          price={699.99}
          salePrice={629.99}
          features={[
            "Screen Size 10.9 in",
            "Operating System Apple iOS",
            "Product Length 9.74 in",
          ]}
          delivery={2}
          imgs={[
            {
              id: 1,
              url: "asset/img/demo/ipad (1).jpg",
            },
            {
              id: 2,
              url: "asset/img/demo/ipad (2).jpg",
            },
            {
              id: 3,
              url: "asset/img/demo/ipad (3).jpg",
            },
          ]}
        />
      </Stack>
    </>
  );
}

export default HomeLatestOffers;
