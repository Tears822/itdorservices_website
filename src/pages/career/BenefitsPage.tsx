import { Link } from "react-router-dom";

const benefits = [
  { category: "Flexibility", icon: "🏡", items: ["Hybrid and remote work options", "Flexible hours designed around your needs", "Trust in employees to design their own schedules", "Choice in where, when, and how you work"] },
  { category: "Well-being", icon: "❤️", items: ["Comprehensive healthcare coverage", "Generous family and parental leave", "Well-being programs and Employee Assistance Program", "Paid time off and vacation policies"] },
  { category: "Financial Rewards", icon: "💰", items: ["Competitive base salary", "Short-term and long-term incentive plans", "Employee stock purchase program", "Retirement plans with employer match"] },
  { category: "Learning & Growth", icon: "🎓", items: ["Dedicated training and learning time", "Microsoft and technology certifications", "OnDemand learning portal access", "Leading-edge methodologies and innovation labs"] },
  { category: "Recognition", icon: "🏆", items: ["Celebrate Orange recognition program", "Go Teams peer-to-peer recognition", "Orange Ambassador company awards", "Talent Referral Program bonuses"] },
  { category: "Extended Benefits", icon: "🎁", items: ["Technology and equipment allowances", "Work-related expense coverage", "Corporate match for charitable giving (up to $250/year)", "Paid volunteer time off"] },
];

const philosophy = [
  { title: "Attract, retain and motivate", desc: "Support for healthcare, family leave, and other needs that help our people do their best work." },
  { title: "Share in our success", desc: "Programs like employee stock purchase, short-term, and long-term incentives so you benefit when we grow." },
  { title: "Support your well-being", desc: "Flexible work, wellness programs, and a culture that prioritizes balance and mental health." },
];

export const BenefitsPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <Link to="/en-us/career" className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-block">← Careers</Link>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2 mb-6">Benefits & Total Rewards</h1>
          <p className="text-white text-lg max-w-2xl">Competitive pay, flexible work, and benefits built around what matters to you.</p>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophy.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl border border-zinc-200">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.category} className="p-6 rounded-2xl border border-zinc-200">
              <span className="text-3xl">{benefit.icon}</span>
              <h2 className="text-xl font-bold mt-4 mb-4">{benefit.category}</h2>
              <ul className="list-disc pl-5 text-zinc-600 space-y-1">
                {benefit.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
