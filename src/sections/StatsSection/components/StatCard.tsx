export type StatCardProps = {
    value: string;
    suffix?: string;
    description: string;
    cardVariant: string;
  };
  
  export const StatCard = (props: StatCardProps) => {
    return (
      <div
        className={`box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-3/12 ${props.cardVariant}`}
      >
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent flex shrink-0 flex-wrap h-full justify-center outline-[3px] text-center w-full">
            <div className="box-border caret-transparent shrink-0 h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-4">
              <div className="box-border caret-transparent opacity-40 outline-[3px] translate-y-5 mb-2">
                <h2 className="text-[28px] font-bold bg-clip-text bg-[linear-gradient(90deg,rgb(206,5,105)_12.66%,rgb(255,88,0)_94.55%)] box-border caret-transparent inline-block leading-[34px] outline-[3px] break-words -mb-2.5 pb-2.5 md:text-5xl md:leading-[62px]">
                  {props.value}
                </h2>
                {props.suffix ? (
                  <div className="text-xl font-bold bg-clip-text bg-[linear-gradient(90deg,rgb(206,5,105)_12.66%,rgb(255,88,0)_94.55%)] box-border caret-transparent inline-block leading-[normal] outline-[3px] md:text-[28px] md:leading-9">
                    {props.suffix}
                  </div>
                ) : null}
              </div>
              <div className="box-border caret-transparent outline-[3px] mx-auto">
                <div className="box-border caret-transparent outline-[3px]">
                  <p className="box-border caret-transparent outline-[3px] break-words">
                    <span className="box-border caret-transparent outline-[3px] break-words">
                      {props.description}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  