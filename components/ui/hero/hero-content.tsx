import React from "react";
import { NavButton } from "./nav-button";

const HeroContent = () => {
  return (
    <>
      <div className="flex flex-col mb-4 my-10">
        <h1 className="md:text-4xl text-3xl mb-4 font-semibold">
          Empowering Africa’s Farmers, One{" "}
          <span className="text-button font-bold">Smart Solution</span> at a
          Time.
        </h1>
        <p className=" mb-6 text-foreground-muted">
          AbiGri Solutions brings AI-powered, offline farming solutions to
          Africa’s smallholder farmers, boosting productivity and
          sustainability. Affordable and accessible, our smart solutions deliver
          real-time insights. Discover how we’re transforming agriculture across
          the continent.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <NavButton
            label="Explore Gadget Shop&gt;"
            href="/products"
            className="bg-green-500 hover:bg-green-600"
          />
          <NavButton label="Learn More" href="/about" variant="outline" />
        </div>
      </div>
      
    </>
  );
};

export default HeroContent;
