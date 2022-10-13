import { Icon, Rating, Stack } from "@mui/material";
import React from "react";

function RatingProduct({ val, reviewNums }) {
  const [value, setValue] = React.useState({ val });

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: "1rem" }}
    >
      <Rating
        defaultValue={2}
        size="small"
        value={2}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <span
        className="review-counts"
        style={{
          fontSize: ".9rem",
        }}
      >
        <Icon
          sx={{ width: "1.6rem", color: "#eee", position: "relative" }}
          // fontSize="small"
          baseClassName="fa-solid"
          className="fa-comment"
        >
          <span
            className="small-text"
            style={{
              position: "absolute",
              left: 2,
              top: 5,
              color: "#777",
              width: 20,
              textAlign: "center",
              fontSize: "0.7rem",
            }}
          >
            {reviewNums}
          </span>
        </Icon>
      </span>
    </Stack>
  );
}

export default RatingProduct;
