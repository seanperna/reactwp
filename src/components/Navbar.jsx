import React, { useState } from "react";
import {
  Box,
  Button,
  Badge,
  Link,
  Container,
  styled,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Stack,
  IconButton,
  Divider,
  InputBase,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Navbar({ menu }) {
  const languages = ["ENG", "FRE", "FA"];
  const currencies = ["USD", "CAD", "IRR"];

  const [state, setState] = useState({
    lang: languages[0],
    cur: currencies[0],
  });

  const Item = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#fff" : "#1A2027",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: 12,
  }));

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="lg">
      <Stack direction="row" justifyContent="space-between" spacing={1}>
        <Stack direction="row" spacing={1}>
          {menu.map((m, index) => {
            return (
              <Item href="#" underline="none" key={index}>
                {m.label}
              </Item>
            );
          })}
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Item href="#" underline="none">
            Order Tracking
          </Item>
          <FormControl className="header-drop-menu">
            <Select
              onChange={handleChange}
              sx={{ fontSize: "12px" }}
              name="lang"
              input={<InputBase size="small" value={state.lang} />}
            >
              {languages.map((language) => (
                <MenuItem
                  sx={{ fontSize: "12px" }}
                  key={language}
                  value={language}
                >
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className="header-drop-menu">
            <Select
              onChange={handleChange}
              name="cur"
              sx={{ fontSize: "12px" }}
              input={<InputBase size="small" value={state.cur} />}
            >
              {currencies.map((currency) => (
                <MenuItem
                  sx={{ fontSize: "12px" }}
                  key={currency}
                  value={currency}
                >
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Stack
        className="header-wrapper"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <img
          className="logo"
          src="https://klbtheme.com/machic/wp-content/uploads/2021/08/logo-dark.png"
          alt="logo"
        />
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
          <Box sx={{ p: "10px" }}>
            <SearchIcon className="search-icon" />
          </Box>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Products..." />
          <Button>Search</Button>
        </Box>
        <Box className="header-account-icon">
          <PersonOutlineRoundedIcon fontSize="large" sx={{ marginRight: 1 }} />
          <span>Sign in</span>
          <span>Account</span>
        </Box>
        <Box className="header-fav-icon">
          <Badge badgeContent={1} color="secondary">
            <FavoriteBorderRoundedIcon fontSize="large" />
          </Badge>
        </Box>
        <Box className="header-cart-icon">
          <Badge badgeContent={1} color="secondary">
            <ShoppingCartOutlinedIcon fontSize="large" />
          </Badge>

          <div>Total</div>
          <div>$0.00</div>
        </Box>
      </Stack>
    </Container>
  );
}

export default Navbar;
