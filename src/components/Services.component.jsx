import { Box, Icon } from "@mui/material";
import React from "react";

function Services() {
  return (
    <Box>
      <Box className="service-item">
        <Icon
          sx={{ width: "1.6rem" }}
          fontSize="small"
          baseClassName="fa-light"
          className="fa-box-taped"
        />
        <div>
          <h6>International Shipment</h6>

          <span className="desc">
            Your orders are shipped seamlessly between countries
          </span>
        </div>
      </Box>
      <Box className="service-item">
        <Icon
          sx={{ width: "1.6rem" }}
          fontSize="small"
          baseClassName="fa-light"
          className="fa-truck-clock"
        />
        <div>
          <h6>Extended 45 day returns</h6>
          <span className="desc">
            You have the right to return your orders within 45 days.
          </span>
        </div>
      </Box>
      <Box className="service-item">
        <Icon
          sx={{ width: "1.6rem" }}
          fontSize="small"
          baseClassName="fa-light"
          className="fa-credit-card"
        />
        <div>
          <h6>Secure Payment</h6>
          <span className="desc">
            Your payments are secure with our private security network.
          </span>
        </div>
      </Box>
    </Box>
  );
}

export default Services;
