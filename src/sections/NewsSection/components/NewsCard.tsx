export type NewsCardProps = {
    title: string;
    href: string;
    linkTitle: string;
    linkAriaLabel: string;
  };
  
  export const NewsCard = (props: NewsCardProps) => {
    return (
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="relative bg-clip-padding bg-slate-100 box-border caret-transparent flex basis-[264px] flex-col grow shrink-0 h-full justify-between max-w-[264px] min-h-[464px] min-w-[264px] outline-[3px] w-[264px] p-6 rounded-3xl border-[3px] border-solid border-transparent">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="box-border caret-transparent outline-[3px] mb-5">
              <div
                role="note"
                aria-label="tag News"
                className="text-sm font-semibold items-center box-border caret-transparent gap-x-2.5 flex leading-4 max-w-[232px] outline-[3px] pointer-events-none rounded-[5px]"
              >
                <div className="box-border caret-transparent flex h-6 min-h-[auto] min-w-[auto] outline-[3px] w-6 overflow-hidden">
                  <img
                    alt="News"
                    src="https://c.animaapp.com/mpwv05edh3Fe6z/assets/17.svg"
                    className="relative text-transparent aspect-[auto_24_/_24] box-border h-full min-h-[auto] min-w-full object-cover outline-[3px] align-baseline w-full"
                  />
                </div>
                <div className="text-base font-normal box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px]">
                  News
                </div>
              </div>
            </div>
            <div className="font-bold box-border caret-transparent outline-[3px] mb-5">
              {props.title}
            </div>
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <a
              title={props.linkTitle}
              aria-label={props.linkAriaLabel}
              href={props.href}
              className="font-bold box-border caret-transparent flex outline-[3px]"
            >
              <div className="items-start box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
                <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                  Read more
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
                      aria-label="Open active link"
                      className="box-border caret-transparent flex h-6 min-h-6 min-w-6 outline-[3px] w-6 before:accent-auto before:bg-[url('https://www.avanade.com/_next/static/media/spriteIcon.10c7f507.svg')] before:bg-[position:-151px_-19px] before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-bold before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-segoe_ui"
                    ></i>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  };
  