import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contact-form";

const ContactMap = dynamic(() => import("@/components/contact-map"), {
  ssr: false,
});

const Contacts = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-11/12 max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden mt-20 grid md:grid-cols-2">
        {/* Left: Contact Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Feel free to contact us any time. We will get back to you as soon as
            we can!
          </p>

          <div>
            <ContactForm />
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-black text-white p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Info</h3>

            {/* Email */}
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-4 text-button" />
              <div>
                <a
                  href="mailto:info@abigri.com"
                  className="link hover:underline"
                >
                  info@abigri.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center mb-4">
              <FaPhone className="mr-4 text-button" />
              <div>
                <a href="tel:+250788523722" className="link hover:underline">
                  +250 788523722
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-4 text-button" />
              <div>KK 495 St. Kigali, Rwanda</div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center">
              <FaClock className="mr-4 text-green-500" />
              <div>09:00 - 18:00</div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mt-2">
            <a href="#" className="">
              <FaTwitter size={20} color="" />
            </a>
            <a href="#" className="">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="">
              <FaTiktok size={20} />
            </a>
          </div>

          <div className="mt-8 p-0">
            <div className=" h-[300px] rounded-xl overflow-hidden">
              <ContactMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
