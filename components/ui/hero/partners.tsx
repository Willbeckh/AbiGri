import React from "react";
import Image from "next/image";

interface ImgProps {
  src: string;
  alt: string;
}

const logos: ImgProps[] = [
  { src: "/images/wfp-logo.png", alt: "World Food Programme" },
  { src: "/images/circle.png", alt: "Circle Logo" },
  { src: "/images/OCP.png", alt: "OCP Africa Logo" },
  { src: "/images/ai.png", alt: "Ai movement Logo" },
  { src: "/images/mpu.png", alt: "Mohamed VI university Logo" },
];

export const Partners = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-center">Our Partners</h2>
      <div className="grid lg:grid-cols-5 grid-cols-4  gap-2 sm:gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="group w-24 sm:w-32 p-2 my-auto cursor-pointer">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              className="grayscale group-hover:grayscale-0 transition-all duration-300"
              priority={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
