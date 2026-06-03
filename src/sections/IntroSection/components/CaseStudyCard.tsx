export type CaseStudyCardProps = {
    imageAlt: string;
    imageSrc: string;
    title: string;
    description: string;
    href: string;
    linkAriaLabel: string;
  };
  
  export const CaseStudyCard = (props: CaseStudyCardProps) => {
    return (
      <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[264px]">
        <div className="box-border caret-transparent flex flex-col h-full justify-between min-h-[428px] outline-[3px] text-left w-[264px]">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mb-4">
            <div className="aspect-square box-border caret-transparent flex h-[264px] max-h-[264px] max-w-[264px] min-h-[264px] min-w-[264px] outline-[3px] w-[264px] overflow-hidden mb-4">
              <img
                alt={props.imageAlt}
                sizes="100vw"
                src={props.imageSrc}
                className="relative text-transparent box-border h-full min-h-[auto] min-w-full object-cover outline-[3px] align-baseline w-full inset-0"
              />
            </div>
            <div className="font-bold box-border caret-transparent hidden outline-[3px] mb-2">
              {props.title}
            </div>
            <div className="box-border caret-transparent outline-[3px]">
              {props.description}
            </div>
          </div>
          <a
            href={props.href}
            aria-label={props.linkAriaLabel}
            className="font-bold box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]"
          >
            Read more
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ml-2">
              <div className="box-border caret-transparent outline-[3px]">
                <i
                  aria-label="Read more"
                  className="box-border caret-transparent flex h-6 min-h-6 min-w-6 outline-[3px] w-6 before:accent-auto before:bg-[url('https://www.avanade.com/_next/static/media/spriteIcon.10c7f507.svg')] before:bg-[position:-195px_-19px] before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-bold before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-segoe_ui"
                ></i>
              </div>
              <div className="box-border caret-transparent hidden outline-[3px]">
                <i
                  aria-label="Read more"
                  className="box-border caret-transparent flex h-6 min-h-6 min-w-6 outline-[3px] w-6 before:accent-auto before:bg-[url('https://www.avanade.com/_next/static/media/spriteIcon.10c7f507.svg')] before:bg-[position:-151px_-19px] before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-bold before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-segoe_ui"
                ></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  };
  