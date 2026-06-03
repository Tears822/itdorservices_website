import { ContactForm } from "@/components/ContactModal/components/ContactForm";
import { ContactInfo } from "@/components/ContactModal/components/ContactInfo";

export const ContactModal = () => {
  return (
    <section className="fixed backdrop-blur-[10px] bg-white/90 box-border caret-transparent hidden h-full max-h-full min-h-[1000px] min-w-[375px] outline-[3px] w-full z-[90] overflow-auto mx-auto pt-20 inset-0 md:min-w-[1280px] md:pt-[120px]">
      <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto px-6">
        <div className="box-border caret-transparent flex flex-col flex-wrap justify-start outline-[3px] md:flex-row">
          <div className="relative box-border caret-transparent flex flex-col shrink-0 flex-wrap justify-start max-w-full outline-[3px] w-full md:flex-row">
            <div className="box-border caret-transparent shrink-0 max-w-full outline-[3px] w-full md:w-9/12">
              <div className="box-border caret-transparent outline-[3px]">
                <div className="box-border caret-transparent shrink-0 outline-[3px] w-full">
                  <div className="box-border caret-transparent outline-[3px]">
                    <h1 className="text-4xl font-bold bg-clip-text bg-[linear-gradient(90deg,rgb(206,5,105)_12.66%,rgb(255,88,0)_94.55%)] box-border caret-transparent leading-[46px] outline-[3px] break-words mb-6 md:text-6xl md:leading-[80px]">
                      Doing what matters starts here
                    </h1>
                    <p className="text-lg box-border caret-transparent outline-[3px] break-words md:text-base">
                      Tell us more about your challenge or need and we will
                      connect you to the right Avanade expert to help you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent outline-[3px]">
                <div className="box-border caret-transparent outline-[3px] w-full mt-10 pr-0 md:pr-[120px]">
                  <button className="absolute font-bold items-center bg-transparent caret-transparent gap-x-4 flex outline-[3px] gap-y-4 text-center p-0 right-0 -top-14 md:top-[-93px] md:right-2">
                    Close
                    <i
                      aria-label="Close"
                      className="box-border caret-transparent flex h-6 min-h-6 min-w-6 outline-[3px] w-6 before:accent-auto before:bg-[url('https://www.avanade.com/_next/static/media/spriteIcon.10c7f507.svg')] before:bg-[position:-107px_-107px] before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-bold before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-segoe_ui"
                    ></i>
                  </button>
                  <ContactForm />
                </div>
                <form className="box-border caret-transparent outline-[3px]"></form>
                <form className="box-border caret-transparent outline-[3px]"></form>
              </div>
            </div>
            <ContactInfo
              variant="press"
              heading="How can we help?"
              subheading="Press Contacts"
              regionOneTitle="The Americas"
              regionOneEmailHref="mailto://TA-PR@avanade.com"
              regionOneEmailText="TA-PR@avanade.com"
              regionTwoTitle="Europe and Middle East (EME)"
              regionTwoEmailHref="mailto://EME-PR@avanade.com"
              regionTwoEmailText="EME-PR@avanade.com"
              regionThreeTitle="Asia Pacific (APAC)"
              regionThreeEmailHref="mailto://APAC-PR@avanade.com"
              regionThreeEmailText="APAC-PR@avanade.com"
              officeLinkHref="/en-us/office-locations"
              officeLinkText="View our offices"
              northAmericaTitle="North America"
              northAmericaAddress="123 Main Street, Seattle, WA"
              northAmericaPhoneOneHref="tel:+18001234567"
              northAmericaPhoneOneText="1-800-123-4567"
              northAmericaPhoneTwoHref="tel:+18007654321"
              northAmericaPhoneTwoText="1-800-765-4321"
              europeMiddleEastTitle="Europe & Middle East"
              europeMiddleEastAddress="45 Regent Street, London, UK"
              europeMiddleEastPhoneHref="tel:+442079460123"
              europeMiddleEastPhoneText="+44 20 7946 0123"
              growthMarketsTitle="Growth Markets"
              growthMarketsAddress="1 Innovation Drive, Sydney, Australia"
            />
          </div>
        </div>
        <ContactInfo
          variant="headquarters"
          heading="Headquarters"
          subheading=""
          regionOneTitle=""
          regionOneEmailHref=""
          regionOneEmailText=""
          regionTwoTitle=""
          regionTwoEmailHref=""
          regionTwoEmailText=""
          regionThreeTitle=""
          regionThreeEmailHref=""
          regionThreeEmailText=""
          officeLinkHref=""
          officeLinkText=""
          northAmericaTitle="North America"
          northAmericaAddress="123 Main Street, Seattle, WA"
          northAmericaPhoneOneHref="tel:+18001234567"
          northAmericaPhoneOneText="1-800-123-4567"
          northAmericaPhoneTwoHref="tel:+18007654321"
          northAmericaPhoneTwoText="1-800-765-4321"
          europeMiddleEastTitle="Europe & Middle East"
          europeMiddleEastAddress="45 Regent Street, London, UK"
          europeMiddleEastPhoneHref="tel:+442079460123"
          europeMiddleEastPhoneText="+44 20 7946 0123"
          growthMarketsTitle="Growth Markets"
          growthMarketsAddress="1 Innovation Drive, Sydney, Australia"
        />
      </div>
    </section>
  );
};
