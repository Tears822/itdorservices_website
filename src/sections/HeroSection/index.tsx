import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { HeroMedia } from "@/sections/HeroSection/components/HeroMedia";

export const HeroSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-full mx-auto">
      <div className="relative bg-white box-border caret-transparent outline-[3px] mb-0 py-10 md:mb-10">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="absolute backdrop-blur-[10px] box-border caret-transparent h-full outline-[3px] w-full z-10 left-0 top-0 md:backdrop-blur-[20px]"></div>
          <div className="relative box-border caret-transparent max-w-[1176px] outline-[3px] w-full z-30 mx-auto px-6">
            <div className="box-border caret-transparent flex flex-wrap outline-[3px]">
              <HeroContent />
              <HeroMedia />
            </div>
          </div>
          <div className="absolute bg-[url('https://assettest.avanade.com/api/public/content/4f1774c66401415ea73cb2e8ab09a61c?v=34ea49c3')] bg-no-repeat bg-size-[2600%] box-border caret-transparent h-0 outline-[3px] w-full z-20 bg-[position:39%_29.9%] pt-[73.0667%] left-0 bottom-[2%] md:bg-size-[558%] md:bottom-[-22px] md:bg-[position:6.4%_30.42%] md:pt-[25.9259%]"></div>
          <div className="absolute bg-[url('https://assettest.avanade.com/api/public/content/4f1774c66401415ea73cb2e8ab09a61c?v=34ea49c3')] bg-no-repeat bg-size-[2630%] box-border caret-transparent h-0 outline-[3px] w-full z-0 bg-[position:5.5%_16.81%] pt-[29.0667%] left-0 bottom-[30%] md:bg-size-[569%] md:bg-[position:92%_5%] md:pt-[25.9259%] md:bottom-0"></div>
        </div>
      </div>
    </section>
  );
};
