import React, { useState } from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import Icon from "@mui/material/Icon";

import MenuIcon from "@mui/icons-material/Menu";

import "./MenuDirectory.style.scss";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function MenuDirectory(props) {
  // local states
  const [open, setOpen] = useState(true);

  // props destructring
  const { departmentItems } = props;

  // opening and closing header collapse
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List component="nav">
      <ListItem className="drawer-header-menu">
        <ListItemButton
          sx={{ backgroundColor: "#f7f8f9", borderRadius: "10px" }}
          onClick={handleClick}
        >
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText sx={{}} className="header-text">
            All Departments
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {departmentItems.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                pl: 4,
                py: 0,
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
                primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}

export default MenuDirectory;
