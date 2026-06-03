export const ContactForm = () => {
    return (
      <form className="text-xs box-border caret-transparent leading-[18px] outline-[3px] text-left w-full font-arial">
        <div className="box-border caret-transparent clear-both gap-x-[25px] flex flex-wrap justify-between outline-[3px]">
          <div className="relative box-border caret-transparent clear-both flex basis-[0%] grow float-none min-h-6 min-w-full outline-[3px] mb-2.5 pb-3.5 md:clear-none md:block md:float-left md:min-w-0">
            <div className="box-border caret-transparent hidden float-left h-0 outline-[3px] w-[50px]"></div>
            <div className="box-border caret-transparent float-none outline-[3px] w-full md:float-left">
              <label className="text-base box-border caret-transparent block float-left leading-6 outline-[3px] w-full mb-2 font-segoe_ui">
                <div className="text-red-700 box-border caret-transparent float-left outline-[3px] pr-[5px]">
                  *
                </div>
                First Name:
              </label>
              <div className="box-border caret-transparent hidden float-left h-[14.4px] outline-[3px] w-auto md:w-2.5"></div>
              <input
                name="FirstName"
                type="text"
                className="text-base box-border caret-transparent clear-left block float-left h-10 leading-6 outline-[3px] text-start w-full border border-neutral-400 px-4 py-2 rounded-[20px] border-solid font-segoe_ui"
              />
              <span className="text-base box-border caret-transparent hidden leading-6 outline-[3px] font-segoe_ui"></span>
              <div className="box-border caret-transparent clear-both hidden h-0 outline-[3px]"></div>
            </div>
            <div className="box-border caret-transparent clear-both hidden h-0 outline-[3px]"></div>
          </div>
          <div className="relative box-border caret-transparent clear-both flex basis-[0%] grow float-none min-h-6 min-w-full outline-[3px] mb-2.5 pb-3.5 md:clear-none md:block md:float-left md:min-w-0">
            <div className="box-border caret-transparent hidden float-left h-0 outline-[3px] w-[50px]"></div>
            <div className="box-border caret-transparent float-none outline-[3px] w-full md:float-left">
              <label className="text-base box-border caret-transparent block float-left leading-6 outline-[3px] w-full mb-2 font-segoe_ui">
                <div className="text-red-700 box-border caret-transparent float-left outline-[3px] pr-[5px]">
                  *
                </div>
                Last Name:
              </label>
              <div className="box-border caret-transparent hidden float-left h-[14.4px] outline-[3px] w-auto md:w-2.5"></div>
              <input
                name="LastName"
                type="text"
                className="text-base box-border caret-transparent clear-left block float-left h-10 leading-6 outline-[3px] text-start w-full border border-neutral-400 px-4 py-2 rounded-[20px] border-solid font-segoe_ui"
              />
              <span className="text-base box-border caret-transparent hidden leading-6 outline-[3px] font-segoe_ui"></span>
              <div className="box-border caret-transparent clear-both hidden h-0 outline-[3px]"></div>
            </div>
            <div className="box-border caret-transparent clear-both hidden h-0 outline-[3px]"></div>
          </div>
          <div className="box-border caret-transparent clear-both hidden h-0 outline-[3px]"></div>
        </div>
        <div className="box-border caret-transparent clear-both gap-x-[25px] flex flex-wrap justify-between outline-[3px]">
          <div className="relative box-border caret-transparent clear-both flex basis-[0%] grow float-none min-h-6 min-w-full outline-[3px] mb-2.5 pb-3.5 md:clear-none md:block md:float-left md:min-w-0">
            <div className="box-border caret-transparent hidden float-left h-0 outline-[3px] w-[50px]"></div>
            <div className="box-border caret-transparent float-none outline-[3px] w-full md:float-left">
              <label className="text-base box-border caret-transparent block float-left leading-6 outline-[3px] w-full mb-2 font-segoe_ui">
                <div className="text-red-700 box-border caret-transparent float-left outline-[3px] pr-[5px]">
                  *
                </div>
                Business Email:
              </label>
              <div className="box-border caret-transparent hidden float-left h-[14.4px] outline-[3px] w-auto md:w-2.5"></div>
              <input
                name="Email"
                type="email"
                className="text-base box-border caret-transparent clear-left block float-left h-10 leading-6 outline-[3px] text-start w-full border border-neutral-400 px-4 py-2 rounded-[20px] border-solid font-segoe_ui"
              />
            </div>
          </div>
          <div className="relative box-border caret-transparent clear-both flex basis-[0%] grow float-none min-h-6 min-w-full outline-[3px] mb-2.5 pb-3.5 md:clear-none md:block md:float-left md:min-w-0">
            <div className="box-border caret-transparent float-none outline-[3px] w-full md:float-left">
              <label className="text-base box-border caret-transparent block float-left leading-6 outline-[3px] w-full mb-2 font-segoe_ui">
                Message:
              </label>
              <textarea
                name="Message"
                rows={4}
                className="text-base box-border caret-transparent clear-left block float-left leading-6 outline-[3px] text-start w-full border border-neutral-400 px-4 py-2 rounded-[20px] border-solid font-segoe_ui"
                placeholder="How can we help?"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="text-white text-sm font-semibold bg-zinc-800 box-border caret-transparent inline-block leading-4 outline-[3px] px-6 py-3 rounded-[28px] mt-4 hover:bg-neutral-600"
        >
          Submit
        </button>
      </form>
    );
  };
  