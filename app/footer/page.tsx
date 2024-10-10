import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-primary-background lg:p-10 p-8 text-white">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* First Column */}
        <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
          <h2 className="text-green-500 text-2xl">Abigri</h2>
          <p className="text-xs">
            Smart Farming solutions for small Scale Farmers in Africa.
          </p>
          <div className="mt-4">
            <h2 className="text-green-500 text-2xl">Contacts</h2>
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="">
                <p className="flex gap-1 items-center text-xs">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <span>+250 788523722</span>
                </p>
                <p className="flex gap-1 items-center text-xs my-1">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  Kk495st, Kigali, Rwanda
                </p>
              </div>
              <div>
                <small className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  info@abigri.com
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column (Image) - Hidden on mobile */}
        <div className="lg:w-1/3 w-full mb-8 lg:mb-0 hidden lg:flex lg:items-center justify-center">
          <div>
            <Image
              src="/images/Abigri.png"
              alt="white logo"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="lg:w-1/3 w-full">
          <div>
            <h2 className="text-green-500 text-2xl mb-4">
              Join Our Newsletter.
            </h2>
          </div>
          <div className="mb-4">
            <div className="join text-black">
              <input
                type="email"
                className="input lg:input-sm join-item w-full lg:w-4/5"
                placeholder="Email"
              />
              <button className="btn lg:btn-sm bg-button join-item rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-5">{/* <p>Follow us on socials: </p> */}</div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full flex lg:flex-row justify-between  mt-8 pt-2 border-t-2 border-button text-green-200">
        <div className="flex gap-2">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
        <div className="content-end text-sm">
          <span>&copy;{new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
