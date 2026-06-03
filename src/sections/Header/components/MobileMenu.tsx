import { Link } from "react-router-dom";

export type MobileMenuProps = {
  variant: string;
};

export const MobileMenu = (props: MobileMenuProps) => {
  if (props.variant === "search") {
    return (
      <div className="box-border caret-transparent outline-[3px] flex shrink-0 min-h-[auto] min-w-[auto] w-6">
        <button
          type="button"
          title="Search icon"
          className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-center p-0"
        >
          <i className="box-border caret-transparent flex h-6 min-h-6 min-w-6 outline-[3px] w-6 before:accent-auto before:bg-[url('https://www.avanade.com/_next/static/media/spriteIcon.10c7f507.svg')] before:bg-[position:-152px_-196px] before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-segoe_ui"></i>
        </button>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent outline-[3px] bg-white hidden w-full">
      <ul className="box-border caret-transparent list-none outline-[3px] pl-0">
        <li className="box-border caret-transparent outline-[3px] mb-0 md:mb-2">
          <div className="items-center box-border caret-transparent flex justify-between outline-[3px] pl-4 pr-2 py-2">
            <Link
              to="/en-us/services"
              className="text-xl font-bold items-center box-border caret-transparent flex h-7 leading-[normal] outline-[3px] w-full md:text-lg"
            >
              Services
            </Link>
          </div>
        </li>
        <li className="box-border caret-transparent outline-[3px] mb-0 md:mb-2">
          <div className="items-center box-border caret-transparent flex justify-between outline-[3px] pl-4 pr-2 py-2">
            <Link
              to="/en-us/software-solutions"
              className="text-xl font-bold items-center box-border caret-transparent flex h-7 leading-[normal] outline-[3px] w-full md:text-lg"
            >
              Software Solutions
            </Link>
          </div>
        </li>
        <li className="box-border caret-transparent outline-[3px] mb-0 md:mb-2">
          <div className="items-center box-border caret-transparent flex justify-between outline-[3px] pl-4 pr-2 py-2">
            <Link
              to="/en-us/about"
              className="text-xl font-bold items-center box-border caret-transparent flex h-7 leading-[normal] outline-[3px] w-full md:text-lg"
            >
              About
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
