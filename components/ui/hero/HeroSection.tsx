"use client";
import React from "react";
import HeroContent from "./hero-content";
import ImageSlider from "./image-slider";

interface ImageSliderProps {
  images: {
    banner_image: string;
    alt: string;
  }[];
}

const HeroSection: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <>
      <div className="w-11/12 max-w-7xl overflow-hidden grid md:grid-cols-2 gap-y-2 gap-x-4">
        <div className="cols-span-1 p-8 ">
          <HeroContent />
        </div>
        <div className="py-6 h-fit my-auto">
          <ImageSlider images={images} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
