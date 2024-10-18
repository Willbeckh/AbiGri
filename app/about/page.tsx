import { supabase } from "@/utils/supabaseClient";
import AboutUs from "./AboutUs";

interface AccordionContent {
  title: string;
  description: string;
}

interface AboutContent {
  title: string;
  about_desc: string;
  about_image: string;
  about_summary: string;
  banner_image: string;
  accordion_content?: AccordionContent[];
}

const AboutUsPage = async () => {
  const { data: aboutContent, error } = await supabase
    .from("about_content")
    .select("*, accordion_content(*)");

  if (error) {
    console.error("Failed to fetch", error);
    return <p>Failed to fetch about content!</p>;
  }

  if (!aboutContent) {
    return (
      <div className="flex items-center justify-center loading loading-dots">
        <div>Loading</div>
      </div>
    );
  }

  return (
    <div>
      {aboutContent &&
        aboutContent.map((content: AboutContent, index) => (
          <div key={index}>
            <AboutUs
              title={content.title}
              aboutDesc={content.about_desc}
              aboutImg={content.about_image}
              aboutSummary={content.about_summary}
              bannerImg={content.banner_image}
              accordionContent={content.accordion_content}
            />
          </div>
        ))}
    </div>
  );
};

export default AboutUsPage;
