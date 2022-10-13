import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import { Container, Box, Button } from "@mui/material";
import { getElementDimensions } from "../libs/getElementDimensions";

import "./BannerCarousel.style.scss";

function BannerCarouselTouch({
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
  children,
  onSlideComplete,
  onSlideStart,
  activeIndex = null,
  threshHold = 100,
  transition = 0.3,
  scaleOnDrag = false,
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const dragging = useRef(false);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const currentIndex = useRef(0);
  const sliderRef = useRef(0);
  const animationRef = useRef(0);

  useEffect(() => {
    setSlideCount(document.querySelectorAll(".carousel-item").length);
  }, []);

  const setPositionByIndex = useCallback(
    (w = dimensions.width) => {
      currentTranslate.current = currentIndex.current * -w;
      prevTranslate.current = currentTranslate.current;
      setSliderPosition();
    },
    [dimensions.width]
  );
  const transitionOn = useCallback(() => {
    if (sliderRef.current)
      sliderRef.current.style.transition = `transform ${transition}s ease-out`;
  }, [transition]);

  const transitionOff = () => {
    if (sliderRef.current) sliderRef.current.style.transition = "none";
  };

  // watch for a change in activeIndex prop
  useEffect(() => {
    if (activeIndex !== currentIndex.current) {
      transitionOn();
      currentIndex.current = activeIndex;
      setPositionByIndex();
    }
  }, [activeIndex, setPositionByIndex, transitionOn]);

  useLayoutEffect(() => {
    if (sliderRef.current) {
      // no animation on startIndex
      transitionOff();
      // set width after first render
      setDimensions(getElementDimensions(sliderRef.current.parentElement));

      // set position by startIndex
      setPositionByIndex(
        getElementDimensions(sliderRef.current.parentElement).width
      );
    }
  }, [setPositionByIndex]);

  // add event listeners
  useEffect(() => {
    // set width if window resizes
    const handleResize = () => {
      transitionOff();
      if (sliderRef.current) {
        const { width, height } = getElementDimensions(sliderRef.current);
        setDimensions({ width, height });
        setPositionByIndex(width);
      }
    };

    const handleKeyDown = ({ key }) => {
      // HACK: Non-Null Assertion operator
      const arrowsPressed = ["ArrowRight", "ArrowLeft"].includes(key);
      if (arrowsPressed) transitionOn();
      if (arrowsPressed && onSlideStart) {
        onSlideStart(currentIndex.current);
      }
      if (key === "ArrowRight" && currentIndex.current < slideCount - 1) {
        currentIndex.current += 1;
        setActiveSlide(currentIndex.current);
      }
      if (key === "ArrowLeft" && currentIndex.current > 0) {
        currentIndex.current -= 1;
        setActiveSlide(currentIndex.current);
      }
      if (arrowsPressed && onSlideComplete)
        onSlideComplete(currentIndex.current);
      setPositionByIndex();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    slideCount,
    setPositionByIndex,
    onSlideComplete,
    onSlideStart,
    transitionOn,
  ]);

  function pointerStart(index) {
    return function (event) {
      transitionOn();
      currentIndex.current = index;
      startPos.current = event.pageX;
      dragging.current = true;
      animationRef.current = requestAnimationFrame(animation);
      if (sliderRef.current) sliderRef.current.style.cursor = "grabbing";
      // if onSlideStart prop - call it
      if (onSlideStart) onSlideStart(currentIndex.current);
    };
  }

  function pointerMove(event) {
    if (dragging.current) {
      const currentPosition = event.pageX;
      currentTranslate.current =
        prevTranslate.current + currentPosition - startPos.current;
    }
  }

  function pointerEnd() {
    // HACK: Non-Null Assertion operator
    transitionOn();
    cancelAnimationFrame(animationRef.current);
    dragging.current = false;
    const movedBy = currentTranslate.current - prevTranslate.current;
    // console.log(threshHold);
    // if moved enough negative then snap to next slide if there is one
    if (movedBy < -threshHold && currentIndex.current < slideCount - 1) {
      currentIndex.current += 1;
      setActiveSlide(currentIndex.current);
    }

    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > threshHold && currentIndex.current > 0) {
      currentIndex.current -= 1;
      setActiveSlide(currentIndex.current);
    }

    transitionOn();

    setPositionByIndex();
    sliderRef.current.style.cursor = "grab";
    // if onSlideComplete prop - call it
    if (onSlideComplete) onSlideComplete(currentIndex.current);
  }

  function animation() {
    setSliderPosition();
    if (dragging.current) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    if (!sliderRef.current) return;
    sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  }

  const handleClick = (arg) => {
    switch (arg) {
      case "prev":
        if (activeSlide === 0) {
          // setActiveSlide(slideCount - 1);
          currentIndex.current = slideCount - 1;
          setActiveSlide(currentIndex.current);
          break;
        }
        // setActiveSlide(activeSlide - 1);
        currentIndex.current -= 1;
        setActiveSlide(currentIndex.current);
        break;
      case "next":
        if (activeSlide === slideCount - 1) {
          currentIndex.current = 0;
          setActiveSlide(currentIndex.current);
          break;
        }
        currentIndex.current += 1;
        setActiveSlide(currentIndex.current);
        break;
      default:
        break;
    }
    transitionOn();

    setPositionByIndex();
  };
  const handleDot = (index) => {
    currentIndex.current = index;
    setActiveSlide(currentIndex.current);

    transitionOn();

    setPositionByIndex();
  };

  return (
    <Container>
      <Box className="carousel-wrapper">
        <Box
          className="carousel"
          data-testid="slider"
          ref={sliderRef}
          sx={{
            width: `${slideCount * 100}%`,
            display: "inline-flex",
            willChange: "transform, scale",
            cursor: "grab",
            // transform: `translate(-${lastTranslate}%)`,
          }}
        >
          {imgs.map((img, index) => {
            return (
              <section
                onPointerDown={pointerStart(index)}
                onPointerMove={pointerMove}
                onPointerUp={pointerEnd}
                onPointerLeave={() => {
                  if (dragging.current) pointerEnd();
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                style={{
                  touchAction: "none",
                }}
                key={index}
                className={`carousel-item${
                  activeSlide === index ? " active" : ""
                }`}
              >
                <img
                  onDragStart={(e) => e.preventDefault()}
                  src={`${img.url}`}
                />
                <div className="promo-content">
                  <span className="promo-badge">WEEKEND DISCOUNT</span>
                  <span className="promo-title">
                    Great Stores
                    <br />
                    <strong>Great Choices</strong>
                  </span>
                  <span className="promo-desc">
                    Last call for up to <strong>30%</strong> off!
                  </span>
                  <Button variant="contained" className="promo-button">
                    Shop Now
                  </Button>
                </div>
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

export default BannerCarouselTouch;
