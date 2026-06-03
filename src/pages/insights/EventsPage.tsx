import { Link } from "react-router-dom";

const events = [
  { title: "Incorporating AI Into Your 311 Program", type: "On-Demand", topic: "AI", industry: "Government", date: "Available now", desc: "Explore how AI can modernize 311 government services.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp" },
  { title: "Unlock Customer Experiences and Efficiency with AI and Low Code", type: "Webinar", topic: "AI & Power Platform", industry: "All Industries", date: "June 18, 2026", desc: "Learn how combining Microsoft Copilot and Power Platform enables rapid AI-powered experiences.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/13.webp" },
  { title: "AI Enabled Service Reinvention", type: "On-Demand", topic: "AI", industry: "Financial Services", date: "Available now", desc: "Discover how financial services firms are using AI agents to reinvent customer service.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/11.webp" },
  { title: "Azure Data Platform Webinar", type: "Webinar", topic: "Cloud & Data", industry: "All Industries", date: "June 25, 2026", desc: "Deep-dive into building a modern data platform on Azure.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/3.webp" },
  { title: "Copilot in Financial Services", type: "Webinar", topic: "Microsoft Copilot", industry: "Financial Services", date: "July 8, 2026", desc: "How banks and insurers are deploying Microsoft 365 Copilot.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp" },
  { title: "Enhancing Cybersecurity with GenAI", type: "In-person", topic: "Security", industry: "All Industries", date: "July 15, 2026 · London", desc: "Explore how Generative AI is transforming threat detection and response.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/13.webp" },
  { title: "Avanade World Tour: Grow Your Impact with AI", type: "In-person", topic: "AI", industry: "All Industries", date: "Multiple dates · Global", desc: "Our flagship global event series connecting business and technology leaders.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/11.webp", featured: true },
];

const typeColors: Record<string, string> = {
  "On-Demand": "bg-purple-50 text-purple-700",
  Webinar: "bg-blue-50 text-blue-700",
  "In-person": "bg-green-50 text-green-700",
};

export const EventsPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <Link to="/en-us/insights" className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-block">← Insights</Link>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2 mb-6">Events</h1>
          <p className="text-white text-lg max-w-2xl">Webinars, on-demand sessions, and in-person events from Avanade experts.</p>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.title} className={`rounded-2xl overflow-hidden border ${event.featured ? "border-[rgb(206,5,105)]" : "border-zinc-200"}`}>
              <img src={event.img} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${typeColors[event.type]}`}>{event.type}</span>
                <h2 className="text-lg font-bold mt-3 mb-2">{event.title}</h2>
                <p className="text-sm text-zinc-500 mb-2">{event.date}</p>
                <p className="text-zinc-600 text-sm">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
