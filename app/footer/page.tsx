import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-primary-background lg:p-10 p-8 text-white">
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="lg:w-1/3 sm:w-full mb-8 lg:mb-0">
          <h2 className="text-green-500 text-2xl">Abigri</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            culpa, minima dignissimos tempore magnam asperiores odit, optio.
          </p>
          <div className="mt-4">
            <h2 className="text-green-500 text-2xl">Contacts</h2>
            <div className="flex flex-col lg:flex-row justify-between">
              <div>
                <p>Newsletter</p>
              </div>
              <div>
                <p>info@abigri.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 mb-8 lg:mb-0 hidden lg:flex lg:items-center justify-center">
          <div>
            <Image
              src="/images/Abigri.png"
              alt="white logo"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="lg:w-1/3 w-screen m-2">
          <div>
            <h2 className="text-green-500 text-2xl mb-4">
              Join Our Newsletter.
            </h2>
          </div>
          <div className="mb-4">
            <div className="join text-black">
              <input
                type="email"
                className="input input-sm join-item lg:w-4/5 "
                placeholder="Email"
              />
              <button className="btn btn-sm bg-button join-item rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>
          <div className="">
            <p>Follow us on socials: </p>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-8 pt-2 border-t-2 border-button">
        <p>home</p>
        <p>
          <span className="btm-nav-label">home</span>
        </p>
        <p>
          <span className="btm-nav-label">home</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
