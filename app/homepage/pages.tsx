import { supabase } from "@/utils/supabaseClient";
import HeroSection from "@/components/ui/hero/HeroSection";
// import AboutUsPage from "../about/page";
// import ProductHighlights from "../products/ProductsHightLight";

const HomePage = async () => {
  try {
    const { data: homepageSliderImg, error } = await supabase
      .from("homepage_images")
      .select();

    // If error occurs during the fetch, output err msg
    if (error) {
      console.error("Error fetching homepage images:", error);
      return (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-red-500">
            Error loading homepage images. Please try again later.
          </p>
        </div>
      );
    }

    // Handle the case where data is empty or null
    if (!homepageSliderImg || homepageSliderImg.length === 0) {
      console.warn("No images found for the homepage slider.");
      return (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-yellow-500">
            No homepage images available at the moment.
          </p>
        </div>
      );
    }

    // map images
    const images = homepageSliderImg.map((content) => ({
      banner_image: content.banner_image,
      alt: content.alt || "Image description",
    }));

    return (
      <div className="flex justify-center items-center min-h-screen bg-green-50">
        <HeroSection images={images} />
      </div>
    );
  } catch (err) {
    // Catch unexpected errors
    console.error("Unexpected error loading homepage:", err);
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">
          An unexpected error occurred. Please try again later.
        </p>
      </div>
    );
  }
};

export default HomePage;
