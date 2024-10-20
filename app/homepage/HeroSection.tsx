"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center "
        style={{ marginTop: "-74px", backgroundImage: `url(${bannerImage})` }}
      ></div>
      <div>
        <div className="absolute inset-0 bg-primary-background min-h-screen bg-opacity-50 flex items-center">
          <div className="text-white w-11/12 sm:w-9/12 lg:m-12 md:m-8 px-6 sm:px-14 md:px-20 leading-9">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">{description}</p>
            <div className="mt-8">
              <Button
                className="btn-md bg-button hover:bg-primary-background text-lg sm:text-xl md:text-2xl text-white"
                // onClick={handleRedirectToProducts}
              >
                Explore Gadget Shop
                <Link href="/products" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
