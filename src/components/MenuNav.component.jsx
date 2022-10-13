import { Button, Divider, Stack, Box } from "@mui/material";
import React from "react";

import "./MenuNav.style.scss";
/**
 * @todo: error handling for when pages are not defined
 * @returns
 */
function NavMenu({
  pages = ["Home", "Supermarket", "Offers"],
  pages2 = ["Blog", "Contact"],
  pages3 = ["Help?", "Retailers"],
}) {
  return (
    <Stack
      className="menu-stack-header"
      direction="row"
      justifyContent="space-between"
      // alignItems="center"
      spacing={1}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        {pages.map((page) => (
          <Button key={page} className="menu-stack-header-item">
            {page}
          </Button>
        ))}

        {typeof pages2 !== "undefined" ? (
          <>
            <Divider
              light={true}
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
              }}
            />
            {pages2.map((page) => (
              <Button
                key={page}
                className="menu-stack-header-item"
                sx={{
                  display: { xs: "none", sm: "none", md: "none", lg: "block" },
                }}
              >
                {page}
              </Button>
            ))}
          </>
        ) : (
          ""
        )}

        {typeof pages3 !== "undefined" ? (
          <Divider
            light={true}
            orientation="vertical"
            variant="middle"
            flexItem
          />
        ) : (
          ""
        )}

        {typeof pages3 !== "undefined"
          ? pages3?.map((page) => (
              <Button key={page} className="menu-stack-header-item">
                {page}
              </Button>
            ))
          : ""}
      </Box>
    </Stack>
  );
}

export default NavMenu;
