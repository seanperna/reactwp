import React, { useState } from "react";
import {
  Box,
  Badge,
  Link,
  Container,
  styled,
  FormControl,
  Select,
  MenuItem,
  Stack,
  IconButton,
  InputBase,
} from "@mui/material";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import "./Navbar.style.scss";
import SearchBar from "./SearchBar";
import ResponsiveDrawer from "./ResponsiveDrawer";
import MenuDirectoryNav from "./MenuDirectoryNav.component";
import MenuNav from "./MenuNav.component";
import MenuPromo from "./MenuPromo.component";

import logoImg from "../asset/img/logo-dark.png";

function Navbar({ menu }) {
  // mock data
  const languages = ["ENG", "FRE", "FA"];
  const currencies = ["USD", "CAD", "IRR"];
  const menuName = "All Departments";
  const departmentItems = [
    {
      id: 1,
      label: "Cell Phones",
      icon: "fa-mobile-notch",
      bg: "/asset/img/phoneBgMenu.jpg",
      submenu: [
        "accessories",
        "cases",
        "refurbished",
        "iphone",
        "galaxy",
        "huawi",
        "nokia",
      ],
    },
    {
      id: 2,
      label: "Computers & Accessories",
      icon: "fa-laptop",
      bg: "/asset/img/macBgMenu.jpg",
      submenu: [
        "accessories",
        "cases",
        "refurbished",
        "iphone",
        "galaxy",
        "huawi",
        "nokia",
      ],
    },
    {
      id: 3,
      label: "Television & Video",
      icon: "fa-tv",
      bg: "/asset/img/tvBgMenu.jpg",
      submenu: [
        "accessories",
        "cases",
        "refurbished",
        "iphone",
        "galaxy",
        "huawi",
        "nokia",
      ],
    },
    {
      id: 4,
      label: "Smartwarches",
      icon: "fa-watch-apple",
      submenu: [
        "accessories",
        "cases",
        "refurbished",
        "iphone",
        "galaxy",
        "huawi",
        "nokia",
      ],
    },
    {
      id: 5,
      label: "Headphones",
      icon: "fa-headphones-simple",
    },
    {
      id: 6,
      label: "Camera & Photo",
      icon: "fa-camera-retro",
    },
    {
      id: 7,
      label: "Video Games",
      icon: "fa-gamepad-modern",
    },
    {
      id: 8,
      label: "Sports & Outdoors",
      icon: "fa-sportsball",
    },
    {
      id: 9,
      label: "Best Sellers",
      icon: "fa-fire",
    },
    {
      id: 10,
      label: "Top 100 Offers",
      icon: "fa-sparkles",
    },
    {
      id: 11,
      label: "New Arrivals",
      icon: "fa-radio",
    },
  ];

  // initiating local states
  const [state, setState] = useState({
    lang: languages[0],
    cur: currencies[0],
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const Item = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#fff" : "#1A2027",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: 12,
  }));

  /**
   * Function in charge of setting currency change
   * and language to state
   * @param {event} e
   */
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  /**
   * Function responsible for opening and closing
   * Drawer component
   */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /**
   *  Syncing search query between inputbase
   * components
   * @param {*} e
   */
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <Container maxWidth="lg">
        {/* TOP ROW NAVBAR -- Start */}
        <Stack
          className="header-submenu-wrapper"
          direction="row"
          justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
          spacing={1}
        >
          <Stack
            direction="row"
            spacing={1}
            display={{ xs: "none", sm: "none", md: "flex" }}
          >
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
        {/* TOP ROW NAVBAR -- End */}

        {/* BOTTOM ROW NAVBAR / DESKTOP -- Start */}
        <Stack
          display={{ xs: "none", sm: "none", md: "flex" }}
          className="header-wrapper"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <img className="logo" src={logoImg} alt="logo" />

          {/* Search Component for Desktop */}
          <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />

          <Box className="header-account-icon">
            <PersonOutlineRoundedIcon
              fontSize="large"
              sx={{ marginRight: 1 }}
            />
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
        {/* BOTTOM ROW NAVBAR / DESKTOP -- End */}

        {/* BOTTOM ROW NAVBAR / MOBILE -- Start */}

        {/* Drawer component */}
        <ResponsiveDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          departmentItems={departmentItems}
          menu={menu}
        />

        <Stack
          display={{ sm: "flex", md: "none" }}
          className="header-wrapper header-wrapper-mobile"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          {/* Hamburger Icon for Sidebar */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Box className="logo-wrapper-sm">
            <img className="logo" src={logoImg} alt="logo" />
          </Box>
          <Box
            className="header-account-icon"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <PersonOutlineRoundedIcon
              fontSize="large"
              sx={{ marginRight: 1 }}
            />
            <span>Sign in</span>
            <span>Account</span>
          </Box>

          <Box className="header-cart-icon">
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Badge>

            <div>Total</div>
            <div>$0.00</div>
          </Box>
        </Stack>
        <Stack
          display={{ sm: "flex", md: "none" }}
          className="header-wrapper header-wrapper-mobile"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          {/* Search Component for Mobile View */}
          <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
        </Stack>
        {/* BOTTOM ROW NAVBAR / MOBILE -- End */}
      </Container>

      {/* MENUBAR -- Start */}
      <Box className="menu-bar-container">
        <Container maxWidth="lg">
          <Stack
            sx={{ mt: 1 }}
            direction="row"
            justifyContent="space-between"
            // alignItems="center"
            spacing={1}
          >
            <Box sx={{ display: "flex" }}>
              <MenuDirectoryNav
                departmentItems={departmentItems}
                menuName={menuName}
              />

              {/* horizontal menubar top */}
              <MenuNav />
            </Box>

            {/* Dropdown menu promotions */}
            <MenuPromo />
          </Stack>
          {/* MENUBAR -- End */}
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
