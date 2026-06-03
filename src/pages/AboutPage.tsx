import { Link } from "react-router-dom";

const stats = [
  { value: "24/7", label: "Emergency dispatch available" },
  { value: "7+", label: "Core IT service areas" },
  { value: "100%", label: "Client-focused support" },
  { value: "New", label: "Software solutions now offered" },
];

export const AboutPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            About ITDorservices
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Dependable IT services for businesses — and now, custom software
            solutions to help you work smarter.
          </p>
        </div>
      </section>

      <section className="bg-zinc-800 py-12">
        <div className="max-w-[1176px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1176px] mx-auto px-6 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Who we are</h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            ITDorservices is a hands-on IT services provider specializing in
            network support, server maintenance, structured cabling, desktop
            support, VOIP installations, and emergency onsite dispatch. We keep
            your technology running so you can focus on your business.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            We are now offering software solutions — custom development,
            business applications, integrations, and automation — delivered
            alongside the IT support you already trust.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/en-us/services"
            className="block rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow p-6"
          >
            <h2 className="text-xl font-bold mb-2">IT Services</h2>
            <p className="text-zinc-600">
              Network connectivity, emergency dispatch, cabling, desktop & server
              support, networking, and VOIP.
            </p>
          </Link>
          <Link
            to="/en-us/software-solutions"
            className="block rounded-2xl overflow-hidden border border-[rgb(206,5,105)]/30 bg-gradient-to-r from-[rgb(206,5,105)]/5 to-[rgb(255,88,0)]/5 hover:shadow-lg transition-shadow p-6"
          >
            <span className="text-xs font-semibold text-[rgb(206,5,105)] uppercase tracking-wide">
              New
            </span>
            <h2 className="text-xl font-bold mb-2 mt-1">Software Solutions</h2>
            <p className="text-zinc-600">
              Custom software, business apps, integrations, and automation —
              now offered alongside our IT services.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
};
