import { Link } from "react-router-dom";

const industries = [
  {
    name: "Automotive",
    path: "/en-us/industry/automotive",
    desc: "Accelerating the shift to connected, electric, and autonomous vehicles with Microsoft-powered platforms.",
  },
  {
    name: "Banking",
    path: "/en-us/industry/banking",
    desc: "Modernizing core banking, risk management, and customer experience through intelligent automation.",
  },
  {
    name: "Capital Markets",
    path: "/en-us/industry/capital-markets",
    desc: "Transforming trading, compliance, and operations with AI-driven insights and cloud infrastructure.",
  },
  {
    name: "Consumer Goods",
    path: "/en-us/industry/consumer-goods",
    desc: "Building agile, data-driven supply chains and personalized consumer engagement at scale.",
  },
  {
    name: "Energy",
    path: "/en-us/industry/energy",
    desc: "Powering the energy transition with digital solutions that optimize assets and decarbonize operations.",
  },
  {
    name: "Government & Public Services",
    path: "/en-us/industry/government-and-public-services",
    desc: "Enabling modern government through secure cloud, AI, and citizen-centric digital services.",
  },
  {
    name: "Healthcare",
    path: "/en-us/industry/health",
    desc: "Improving patient outcomes and operational efficiency with connected health solutions on Microsoft Cloud.",
  },
  {
    name: "Insurance",
    path: "/en-us/industry/insurance",
    desc: "Reimagining underwriting, claims, and customer journeys with intelligent automation and analytics.",
  },
  {
    name: "Life Sciences",
    path: "/en-us/industry/life-sciences",
    desc: "Accelerating drug development, clinical trials, and commercial operations with data and AI.",
  },
  {
    name: "Manufacturing",
    path: "/en-us/industry/manufacturing",
    desc: "Driving smart factory adoption, predictive maintenance, and supply chain resilience.",
  },
  {
    name: "Nonprofit",
    path: "/en-us/industry/nonprofit",
    desc: "Empowering mission-driven organizations with affordable cloud solutions and purpose-built tools.",
  },
  {
    name: "Retail",
    path: "/en-us/industry/retail",
    desc: "Creating unified commerce experiences that connect stores, digital channels, and supply chains.",
  },
  {
    name: "Utilities",
    path: "/en-us/industry/utilities",
    desc: "Modernizing grid operations and customer engagement for a sustainable energy future.",
  },
];

export const IndustriesPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            Industries
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Deep industry expertise combined with Microsoft technology to
            deliver outcomes that matter.
          </p>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.path}
              to={industry.path}
              className="block p-6 rounded-2xl border border-zinc-200 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-bold mb-2">{industry.name}</h2>
              <p className="text-zinc-600">{industry.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
