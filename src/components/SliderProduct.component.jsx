import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { getElementDimensions } from "../libs/getElementDimensions";

import "./SliderProduct.style.scss";

function SliderProduct({ imgs, transition = 0.3 }) {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderCount, setSliderCount] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const slider = useRef();

  const dragging = useRef(false);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const currentIndex = useRef(0);
  const sliderRef = useRef(0);
  const animationRef = useRef(0);

  useEffect(() => {
    setSliderWidth(sliderRef.current.offsetWidth);
    setSliderCount(
      sliderRef.current.querySelectorAll(".product-slide-item").length
    );
    console.log(sliderWidth, sliderCount);
  }, []);

  const setPositionByIndex = useCallback(
    (w = dimensions.width) => {
      currentTranslate.current = currentIndex.current * -w;
      prevTranslate.current = currentTranslate.current;
      setSliderPosition();
    },
    [dimensions.width]
  );

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
  function setSliderPosition() {
    if (!sliderRef.current) return;
    sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  }
  const transitionOn = useCallback(() => {
    if (sliderRef.current)
      sliderRef.current.style.transition = `transform ${transition}s ease-out`;
  }, [transition]);

  const transitionOff = () => {
    if (sliderRef.current) sliderRef.current.style.transition = "none";
  };

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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setPositionByIndex, transitionOn]);
  const handleDot = (index) => {
    currentIndex.current = index;
    setActiveSlide(currentIndex.current);

    transitionOn();

    setPositionByIndex();
  };
  return (
    <div
      className="product-slide-container"
      // style={{
      //   height: sliderWidth,
      // }}
    >
      <div
        className="product-slider"
        ref={sliderRef}
        // style={{
        //   width: sliderWidth * sliderCount,
        //   height: sliderWidth,
        // }}
      >
        {imgs.map((img, index) => (
          <div key={index} className="product-slide-item">
            <img src={img.url} alt={img.label ?? "Product Image"} />
          </div>
        ))}
      </div>
      <div className="carousel-dot">
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
      </div>
    </div>
  );
}

export default SliderProduct;
