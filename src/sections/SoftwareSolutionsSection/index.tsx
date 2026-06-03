import { Link } from "react-router-dom";

export const SoftwareSolutionsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-full mx-auto">
      <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Now offering
            </span>
            <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight mb-4">
              Software Solutions
            </h2>
            <p className="text-white/90 text-lg">
              We are now offering software solutions alongside our IT services —
              custom development, business applications, integrations, and
              automation built for your business.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Link
              to="/en-us/software-solutions"
              className="inline-block bg-white text-[rgb(206,5,105)] text-sm font-semibold px-8 py-3 rounded-full hover:bg-zinc-100 transition-colors whitespace-nowrap"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
