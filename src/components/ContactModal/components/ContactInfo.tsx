export type ContactInfoProps = {
  variant: string;
  heading: string;
  subheading: string;
  regionOneTitle: string;
  regionOneEmailHref: string;
  regionOneEmailText: string;
  regionTwoTitle: string;
  regionTwoEmailHref: string;
  regionTwoEmailText: string;
  regionThreeTitle: string;
  regionThreeEmailHref: string;
  regionThreeEmailText: string;
  officeLinkHref: string;
  officeLinkText: string;
  northAmericaTitle: string;
  northAmericaAddress: React.ReactNode;
  northAmericaPhoneOneHref: string;
  northAmericaPhoneOneText: string;
  northAmericaPhoneTwoHref: string;
  northAmericaPhoneTwoText: string;
  europeMiddleEastTitle: string;
  europeMiddleEastAddress: React.ReactNode;
  europeMiddleEastPhoneHref: string;
  europeMiddleEastPhoneText: string;
  growthMarketsTitle: string;
  growthMarketsAddress: React.ReactNode;
};

export const ContactInfo = (props: ContactInfoProps) => {
  if (props.variant === "headquarters") {
    return (
      <div className="box-border caret-transparent flex flex-col flex-wrap justify-start outline-[3px] md:flex-row">
        <div className="box-border caret-transparent shrink-0 max-w-full outline-[3px] w-full">
          <div className="border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-stone-300 box-border caret-transparent shrink-0 outline-[3px] w-full mt-20 pt-10 border-t md:mt-[120px]">
            <h4 className="text-xl font-bold box-border caret-transparent leading-[normal] outline-[3px] break-words text-left md:text-[28px] md:leading-9">
              {props.heading}
            </h4>
          </div>
        </div>
        <div className="box-border caret-transparent shrink-0 max-w-full outline-[3px] w-full py-10">
          <div className="box-border caret-transparent grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h6 className="text-base font-bold md:text-xl">{props.northAmericaTitle}</h6>
              <div className="mt-4">{props.northAmericaAddress}</div>
              <a href={props.northAmericaPhoneOneHref} className="font-bold block mt-4">
                {props.northAmericaPhoneOneText}
              </a>
              <a href={props.northAmericaPhoneTwoHref} className="font-bold block mt-2">
                {props.northAmericaPhoneTwoText}
              </a>
            </div>
            <div>
              <h6 className="text-base font-bold md:text-xl">{props.europeMiddleEastTitle}</h6>
              <div className="mt-4">{props.europeMiddleEastAddress}</div>
              <a href={props.europeMiddleEastPhoneHref} className="font-bold block mt-4">
                {props.europeMiddleEastPhoneText}
              </a>
            </div>
            <div>
              <h6 className="text-base font-bold md:text-xl">{props.growthMarketsTitle}</h6>
              <div className="mt-4">{props.growthMarketsAddress}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent shrink-0 max-w-full outline-[3px] w-full md:w-3/12">
      <h4 className="text-xl font-bold mb-2">{props.heading}</h4>
      <p className="mb-6">{props.subheading}</p>
      <div className="space-y-4">
        <div>
          <h6 className="font-bold">{props.regionOneTitle}</h6>
          <a href={props.regionOneEmailHref} className="font-bold">
            {props.regionOneEmailText}
          </a>
        </div>
        <div>
          <h6 className="font-bold">{props.regionTwoTitle}</h6>
          <a href={props.regionTwoEmailHref} className="font-bold">
            {props.regionTwoEmailText}
          </a>
        </div>
        <div>
          <h6 className="font-bold">{props.regionThreeTitle}</h6>
          <a href={props.regionThreeEmailHref} className="font-bold">
            {props.regionThreeEmailText}
          </a>
        </div>
      </div>
      <a href={props.officeLinkHref} className="font-bold inline-block mt-6">
        {props.officeLinkText}
      </a>
    </div>
  );
};
