import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";

export const Navbar = () => {
  return (
    <div className="fixed items-center bg-white shadow-[rgba(0,0,0,0.05)_0px_10px_20px_5px] box-border caret-transparent flex justify-center min-h-16 outline-[3px] w-full z-[80] top-0 md:min-h-20">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"></div>
      <div className="items-center box-border caret-transparent flex grid-cols-none max-w-[1176px] min-h-[auto] min-w-[auto] outline-[3px] w-full mx-auto px-6 md:grid md:grid-cols-[1fr_36fr_1fr]">
        <NavbarLogo />
        <div className="[align-items:normal] box-border caret-transparent block min-h-[auto] min-w-[auto] order-1 outline-[3px] ml-0 md:items-center md:flex md:order-none md:ml-auto">
          <div className="bg-[url('https://www.avanade.com/_next/static/media/spriteIcon.10c7f507.svg')] bg-no-repeat box-border caret-transparent flex h-6 outline-[3px] w-6 bg-[position:-369px_-106px] ml-6 inset-0 md:bg-none md:hidden"></div>
          <DesktopMenu />
        </div>
        <MobileMenu variant="search" />
      </div>
    </div>
  );
};
