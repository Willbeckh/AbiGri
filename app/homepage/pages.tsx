import { supabase } from "@/utils/supabaseClient";
import HeroSection from "./HeroSection";
import AboutUsPage from "../about/page";
import ProductHighlights from "../products/ProductsHightLight";

const HomePage = async () => {
  const { data: homepageContent, error } = await supabase
    .from("homepage_content")
    .select();

  if (error) {
    console.error("Failed to fetch", error.message);
    return <p>Failed to load homepage content!</p>;
  }
  if (!homepageContent) {
    return <p className="loading loading-dots">Loading.</p>;
  }

  return (
    <div className="">
      {homepageContent &&
        homepageContent.map((content, index) => (
          <div key={index}>
            <HeroSection
              title={content.title}
              description={content.description}
              bannerImage={content.banner_image}
            />
          </div>
        ))}

      <AboutUsPage />
      <ProductHighlights />
    </div>
  );
};

export default HomePage;
