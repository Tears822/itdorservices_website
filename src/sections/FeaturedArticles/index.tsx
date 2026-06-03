import { ArticleCard } from "@/sections/FeaturedArticles/components/ArticleCard";

export const FeaturedArticles = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-full mx-auto">
      <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto px-6">
        <div className="box-border caret-transparent flex shrink-0 flex-wrap outline-[3px] w-full">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div className="box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent outline-[3px] py-10">
                <div className="items-center box-border caret-transparent flex justify-center outline-[3px]"></div>
                <div className="items-stretch box-border caret-transparent gap-x-10 flex flex-col justify-center outline-[3px] gap-y-10 pt-6 pb-10 md:gap-x-6 md:flex-row md:gap-y-6 md:py-20">
                  <ArticleCard
                    title="Avanade Sovereign AI: 5 trends impacting compliance and trust"
                    imageAlt="avanade sovereign ai"
                    imageSrc="https://c.animaapp.com/mpwv05edh3Fe6z/assets/15.webp"
                    linkHref="https://www.avanade.com/en-us/insights/articles/sovereign-ai"
                    linkAriaLabel="Learn more - Avanade Sovereign AI: 5 trends impacting compliance and trust"
                    rootClassName="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
                    isFeatured="true"
                  />
                  <div className="box-border caret-transparent gap-x-10 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-10">
                    <ArticleCard
                      title="The rise of human-AI collaboration"
                      imageAlt="avanade ai human innovation"
                      imageSrc="https://c.animaapp.com/mpwv05edh3Fe6z/assets/14.webp"
                      linkHref="https://www.avanade.com/en-us/insights/articles/agentic-ai-and-human-innovation"
                      linkAriaLabel="Learn more - The rise of human-AI collaboration"
                      rootClassName="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-full md:gap-x-6 md:flex-row md:gap-y-6"
                      imageWrapperClassName="box-border caret-transparent flex h-72 max-h-72 max-w-full min-h-72 min-w-full outline-[3px] w-full overflow-hidden md:h-[264px] md:max-h-[264px] md:max-w-[264px] md:min-h-[264px] md:min-w-[264px] md:w-[264px]"
                      contentClassName="box-border caret-transparent gap-x-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-full"
                      titleClassName="text-lg font-bold box-border caret-transparent inline leading-[normal] outline-[3px] break-words pointer-events-none overflow-auto md:text-2xl"
                      isFeatured="false"
                    />
                    <ArticleCard
                      title="Agentic AI: development & deployment best practices"
                      imageAlt="avanade agentic ai best practice"
                      imageSrc="https://c.animaapp.com/mpwv05edh3Fe6z/assets/16.webp"
                      linkHref="https://www.avanade.com/en-us/insights/articles/agentic-ai-deployment-best-practices"
                      linkAriaLabel="Learn more - Agentic AI: development & deployment best practices"
                      rootClassName="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-full md:gap-x-6 md:flex-row md:gap-y-6"
                      imageWrapperClassName="box-border caret-transparent flex h-72 max-h-72 max-w-full min-h-72 min-w-full outline-[3px] w-full overflow-hidden md:h-[264px] md:max-h-[264px] md:max-w-[264px] md:min-h-[264px] md:min-w-[264px] md:w-[264px]"
                      contentClassName="box-border caret-transparent gap-x-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-full"
                      titleClassName="text-lg font-bold box-border caret-transparent inline leading-[normal] outline-[3px] break-words pointer-events-none overflow-auto md:text-2xl"
                      isFeatured="false"
                    />
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-normal outline-[3px] md:justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
