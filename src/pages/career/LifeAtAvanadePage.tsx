import { Link } from "react-router-dom";

const pillars = [
  { title: "Distinctive experiences", desc: "Opportunities to shape careers that are truly unique — working across industries, technologies, and geographies.", icon: "⭐" },
  { title: "Limitless learning", desc: "We embrace curiosity, celebrate challenges, and provide the platforms and time needed to continuously grow.", icon: "📚" },
  { title: "Meaningful work", desc: "Driven by purpose and powered by Microsoft technology — we create positive change for clients and communities.", icon: "🌟" },
];

const stories = [
  { name: "Eunice", role: "Technology Consultant", quote: "Every project I work on makes a tangible impact.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp" },
  { name: "Dan", role: "AI Solutions Architect", quote: "Avanade gives me the tools, the trust, and the freedom to innovate at scale.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/13.webp" },
  { name: "Jennifer", role: "Senior Analyst", quote: "Avanade supported me in completing my college degree while working full time.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/11.webp" },
];

export const LifeAtAvanadePage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-b from-[rgb(206,5,105)] to-[rgb(255,88,0)] md:bg-gradient-to-r py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <Link to="/en-us/career" className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-block">← Careers</Link>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2 mb-6">Life at Avanade</h1>
            <p className="text-white text-lg md:text-xl mb-4 opacity-90">
              Discover what makes working at Avanade a distinctive experience.
            </p>
          </div>
          <div className="md:w-1/2 aspect-video overflow-hidden rounded-lg">
            <img src="https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp" alt="Life at Avanade" className="w-full h-full object-cover" />
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.name} className="rounded-2xl overflow-hidden border border-zinc-200">
              <img src={story.img} alt={story.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold">{story.name}</h3>
                <p className="text-sm text-[rgb(206,5,105)] mb-3">{story.role}</p>
                <p className="text-zinc-600 italic">&ldquo;{story.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
