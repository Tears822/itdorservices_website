import { Link } from "react-router-dom";
import { softwareSolutions } from "@/data/services";

export const SoftwareSolutionsPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            New offering
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            Software Solutions
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            We are now offering software solutions alongside our IT services —
            custom development, integrations, and business applications built
            for how you work.
          </p>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            IT support meets software expertise
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            ITDorservices has expanded beyond traditional IT services. We
            now design, build, and deliver software solutions that complement
            the infrastructure and support you already trust us for — keeping
            everything under one roof.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softwareSolutions.map((solution) => (
            <Link
              key={solution.path}
              to={solution.path}
              className="block p-6 rounded-2xl border border-zinc-200 hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl mb-4 block">{solution.icon}</span>
              <h2 className="text-xl font-bold mb-2">{solution.name}</h2>
              <p className="text-zinc-600">{solution.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-zinc-600 mb-4">
            Need our core IT services? We&apos;ve got you covered.
          </p>
          <Link
            to="/en-us/services"
            className="inline-block font-bold text-[rgb(206,5,105)] hover:underline"
          >
            View IT Services →
          </Link>
        </div>
      </section>
    </main>
  );
};
