export type ArticleCardProps = {
    title: string;
    imageAlt: string;
    imageSrc: string;
    linkHref: string;
    linkAriaLabel: string;
    rootClassName: string;
    imageWrapperClassName: string;
    contentClassName: string;
    titleClassName: string;
    isFeatured: string;
  };
  
  export const ArticleCard = (props: ArticleCardProps) => {
    return (
      <div className={props.rootClassName}>
        {props.isFeatured === "true" ? (
          <div className="box-border caret-transparent outline-[3px]">
            <div className="box-border caret-transparent gap-x-4 flex flex-col outline-[3px] gap-y-4">
              <div className="box-border caret-transparent flex h-72 max-h-72 max-w-none min-h-72 min-w-[auto] outline-[3px] w-auto overflow-hidden md:h-[456px] md:max-h-[456px] md:max-w-[456px] md:min-h-[456px] md:min-w-[456px] md:w-[456px]">
                <img
                  alt={props.imageAlt}
                  sizes="100vw"
                  src={props.imageSrc}
                  className="relative text-transparent box-border h-full min-h-[auto] min-w-full object-cover outline-[3px] align-baseline w-full inset-0"
                />
              </div>
              <div className="box-border caret-transparent gap-x-4 max-w-none min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-auto md:max-w-[456px] md:min-w-[456px] md:w-[456px]">
                <h5 className="text-lg font-bold box-border caret-transparent inline leading-[normal] outline-[3px] break-words pointer-events-none md:text-2xl">
                  {props.title}
                </h5>
                <div className="box-border caret-transparent block outline-[3px] mt-4 md:flex">
                  <a
                    aria-label={props.linkAriaLabel}
                    href={props.linkHref}
                    className="font-bold box-border caret-transparent flex min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]"
                  >
                    <div className="items-start box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
                      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                        Learn more
                      </span>
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ml-2">
                        <div className="box-border caret-transparent outline-[3px]">
                          <i
                            aria-label="Open link"
                            className="box-border caret-transparent flex h-6 min-h-6 min-w-6 outline-[3px] w-6 before:accent-auto before:bg-[url('https://www.avanade.com/_next/static/media/spriteIcon.10c7f507.svg')] before:bg-[position:-195px_-19px] before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-bold before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-segoe_ui"
                          ></i>
                        </div>
                        <div className="box-border caret-transparent hidden outline-[3px]">
                          <i
                            aria-label="Open link"
                            className="box-border caret-transparent flex h-6 min-h-6 min-w-6 outline-[3px] w-6 before:accent-auto before:bg-[url('https://www.avanade.com/_next/static/media/spriteIcon.10c7f507.svg')] before:bg-[position:-151px_-19px] before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-bold before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-segoe_ui"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={props.imageWrapperClassName}>
              <img
                alt={props.imageAlt}
                sizes="100vw"
                src={props.imageSrc}
                className="relative text-transparent box-border h-full min-h-[auto] min-w-full object-cover outline-[3px] align-baseline w-full inset-0"
              />
            </div>
            <div className={props.contentClassName}>
              <h5 className={props.titleClassName}>{props.title}</h5>
              <div className="box-border caret-transparent block outline-[3px] mt-4">
                <a
                  aria-label={props.linkAriaLabel}
                  href={props.linkHref}
                  className="font-bold box-border caret-transparent flex outline-[3px]"
                >
                  Learn more
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
  