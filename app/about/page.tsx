import React from "react";

const AboutUsPage = async () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-green-50 mt-20  py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About AbiGri Solutions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Established in 2023, AbiGri Solutions Limited is dedicated to
            solving the pressing challenges faced by smallholder farmers in
            Africa, including low productivity, climate change, soil
            degradation, and limited access to modern agricultural technologies.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Company Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to empower smallholder farmers with affordable and
              scalable offline smart farming solutions that utilize AI and IoT
              technologies. Through real-time, actionable insights, we help
              farmers boost productivity and sustainability, even in areas with
              limited internet access.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to become Africa’s leading provider of smart agriculture
              solutions, driven by our core values of Sustainability,
              Mentorship, Accountability, Responsibility, and Transparency
              (SMART). Our vision is to foster sustainable farming practices
              while improving food security and farmer livelihoods across the
              continent.
            </p>
          </div>

          {/* Core Values Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-medium text-gray-700">
                  Sustainability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We ensure that our farming technologies are environmentally
                  friendly and energy-efficient, promoting long-term
                  productivity and resource conservation.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-700">
                  Mentorship
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in knowledge-sharing and empowering farmers through
                  guidance and mentorship, enabling them to make informed
                  decisions and thrive.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-700">
                  Accountability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Through our data-driven approach, we maintain high standards
                  of accountability, ensuring data integrity and transparency in
                  all operations.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-700">
                  Responsibility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our platform is committed to uplifting rural communities and
                  increasing resilience to environmental and economic
                  challenges, ensuring food security for all.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-700">
                  Transparency
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide clear communication, from soil data collection to
                  crop recommendations, ensuring transparency at every stage,
                  through SMS and intuitive dashboards.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-gray-600 mb-6">
            At AbiGri, we are committed to improving food security and
            transforming agriculture in Africa. Partner with us today to empower
            smallholder farmers and build a sustainable future for agriculture.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300">
            Learn More About Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
