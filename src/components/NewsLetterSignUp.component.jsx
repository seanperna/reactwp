import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "./NewsLetterSignUp.style.scss";
import NewsPicture from "../asset/img/pattern-2.png";
function NewsLetterSignUp() {
  return (
    <Box
      sx={{
        backgroundColor: "#041e42",
      }}
    >
      <Container>
        <footer
          className="news-letter-footer row-flex w-100 flex-space-between"
          style={{
            backgroundImage: `url("${NewsPicture}")`,
          }}
        >
          <div>
            <p className="heading">Sign Up For Newsletters</p>
            <p className="subheading">
              Get E-mail updates about our latest shop and{" "}
              <span>special offers</span>
            </p>
          </div>
          <Box
            className="search-box"
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Your email address"
              type="email"
            />
            <Button>Search</Button>
          </Box>
        </footer>
      </Container>
    </Box>
  );
}

export default NewsLetterSignUp;
