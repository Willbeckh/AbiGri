import React from "react";
import Image from "next/image";

interface AccordionContent {
  title: string;
  description: string;
}

interface aboutProps {
  title: string;
  aboutDesc: string;
  aboutImg: string;
  bannerImg: string;
  accordionContent?: AccordionContent[];
}

const AboutUs: React.FC<aboutProps> = ({
  title,
  aboutDesc,
  aboutImg,
  bannerImg,
  accordionContent,
}) => {
  return (
    <div
      id="aboutUs"
      className="flex flex-col bg-primary-background min-h-screen lg:p-10 p-8 text-white"
    >
      <h1 className="w-full text-green-500  text-3xl lg:mt-20 mt-12 mb-4 lg:ps-6 border-b-2 pb-4">
        About Us
      </h1>

      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left Column */}
        <div className="flex-1 p-4">
          <div>
            <h2 className="text-green-400 text-3xl font-bold">{title}</h2>
            <p>{aboutDesc}</p>
            <div className="mx-auto lg:mt-16 w-2/4">
              <Image src={aboutImg} alt={title} width={400} height={400} />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 p-4">
          <div className="sm:w-full rounded-md mx-auto">
            <Image
              src={bannerImg}
              alt="Unlocking agricultural potential"
              width={600}
              height={200}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <h3 className="w-full text-green-500 my-2">Why Choose Us?</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            ducimus, dolorem blanditiis illum officiis consequatur sunt
            exercitationem nobis et dolore numquam at quod vitae impedit veniam
            quae expedita deleniti repellendus?
          </p>
          {accordionContent && (
            <div>
              {accordionContent.map((content, index) => (
                <div
                  className="collapse collapse-plus border-b rounded-none"
                  key={index}
                >
                  <input type="radio" name="my-accordion-3" defaultChecked />

                  <div className="collapse-title text-xl font-medium text-button">
                    {content.title}
                  </div>
                  <div className="collapse-content">
                    <p className="text-sm">{content.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
