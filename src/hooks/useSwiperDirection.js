"use client"

import { useEffect, useState } from "react";

const useSwiperDirection = () => {
  const [direction, setDirection] = useState('horizontal');
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {

    const handleLoad = () => {
      setWidth(prev => prev = window.innerWidth);
    }

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    }

  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(prev => prev = window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }


  }, []);

  useEffect(() => {
    if (width <= 768) {
      setDirection('horizontal');
    } else {
      setDirection('vertical');
    }

  }, [width]);
  return {
    direction,
  }
}

export default useSwiperDirection;