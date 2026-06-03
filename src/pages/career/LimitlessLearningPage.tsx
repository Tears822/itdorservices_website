import { Link } from "react-router-dom";

const pillars = [
  { title: "Deepen your Microsoft expertise", desc: "Access Microsoft certifications, extensive learning resources, and hands-on project experience.", icon: "🪟" },
  { title: "Define your unique career path", desc: "We support you in developing technology, industry, and leadership skills.", icon: "🗺️" },
  { title: "Learn from diverse perspectives", desc: "Our open culture promotes diverse viewpoints and meaningful collaboration.", icon: "🌍" },
];

const platforms = [
  { name: "Avanade University", desc: "Self-study programs, instructor-led training, certifications, and innovation hackathons." },
  { name: "AI Learning & Capability", desc: "AI-first approach equipping every team member with the tools and skills for AI collaboration." },
  { name: "Udacity & Skillsoft", desc: "World-class online courses across data science, AI, cloud, and software engineering." },
  { name: "Microsoft Partner Skilling Hub", desc: "Exclusive Microsoft learning pathways and certification prep resources." },
  { name: "BetterUp Coaching", desc: "Professional coaching matched to your personal development goals." },
  { name: "goFLUENT", desc: "Language learning support to help you collaborate across our global organization." },
];

export const LimitlessLearningPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <Link to="/en-us/career" className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-block">← Careers</Link>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2 mb-6">Limitless learning</h1>
          <p className="text-white text-lg max-w-2xl">Grow your skills with world-class learning platforms and programs.</p>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-6 rounded-2xl border border-zinc-200">
              <span className="text-3xl">{pillar.icon}</span>
              <h2 className="text-xl font-bold mt-4 mb-2">{pillar.title}</h2>
              <p className="text-zinc-600">{pillar.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <div key={platform.name} className="p-6 rounded-2xl border border-zinc-200">
              <h2 className="text-xl font-bold mb-2">{platform.name}</h2>
              <p className="text-zinc-600">{platform.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
