export const FooterLegal = () => {
    return (
      <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto">
        <div className="box-border caret-transparent flex flex-col flex-wrap justify-start outline-[3px] text-center">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full mb-4 md:mb-10">
            <ul className="items-center box-border caret-transparent gap-x-4 flex flex-col flex-wrap justify-center list-none max-w-none outline-[3px] gap-y-4 mx-auto pl-0 md:[align-items:normal] md:gap-x-[normal] md:flex-row md:max-w-[720px] md:gap-y-[normal]">
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-nowrap mr-0 md:mr-3">
                <div className="box-border caret-transparent outline-[3px] text-nowrap">
                  <a
                    title=""
                    aria-label="Privacy Statement"
                    href="/en-us/utility/privacy-policy"
                    className="box-border caret-transparent block outline-[3px] text-nowrap mb-2 hover:underline"
                  >
                    Privacy Statement
                  </a>
                </div>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-nowrap mr-0 md:mr-3">
                <div className="box-border caret-transparent outline-[3px] text-nowrap">
                  <a
                    title=""
                    aria-label="Cookie Policy"
                    href="/en-us/cookies"
                    className="box-border caret-transparent block outline-[3px] text-nowrap mb-2 hover:underline"
                  >
                    Cookie Policy
                  </a>
                </div>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-nowrap mr-0 md:mr-3">
                <div className="box-border caret-transparent outline-[3px] text-nowrap">
                  <a
                    title=""
                    aria-label="Terms of Use"
                    href="/en-us/utility/terms-of-use"
                    className="box-border caret-transparent block outline-[3px] text-nowrap mb-2 hover:underline"
                  >
                    Terms of Use
                  </a>
                </div>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-nowrap mr-0 md:mr-3">
                <div className="box-border caret-transparent outline-[3px] text-nowrap">
                  <a
                    title=""
                    aria-label="Do Not Sell/Share My Personal Information"
                    href="/en-us/contact/do-not-sell"
                    className="box-border caret-transparent block outline-[3px] text-nowrap mb-2 hover:underline"
                  >
                    Do Not Sell/Share My Personal Information
                  </a>
                </div>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-nowrap mr-0 md:mr-3">
                <div className="box-border caret-transparent outline-[3px] text-nowrap">
                  <a
                    title=""
                    aria-label="Accessibility Statement"
                    href="/en-us/utility/accessibility-statement"
                    className="box-border caret-transparent block outline-[3px] text-nowrap mb-2 hover:underline"
                  >
                    Accessibility Statement
                  </a>
                </div>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-nowrap mr-0 md:mr-3">
                <div className="box-border caret-transparent outline-[3px] text-nowrap">
                  <a
                    title=""
                    aria-label="Code of Business Ethics"
                    href="/en-us/utility/code-of-business-ethics"
                    className="box-border caret-transparent block outline-[3px] text-nowrap mb-2 hover:underline"
                  >
                    Code of Business Ethics
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full outline-[3px] w-full">
            <p className="text-sm box-border caret-transparent outline-[3px]">
              © {new Date().getFullYear()} ITDorservices. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    );
  };
  