import { Link } from "react-router-dom";

const peopleStats = [
  { value: "100%", label: "Gender pay parity worldwide (2023)" },
  { value: "Gold", label: "EcoVadis sustainability rating" },
  { value: "900", label: "Leaders trained in well-being & inclusion" },
  { value: "14", label: "Employee networks for underrepresented groups" },
];

const communityStats = [
  { value: "32,524", label: "Employee volunteer hours (FY23)" },
  { value: "$6M", label: "Donations — cash and in-kind (FY23)" },
  { value: "14,305", label: "Young people given access to computers" },
  { value: "1.2M", label: "People impacted by Citizenship efforts" },
];

const pillars = [
  {
    title: "Our People",
    icon: "👥",
    desc: "We put our people first — investing in their safety, well-being, inclusion, diversity, and readiness for the future of work.",
    details: [
      "Inclusive hiring with 'License to Hire' training",
      "14 Employee Networks with 3,000+ members",
      "100% gender pay parity worldwide",
      "900+ leaders trained in well-being & inclusion",
    ],
  },
  {
    title: "Our Clients",
    icon: "🤝",
    desc: "We help clients build a sustainable, responsible digital future through ethical AI adoption, green technology, and innovation that benefits society.",
    details: [
      "EcoVadis Gold Medal — top 5% of companies",
      "Green Software Foundation partnership",
      "Tech for Social Good initiative",
      "Responsible AI advisory roadmap for clients",
    ],
  },
  {
    title: "Our Community",
    icon: "🌍",
    desc: "We invest in communities through corporate citizenship, STEM education, and youth empowerment programmes that create lasting impact.",
    details: [
      "1.6M+ youth equipped for STEM careers",
      "32,524 volunteer hours (FY23)",
      "FUEL Conference: 750+ emerging leaders",
      "$6M in cash and in-kind donations",
    ],
  },
];

export const ResponsibleBusinessPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <Link to="/en-us/about" className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-flex items-center gap-1">
            ← About
          </Link>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2">
            Responsible Business
          </h1>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16 space-y-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {peopleStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[rgb(206,5,105)]">{stat.value}</div>
              <p className="text-sm text-zinc-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-6 rounded-2xl border border-zinc-200">
              <span className="text-3xl">{pillar.icon}</span>
              <h2 className="text-xl font-bold mt-4 mb-2">{pillar.title}</h2>
              <p className="text-zinc-600 mb-4">{pillar.desc}</p>
              <ul className="list-disc pl-5 text-sm text-zinc-600 space-y-1">
                {pillar.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {communityStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[rgb(206,5,105)]">{stat.value}</div>
              <p className="text-sm text-zinc-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
