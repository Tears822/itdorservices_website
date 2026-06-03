import { Link } from "react-router-dom";
import { itServices } from "@/data/services";

export const ServicesPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            IT Services
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Reliable, hands-on IT support for businesses — from network
            connectivity and server support to emergency onsite dispatch.
          </p>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="block p-6 rounded-2xl border border-zinc-200 hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h2 className="text-xl font-bold mb-2">{service.name}</h2>
              <p className="text-zinc-600">{service.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[rgb(206,5,105)]/10 to-[rgb(255,88,0)]/10 border border-[rgb(206,5,105)]/20 text-center">
          <p className="text-lg font-semibold mb-2">
            We are now offering Software Solutions
          </p>
          <p className="text-zinc-600 mb-4">
            Alongside our IT services, we now build and deliver custom software
            solutions for your business.
          </p>
          <Link
            to="/en-us/software-solutions"
            className="inline-block bg-zinc-800 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-neutral-600 transition-colors"
          >
            Explore Software Solutions
          </Link>
        </div>
      </section>
    </main>
  );
};
