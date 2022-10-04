import React, { useState } from "react";
import { Box, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ searchQuery, handleSearch }) {
  return (
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
      <Box sx={{ p: { sm: "7px", xs: "4px", md: "10px" } }}>
        <SearchIcon className="search-icon" />
      </Box>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Products..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <Button>Search</Button>
    </Box>
  );
}

export default SearchBar;
