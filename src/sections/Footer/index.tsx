import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterLegal } from "@/sections/Footer/components/FooterLegal";

export const Footer = () => {
  return (
    <footer className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="bg-slate-100 box-border caret-transparent outline-[3px] overflow-x-hidden overflow-y-auto">
          <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto px-6 py-10">
            <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto">
              <FooterBrand />
              <div className="box-border caret-transparent outline-[3px] py-10">
                <hr className="text-zinc-500 border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-neutral-400 box-border caret-transparent opacity-20 outline-[3px]" />
              </div>
              <FooterLinks />
            </div>
            <FooterLegal />
          </div>
        </div>
      </div>
    </footer>
  );
};
