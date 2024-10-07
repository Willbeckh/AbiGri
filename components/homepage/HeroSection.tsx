import React from "react";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  bannerImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  bannerImage,
}) => {
  return (
    <div className={styles.container}>
      {/* <div
      //   className="w-full min-h-screen bg-cover bg-center"
      //   style={{ marginTop: "-74px", backgroundImage: `url(${bannerImage})` }}
      // > */}
      <div>
        <div
          className={` w-full min-h-screen bg-cover bg-center`}
          style={{
            marginTop: "-74px",
            backgroundImage: `url("https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lLpTbHLThS2MKBmtNnCMwg.jpeg")`,
          }}
        ></div>

        <div className=" absolute inset-0 bg-primary-background  bg-opacity-50 flex items-center">
          <div className="text-white w-9/12 m-12 md:m-8 ps-14 leading-9">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to the Future of Agriculture.
            </h1>
            <p className="text-xl md:text-2xl">{subtitle}</p>
            <p className="text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste
              ad nesciunt, suscipit illo voluptas quod quos a unde, nam sint
              possimus fugit atque recusandae officia, asperiores facere optio
              repudiandae. Iusto voluptas neque hic quam ipsa repellendus,
              soluta, inventore culpa consequuntur architecto earum iure est
              deleniti perferendis, aspernatur commodi provident. Sit totam
              veritatis a distinctio placeat dolores accusantium numquam esse!
            </p>
          </div>
          <div className="absolute bottom-3 right-4">
            <button className={`btn bg-button text-2xl text-white`}>
              Buy or Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
