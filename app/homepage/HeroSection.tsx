import React from "react";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  title: string;
  description: string;
  bannerImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  bannerImage,
}) => {
  return (
    <div className={styles.container}>
      <div
        className="w-full min-h-screen bg-cover bg-center"
        style={{ marginTop: "-74px", backgroundImage: `url(${bannerImage})` }}
      ></div>
      <div>
        <div className="absolute inset-0 bg-primary-background min-h-screen bg-opacity-50 flex items-center">
          <div className="text-white w-11/12 sm:w-9/12 lg:m-12 md:m-8 px-6 sm:px-14 md:px-20 leading-9">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">{description}</p>
          </div>
          <div className="absolute bottom-8 right-6 sm:right-8 md:right-12">
            <button className="btn bg-button outline-none text-lg sm:text-xl md:text-2xl text-white">
              Buy or Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
