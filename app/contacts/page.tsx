import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-11/12 max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden mt-20 grid md:grid-cols-2">
        {/* Left: Contact Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Feel free to contact us any time. We will get back to you as soon as
            we can!
          </p>

          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="textarea textarea-bordered w-full"
                rows={3}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-block bg-black text-white border-none hover:bg-gray-800"
            >
              SEND
            </button>
          </form>
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
                <a href="tel:+245689146" className="link hover:underline">
                  +250 788523722
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-4 text-button" />
              <div>Kk495st Kigali, Rwanda</div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center">
              <FaClock className="mr-4 text-yellow-400" />
              <div>09:00 - 18:00</div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-yellow-400 hover:text-yellow-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                &lt;---Twitter Icon --&gt;
              </svg>
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                &lt;!-- Facebook Icon --&gt;
              </svg>
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                &lt;!-- Instagram Icon --&gt;
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
