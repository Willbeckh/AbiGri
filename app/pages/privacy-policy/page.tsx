// pages/privacy.js

import Head from "next/head";
import { Lock } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-green-50 px-4 sm:px-6 lg:px-8 pt-28">
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy for https://abigri.com"
        />
      </Head>

      <div className=" w-9/12 mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Lock size={32} color="green" />
          <h1 className="text-3xl font-bold text-center ml-2">
            Privacy Policy
          </h1>
        </div>
        <p className="text-center italic mb-8 text-sm">
          Last updated: October 29, 2024
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            <strong>AbiGri</strong> values the privacy of our users. This
            Privacy Policy explains how we collect, use, and share information
            when you use our website, specifically in relation to our use of
            Google OAuth for authentication purposes. By using our site, you
            agree to the collection and use of information in accordance with
            this policy.
          </p>
          <p className="text-gray-700 mt-4">
            Here are some important definitions to help you understand our terms
            and this Privacy Policy: <strong>AbiGri Solutions</strong>, and our
            relevant affiliates are referred to as “<strong>AbiGri</strong>,” “
            <strong>we</strong>,” “<strong>us</strong>,” and “
            <strong>our</strong>.” Our public websites, including{" "}
            <a href="https://www.abigri.com" className="text-blue-600">
              www.abigri.com
            </a>
            , are referred to as the <span className="font-bold">Website</span>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p className="text-gray-700">
            When you sign in with Google OAuth, we may collect certain
            information directly from your Google account, including:
          </p>
          <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
            <li>
              <strong>Your Name</strong>: To personalize your experience on our
              site.
            </li>
            <li>
              <strong>Your Email Address</strong>: For account management,
              contact, and security purposes.
            </li>
            <li>
              <strong>Profile Picture</strong> (optional): To display on your
              user profile.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700">
            We use the information provided through Google OAuth to:
          </p>
          <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
            <li>
              Authenticate your identity and secure access to our services.
            </li>
            <li>Provide and personalize our services based on your profile.</li>
            <li>Communicate with you, if necessary.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We do <strong>not</strong> use your information for any purpose
            outside of providing access to our site, nor do we share it with any
            third parties outside those essential to the operation of our site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Information Sharing and Disclosure
          </h2>
          <p className="text-gray-700">
            We respect your privacy and do not share your Google account
            information with any third-party advertisers or unauthorized
            entities. Any third parties that assist us in providing this service
            (e.g., hosting providers) are bound by confidentiality agreements
            and are only allowed to use your data in connection with the
            services they perform for us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p className="text-gray-700">
            We implement and maintain industry-standard security measures to
            protect your information. However, no transmission over the internet
            or electronic storage method is 100% secure, so we cannot guarantee
            its absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Your Data Rights</h2>
          <p className="text-gray-700">
            You may request access, update, or deletion of your information by
            contacting us. You may also disconnect your Google account from our
            website at any time via your Google account settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700">
            We may update our Privacy Policy periodically. Any changes will be
            posted on this page, and we encourage you to review this policy
            periodically to stay informed about how we are protecting your
            information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
            <li>
              <strong>Contact</strong>:{" "}
              <a href="mailto:info@abigri.com" className="text-blue-600">
                info@abigri.com
              </a>
            </li>
            <li>
              <strong>URL</strong>:{" "}
              <a href="https://abigri.com" className="text-blue-600">
                https://abigri.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
