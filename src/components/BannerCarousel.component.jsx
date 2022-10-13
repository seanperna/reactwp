import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";

import "./BannerCarousel.style.scss";

function BannerCarousel({
  imgs = [
    {
      url: "/asset/img/slider-banner-1.jpg",
    },
    {
      url: "/asset/img/slider-banner-2.jpg",
    },
    {
      url: "/asset/img/slider-banner-3.jpg",
    },
  ],
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    setSlideCount(document.querySelectorAll(".carousel-item").length);
  }, []);

  const handleClick = (arg) => {
    switch (arg) {
      case "prev":
        if (activeSlide === 0) {
          setActiveSlide(slideCount - 1);
          break;
        }
        setActiveSlide(activeSlide - 1);
        break;
      case "next":
        if (activeSlide === slideCount - 1) {
          setActiveSlide(0);
          break;
        }
        setActiveSlide(activeSlide + 1);
        break;
      default:
        break;
    }
  };
  const handleDot = (index) => {
    setActiveSlide(index);
  };

  return (
    <Container>
      <Box className="carousel-wrapper">
        <Box
          className="carousel"
          sx={{
            width: `${slideCount * 100}%`,
            transform: `translate(-${(activeSlide * 100) / slideCount}%)`,
          }}
        >
          {imgs.map((img, index) => {
            return (
              <section
                key={index}
                className={`carousel-item${
                  activeSlide === index ? " active" : ""
                }`}
              >
                <img src={`${img.url}`} />
              </section>
            );
          })}
        </Box>
        <Box className="carousel-control">
          <button className="prev" onClick={() => handleClick("prev")}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="next" onClick={() => handleClick("next")}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </Box>
        <Box className="carousel-dot">
          <ul>
            {imgs.map((img, index) => {
              return (
                <li
                  onClick={() => handleDot(index)}
                  key={index}
                  className={`${index === activeSlide ? "active" : ""}`}
                ></li>
              );
            })}
          </ul>
        </Box>
      </Box>
    </Container>
  );
}

export default BannerCarousel;
