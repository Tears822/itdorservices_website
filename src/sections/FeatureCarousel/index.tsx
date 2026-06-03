import { CarouselControls } from "@/sections/FeatureCarousel/components/CarouselControls";

export const FeatureCarousel = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-full mx-auto">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="static items-center box-border caret-transparent flex flex-col justify-center max-w-[1728px] min-h-0 outline-[3px] w-full overflow-hidden mx-auto p-0 md:relative md:[align-items:normal] md:flex-row md:justify-between md:min-h-[740px] md:px-20 md:py-[54px]">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="static box-border caret-transparent h-auto outline-[3px] w-auto overflow-visible inset-auto md:absolute md:h-full md:w-full md:overflow-hidden md:inset-0">
              <div className="static box-content caret-black block max-w-none min-h-0 outline-0 w-auto z-auto inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:flex md:max-w-[1728px] md:min-h-[740px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[-70] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0"></div>
            </div>
          </div>
          <div className="bg-white shadow-[rgba(0,0,0,0.05)_0px_10px_20px_5px] box-border caret-transparent flex flex-col justify-around min-h-full min-w-[auto] outline-[3px] w-screen z-10 mr-auto pt-6 pb-0 px-6 md:w-[552px] md:p-10">
            <div className="box-border caret-transparent h-auto max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:h-full md:max-w-screen-md">
              <div className="box-border caret-transparent flex flex-col outline-[3px]">
                <div className="box-content caret-black h-auto min-h-0 min-w-0 outline-0 md:aspect-auto md:box-border md:caret-transparent md:h-full md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                <div className="box-content caret-black min-h-0 min-w-0 outline-0 mt-0 md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mt-6 md:scroll-m-0 md:scroll-p-[auto]"></div>
              </div>
            </div>
            <CarouselControls />
          </div>
          <div className="self-end bg-white box-border caret-transparent hidden max-w-[350px] min-h-0 min-w-0 opacity-90 outline-[3px] ml-auto md:block md:min-h-[auto] md:min-w-[auto]">
            <div className="box-content caret-black outline-0 md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
