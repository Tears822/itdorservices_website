import { HeroSection } from "@/sections/HeroSection";
import { FeatureCarousel } from "@/sections/FeatureCarousel";
import { IntroSection } from "@/sections/IntroSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { IndustrySection } from "@/sections/IndustrySection";
import { InsightsSection } from "@/sections/InsightsSection";
import { FeaturedArticles } from "@/sections/FeaturedArticles";
import { StorySection } from "@/sections/StorySection";
import { StatsSection } from "@/sections/StatsSection";
import { SoftwareSolutionsSection } from "@/sections/SoftwareSolutionsSection";
import { ContactModal } from "@/components/ContactModal";

export const Main = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <div className="box-border caret-transparent outline-[3px]">
        <HeroSection />
        <FeatureCarousel />
        <section className="box-border caret-transparent outline-[3px] w-full mx-auto">
          <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto px-6">
            <div className="box-border caret-transparent flex shrink-0 flex-wrap outline-[3px] w-full">
              <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
            </div>
          </div>
        </section>
        <IntroSection />
        <section className="box-border caret-transparent outline-[3px] w-full mx-auto">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="bg-[url('https://assettest.avanade.com/api/public/content/4f1774c66401415ea73cb2e8ab09a61c?v=34ea49c3')] bg-no-repeat bg-size-[2564%] box-border caret-transparent h-0 outline-[3px] w-full bg-[position:86.3%_29.5%] pt-[34.9333%] md:bg-size-[555%] md:bg-[position:56.8%_29.9%] md:pt-[15.7986%]"></div>
          </div>
        </section>
        <ServicesSection />
        <SoftwareSolutionsSection />
        <IndustrySection />
        <InsightsSection />
        <FeaturedArticles />
        <section className="box-border caret-transparent outline-[3px] w-full mx-auto">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="bg-[url('https://assettest.avanade.com/api/public/content/4f1774c66401415ea73cb2e8ab09a61c?v=34ea49c3')] bg-no-repeat bg-size-[2564%] box-border caret-transparent h-0 outline-[3px] w-full bg-[position:86.3%_29.5%] pt-[34.9333%] md:bg-size-[555%] md:bg-[position:56.8%_29.9%] md:pt-[15.7986%]"></div>
          </div>
        </section>
        <StorySection />
        <StatsSection />
        <ContactModal />
      </div>
    </main>
  );
};
