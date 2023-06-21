import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",

  
  
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "0px",
  fontSize: "50px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  transition: "color 0.3s", // Add transition property
  // Add hover styles
  ":hover": {
    color: "red",// Define the desired hover color
  },
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "0px",
  fontSize: "50px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
        <i class="uil uil-angle-left-b"></i>
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
        <i class="uil uil-angle-right-b"></i>
        </div>
      </div>
      <LazyLoadImage
        src={slides[currentIndex].url}
        alt={`Slide ${currentIndex}`}
        width="100%"
        height="100%"
        style={slideStyles}
        effect="blur"
        
      />
      
      
      
    </div>
  );
};

export default ImageSlider;