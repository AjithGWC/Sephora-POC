import React, { useState, useEffect, useRef, useContext } from 'react';
import SlideContent from './slideContent';
import './SlidingPanels.css';
import { GlobalContext } from '../globalContext/context';

const SlidingPanels = ({brand, products}) => {
  const slidesContainerRef = useRef(null);

  const {
    state: { activeIndex },
    setState: { setActiveIndex, setProduct },
  } = useContext(GlobalContext);

  // Handle panel clicking
  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };

  // Update content width on resize
  const checkWidth = () => {
    if (slidesContainerRef.current && window.innerWidth > 480) {
      const activeSlide = slidesContainerRef.current.querySelector('.active');
      if (activeSlide) {
        const slideWidth = activeSlide.offsetWidth;
        const slideContents = slidesContainerRef.current.querySelectorAll('.slide-content');
        slideContents.forEach(content => {
          // content.style.width = `${slideWidth}px`;
        });
      }
    }
  };

  // Add resize event listeners
  useEffect(() => {
    checkWidth();
    
    const handleResize = () => {
      checkWidth();
    };

    window.addEventListener('resize', handleResize);
    
    // Debounced resize handler
    let resizeTimeout;
    const handleResizeEnd = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkWidth, 500);
    };
    
    window.addEventListener('resize', handleResizeEnd);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResizeEnd);
    };
  }, []);

  // Panel data
//   const panels = [
//     { 
//       title: "Section title 1", 
//       colorClass: "brand1"
//     },
//     { 
//       title: "Section title 2", 
//       colorClass: "brand2" 
//     },
//     { 
//       title: "Section title 3", 
//       colorClass: "brand3" 
//     },
//     { 
//       title: "Section title 4", 
//       colorClass: "brand4" 
//     },
//     { 
//       title: "Section title 5", 
//       colorClass: "brand5" 
//     },
//     { 
//       title: "Section title 6", 
//       colorClass: "brand6" 
//     },
//     { 
//       title: "Section title 7", 
//       colorClass: "brand7" 
//     },
//     { 
//       title: "Section title 8", 
//       colorClass: "brand8" 
//     },
//     { 
//       title: "Section title 9", 
//       colorClass: "brand9" 
//     },
//     { 
//       title: "Section title 10", 
//       colorClass: "brand10" 
//     },
//   ];

  return (
    <div className="container">
      <div className="container-slides">
        <ul className="slides" ref={slidesContainerRef}>
          {products.map((product, index) => (
            <li 
              key={index} 
              className={`slide balanced${(index % 10) + 1} ${index === activeIndex ? 'active' : ''}`}
            >
              {console.log("--------", product.name)}
              <a 
                href="#" 
                className="action" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(index);
                  setProduct(product.name);
                }}
              >
                <span>{product.name}</span>
              </a>
              {index === activeIndex && (
                <div className="slide-content h-full">
                  <SlideContent brand={brand} productName={product.name} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default SlidingPanels;