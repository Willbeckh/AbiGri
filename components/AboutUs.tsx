import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      id="aboutUs"
      className="flex flex-col bg-primary-background min-h-screen lg:p-10 p-8 text-white"
    >
      <h1 className="w-full text-green-400  text-3xl lg:mt-20 mt-12 mb-4">
        About Us
      </h1>
      <hr className="border-gray-400 mb-4" />

      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left Column */}
        <div className="flex-1 p-4">
          <div>
            <h2 className="text-green-400 text-3xl font-bold">
              Unlocking Agricultural Potential.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              natus ducimus ratione reiciendis! Quam optio, nam dolor dolorum
              doloremque expedita maxime deleniti libero aperiam cumque atque
              eveniet doloribus. Doloribus, ea.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 p-4">
          <div className="w-4/5 rounded-md">
            <Image src="" alt="Smiley Farmer" />
          </div>
          <div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Flexible and Customizable products
              </div>
              <div className="collapse-content">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  saepe obcaecati repellendus numquam tenetur voluptatum itaque
                  consequuntur. Totam perspiciatis eaque laborum quaerat nihil
                  quibusdam culpa voluptatem maiores consequuntur, dolore quam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
