export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent flex shrink-0 flex-wrap justify-start outline-[3px] w-full">
      <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full mr-0 md:max-w-[264px] md:mr-3">
        <div className="box-border caret-transparent shrink-0 outline-[3px] w-full mb-0 md:mb-10">
          <ul className="box-border caret-transparent list-none outline-[3px] pl-0">
            <li className="box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent outline-[3px] mb-4">
                <a
                  aria-label="Services"
                  href="/en-us/services"
                  className="text-xl font-bold box-border caret-transparent block leading-[normal] outline-[3px] text-nowrap mb-2 hover:underline"
                >
                  Services
                </a>
              </div>
            </li>
            <li className="box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent outline-[3px] mb-4">
                <a
                  aria-label="Software Solutions"
                  href="/en-us/software-solutions"
                  className="text-xl font-bold box-border caret-transparent block leading-[normal] outline-[3px] text-nowrap mb-2 hover:underline"
                >
                  Software Solutions
                </a>
              </div>
            </li>
            <li className="box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent outline-[3px] mb-4">
                <a
                  aria-label="About"
                  href="/en-us/about"
                  className="text-xl font-bold box-border caret-transparent block leading-[normal] outline-[3px] text-nowrap mb-2 hover:underline"
                >
                  About
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
