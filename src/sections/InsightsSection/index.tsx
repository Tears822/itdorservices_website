export const InsightsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-full mx-auto">
      <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto px-6 py-10">
        <div className="box-border caret-transparent flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-5/12">
            <h2 className="text-[28px] font-bold bg-clip-text bg-[linear-gradient(90deg,rgb(206,5,105)_12.66%,rgb(255,88,0)_94.55%)] box-border caret-transparent leading-[34px] outline-[3px] break-words md:text-5xl md:leading-[62px] mb-6">
              From the people deploying it first
            </h2>
            <p className="text-zinc-600 mb-6">
              Forward-looking research and field notes on technology innovation,
              AI, and security from the world&apos;s largest team of Microsoft
              experts.
            </p>
            <a
              href="/en-us/insights"
              className="font-bold text-zinc-800 hover:underline"
            >
              Explore insights
            </a>
          </div>
          <div className="md:w-7/12 aspect-video overflow-hidden rounded-3xl">
            <img
              src="https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp"
              alt="Avanade insights"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
