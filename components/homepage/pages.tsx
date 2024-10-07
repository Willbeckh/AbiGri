import { supabase } from "@/lib/supabaseClient";
import HeroSection from "./HeroSection";
import AboutUs from "../AboutUs";

export async function getStaticProps() {
  const { data: homepageContent, error } = await supabase
    .from("homepage_content")
    .select("*")
    .single();

  if (error) {
    console.error("Error fetching homepage content", error.message);
    return {
      props: {
        homepageContent: null,
        error: error.message,
      },
    };
  }

  return {
    props: {
      homepageContent,
    },
  };
}

export default async function HomePage(
  homepageContent: { title: string; subtitle: string; banner_image: string },
  error: string
) {
  if (error) {
    return <p>Failed to load homepage content.</p>;
  }

  return (
    <div className="">
      <HeroSection
        title={homepageContent.title}
        subtitle={homepageContent.subtitle}
        bannerImage={homepageContent.banner_image}
      />
      {/* <ProductHighlights /> */}
      <AboutUs />
    </div>
  );
}
