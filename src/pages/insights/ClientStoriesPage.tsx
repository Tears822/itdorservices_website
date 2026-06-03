import { Link } from "react-router-dom";

const stories = [
  { client: "Equitable Bank", industry: "Banking", technology: "AI & Automation", title: "Equitable Bank transforms loan processing with intelligent document automation", desc: "Avanade helped Equitable Bank automate document management and approval workflows.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/3.webp", result: "90% reduction in manual document processing time" },
  { client: "Virgin Money", industry: "Banking", technology: "Intelligent Automation", title: "Virgin Money uses AI-powered chatbot to transform customer service", desc: "By deploying an AI chatbot, Virgin Money handles high-volume ISA activity without increasing headcount.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/11.webp", result: "40% reduction in customer service wait times" },
  { client: "Siemens AG", industry: "Manufacturing", technology: "Security", title: "Siemens AG partners with Avanade to modernize global cybersecurity posture", desc: "Avanade deployed a comprehensive Microsoft Security stack for Siemens.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/13.webp", result: "Zero Trust deployed across 350,000 endpoints" },
  { client: "ABB Turbocharging", industry: "Manufacturing", technology: "Mixed Reality", title: "ABB Turbocharging accelerates field service with mixed reality", desc: "Using Microsoft HoloLens and Dynamics 365 Remote Assist, ABB technicians resolve complex issues remotely.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp", result: "60% faster issue resolution for field engineers" },
  { client: "OTP Bank", industry: "Banking", technology: "Data & Analytics", title: "OTP Bank builds a unified data platform on Microsoft Azure", desc: "Avanade built a centralized data infrastructure on Azure for OTP Bank.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/3.webp", result: "Real-time analytics across 15M+ customer records" },
  { client: "Scania", industry: "Automotive", technology: "Power Platform", title: "Scania streamlines operations with Microsoft Power Platform", desc: "Avanade implemented Power Apps and Power Automate across Scania's operations.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/11.webp", result: "200+ automated workflows deployed globally" },
];

export const ClientStoriesPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <Link to="/en-us/insights" className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-block">← Insights</Link>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2 mb-6">Client Success Stories</h1>
          <p className="text-white text-lg max-w-2xl">Real outcomes from organizations transforming with Avanade and Microsoft.</p>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div key={story.title} className="rounded-2xl overflow-hidden border border-zinc-200">
              <img src={story.img} alt={story.client} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-zinc-100">{story.industry}</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-zinc-100">{story.technology}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{story.title}</h2>
                <p className="text-zinc-600 mb-3">{story.desc}</p>
                <p className="text-sm font-semibold text-[rgb(206,5,105)]">{story.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
