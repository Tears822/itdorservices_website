import { CaseStudyCard } from "@/sections/IntroSection/components/CaseStudyCard";

export const IntroSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-full mx-auto">
      <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto px-6">
        <div className="box-border caret-transparent flex shrink-0 flex-wrap outline-[3px] w-full">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div className="box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent shrink-0 outline-[3px] w-full py-10">
                <div className="box-border caret-transparent flex flex-wrap justify-center outline-[3px]">
                  <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-[83.3333%]">
                    <h2 className="text-[28px] font-bold bg-clip-text bg-[linear-gradient(90deg,rgb(206,5,105)_12.66%,rgb(255,88,0)_94.55%)] box-border caret-transparent leading-[34px] outline-[3px] break-words text-center mb-[30px] pb-2.5 md:text-5xl md:leading-[62px]">
                      Advancing the world through the power of people and
                      Microsoft
                    </h2>
                    <div className="box-border caret-transparent outline-[3px] text-center w-full mb-6 mx-auto">
                      Technology should make work better—and results real. AI
                      must be secure, responsible, and designed for impact. From
                      Copilot agents and AI-ready data platforms to cloud
                      modernization, cyber resilience, and ERP transformation,
                      we help organizations turn Microsoft innovation into
                      measurable outcomes—across every cloud, every industry,
                      and every stage of AI maturity.
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-6 flex flex-nowrap justify-normal outline-[3px] overflow-x-auto overflow-y-hidden gap-y-[normal] -mx-6 px-6 md:flex-wrap md:justify-center md:gap-y-10 md:mx-0 md:px-0">
                  <div className="box-border caret-transparent gap-x-6 flex flex-nowrap justify-normal min-h-[auto] min-w-[auto] outline-[3px] overflow-x-auto overflow-y-hidden gap-y-[normal] -mx-6 px-6 md:flex-wrap md:justify-center md:gap-y-10 md:mx-0 md:px-0">
                    <CaseStudyCard
                      imageAlt="avanade mammut dynamics finance operations"
                      imageSrc="https://c.animaapp.com/mpwv05edh3Fe6z/assets/3.webp"
                      title="Mammut simplifies Dynamics 365 Finance & Operations"
                      description="Mammut chose clarity over speed. Avanade simplified Dynamics 365 Finance & Operations, lowered go-live risk and created a stable platform for innovation."
                      href="https://www.avanade.com/en-us/insights/clients/mammut-dynamics-365-erp-transformation"
                      linkAriaLabel="Read more - Mammut chose clarity over speed. Avanade simplified Dynamics 365 Finance & Operations, lowered go-live risk and created a stable platform for innovation."
                    />
                    <CaseStudyCard
                      imageAlt="eq bank hero:Ava"
                      imageSrc="https://c.animaapp.com/mpwv05edh3Fe6z/assets/eq-bank-hero:Ava-1728x740.webp"
                      title="EQ Bank builds an industry-leading platform for growth "
                      description="EQ Bank introduced a new commercial lending CRM that centralizes the full loan lifecycle and allows teams to focus on higher‑value relationships."
                      href="https://www.avanade.com/en-us/insights/clients/equitable-bank-crm-transformation"
                      linkAriaLabel="Read more - EQ Bank introduced a new commercial lending CRM that centralizes the full loan lifecycle and allows teams to focus on higher‑value relationships."
                    />
                    <CaseStudyCard
                      imageAlt="fater integrates ai with copilot"
                      imageSrc="https://c.animaapp.com/mpwv05edh3Fe6z/assets/5.webp"
                      title="Fater embraces AI-powered ways of working with Microsoft 365 Copilot."
                      description="Discover how Fater partnered with Avanade to embed Microsoft 365 Copilot into everyday work, empowering 700 employees and driving measurable impact."
                      href="https://www.avanade.com/en-us/insights/clients/fater-adopts-ai-microsoft-365-copilot"
                      linkAriaLabel="Read more - Discover how Fater partnered with Avanade to embed Microsoft 365 Copilot into everyday work, empowering 700 employees and driving measurable impact."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
