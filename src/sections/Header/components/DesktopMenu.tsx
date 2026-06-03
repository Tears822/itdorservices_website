import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <div className="[align-items:normal] box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] md:items-center md:flex md:min-h-[auto] md:min-w-[auto]">
      <div className="[align-items:normal] bg-white box-border caret-transparent h-auto min-h-0 min-w-0 outline-[3px] w-full mr-0 md:items-center md:h-20 md:min-h-[auto] md:min-w-[auto] md:w-auto md:mr-8">
        <div className="box-border caret-transparent hidden h-auto outline-[3px] md:block md:h-full">
          <div className="items-center box-border caret-transparent flex h-full outline-[3px]">
            <nav className="items-center box-border caret-transparent flex h-full min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[auto] md:w-auto">
              <ul className="items-center box-border caret-transparent flex h-full list-none min-h-0 min-w-0 outline-[3px] pl-0 md:min-h-[auto] md:min-w-[auto]">
                <li className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] text-nowrap pr-4 md:min-h-[auto] md:min-w-[auto]">
                  <Link
                    to="/en-us/services"
                    aria-label="Services"
                    className="font-bold box-border caret-transparent outline-[3px] text-nowrap"
                  >
                    Services
                  </Link>
                </li>
                <li className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] text-nowrap px-4 md:min-h-[auto] md:min-w-[auto]">
                  <Link
                    to="/en-us/software-solutions"
                    aria-label="Software Solutions"
                    className="font-bold box-border caret-transparent outline-[3px] text-nowrap"
                  >
                    Software Solutions
                  </Link>
                </li>
                <li className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] text-nowrap pl-4 md:min-h-[auto] md:min-w-[auto]">
                  <Link
                    to="/en-us/about"
                    aria-label="About"
                    className="font-bold box-border caret-transparent outline-[3px] text-nowrap"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
