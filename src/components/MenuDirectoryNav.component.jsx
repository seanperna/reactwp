import React, { useState, useEffect } from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";

import Icon from "@mui/material/Icon";

import MenuIcon from "@mui/icons-material/Menu";

import "./MenuDirectoryNav.style.scss";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function MenuDirectoryNav(props) {
  // local states
  const [open, setOpen] = useState(true);
  const [subHeight, setSubHeight] = useState(0);
  const [subWidth, setSubWidth] = useState(0);

  // props destructring
  const { departmentItems, menuName } = props;

  useEffect(() => {
    const h = document.querySelector(".nav-list-group").offsetHeight;
    setSubHeight(h);
    const w = document.querySelector(".nav-list-group").offsetWidth;
    setSubWidth(150 + w);
  }, []);

  // opening and closing header collapse
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      component="nav"
      disablePadding
      className="nav-collapse-menu"
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "inline-block",
        },
      }}
    >
      <ListItem className="nav-header-menu">
        <ListItemButton
          sx={{ backgroundColor: "#f7f8f9", pl: 4 }}
          onClick={handleClick}
        >
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText sx={{}} className="header-text">
            {menuName ?? "All Departments"}
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className="nav-list-group" component="div" disablePadding>
          <div className="nav-list-group-wrapper">
            {departmentItems.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                className="nav-list-group-item"
              >
                <ListItemButton
                  sx={{
                    pl: 4,
                    py: 1,
                    minHeight: 32,
                  }}
                >
                  <ListItemIcon>
                    <Icon
                      sx={{ width: "1.6rem" }}
                      fontSize="small"
                      baseClassName="fa-light"
                      className={item.icon}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                  {item.submenu ? (
                    <Icon
                      edge="end"
                      sx={{ width: "1.6rem" }}
                      fontSize="small"
                      baseClassName="fa-light"
                      className="fa-angle-right"
                    />
                  ) : (
                    ""
                  )}
                </ListItemButton>
                {item.submenu ? (
                  <List
                    className="nav-list-sub"
                    component="div"
                    disablePadding
                    sx={{
                      height: subHeight,
                      width: item.bg ? subWidth : "auto",
                      backgroundImage: item.bg ? `url("${item.bg}")` : "",
                    }}
                  >
                    <Typography
                      className="title"
                      variant="body2"
                      sx={{ pb: 1 }}
                      color="text.secondary"
                    >
                      {item.label}
                    </Typography>
                    {item.submenu.map((i, index) => (
                      <ListItemButton key={index} className="nav-list-sub-item">
                        <ListItemText
                          primary={i}
                          primaryTypographyProps={{
                            fontSize: 13,
                            fontWeight: "medium",
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                ) : (
                  ""
                )}
              </ListItem>
            ))}
          </div>
        </List>
      </Collapse>
    </List>
  );
}

export default MenuDirectoryNav;
