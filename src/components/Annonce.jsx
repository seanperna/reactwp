import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

import "./Annonce.style.scss";

function Annonce(
  { msg = "This is an announcement official!" },
  cls = null,
  show = true
) {
  const [announceShow, setAnnounceShow] = useState(show);
  const [announceHeight, setAnnounceHeight] = useState(0);

  const handleClick = (e) => {
    setAnnounceShow(!announceShow);
  };

  useEffect(() => {
    setAnnounceHeight(document.querySelector("#annouce-bar").offsetHeight);
  }, []);

  const positionY = announceShow ? "0" : announceHeight;
  const maxheight = !announceShow ? 0 : 500;
  const opacity = !announceShow ? 0 : 1;
  return (
    <>
      <Box
        className={cls}
        id="annouce-bar"
        marginBottom={2}
        sx={{
          display: "flex",
          maxHeight: maxheight,
          opacity: opacity,
          transform: `translateY(-${positionY}px)`,
        }}
      >
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex", flexGrow: 1 }}
        >
          <Typography variant="body2">{msg}</Typography>
        </Box>
        <Box>
          <IconButton
            onClick={handleClick}
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <Close />
          </IconButton>
        </Box>
      </Box>
      {/* <button type="button" onClick={handleClick}>
        show
      </button> */}
    </>
  );
}

export default Annonce;
