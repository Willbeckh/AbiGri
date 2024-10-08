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
        <div className=" absolute inset-0 bg-primary-background min-h-screen bg-opacity-50 flex items-center">
          <div className="text-white w-9/12 sm:w-screen lg:m-12 md:m-8 ps-14 leading-9">
            <h1 className=" md:text-6xl text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl">{description}</p>
          </div>
          <div className="absolute bottom-3 right-8">
            <button
              className={`btn bg-button outline-none text-2xl text-white`}
            >
              Buy or Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
