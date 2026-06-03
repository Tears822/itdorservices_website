import { Link } from "react-router-dom";

const commitments = [
  { title: "We uplift the diverse voices of our people", desc: "Through strong leadership, dedicated support networks, and a culture that actively fosters growth for everyone.", icon: "🎤" },
  { title: "We know diversity fuels innovation", desc: "When employees bring their authentic selves to work, they bring unique perspectives that lead to better solutions.", icon: "💡" },
  { title: "We empower communities for a brighter future", desc: "Promoting I&D, responsible AI, sustainable solutions, and supporting underrepresented communities.", icon: "🌱" },
];

const stats = [
  { value: "150+", label: "Employer awards since 2020" },
  { value: "14", label: "Employee networks" },
  { value: "3,000+", label: "EN members globally" },
  { value: "5,000+", label: "Interviewers trained in inclusive hiring" },
];

const networks = [
  "Adelante", "All Generations", "Asian", "Beyond Multicultural", "DiversAbility",
  "Indigenous and First Nations Australia", "INSPIRE Black", "Jewish", "Military Veterans",
  "Multicultural", "Muslim", "Parents", "Prism: LGBTQ+", "Women's",
];

export const InclusionDiversityPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <Link to="/en-us/career" className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-block">← Careers</Link>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2 mb-6">Inclusion & Diversity</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            We go beyond typical demographics to embrace what makes each person unique.
          </p>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16 space-y-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[rgb(206,5,105)]">{stat.value}</div>
              <p className="text-sm text-zinc-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl border border-zinc-200">
              <span className="text-3xl">{item.icon}</span>
              <h2 className="text-xl font-bold mt-4 mb-2">{item.title}</h2>
              <p className="text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Employee networks</h2>
          <div className="flex flex-wrap gap-3">
            {networks.map((network) => (
              <span key={network} className="px-4 py-2 rounded-full bg-zinc-100 text-sm font-medium">{network}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
