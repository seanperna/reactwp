import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
function Annonce() {
  return (
    <Box marginBottom={2} sx={{ display: "flex", backgroundColor: "#fff7c1" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
      >
        <Typography variant="body2">
          This is an announcement official!
        </Typography>
      </Box>
      <Box>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <Close />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Annonce;
