import { useState } from "react";
import { Link } from "react-router-dom";

const mockJobs = [
  { title: "Microsoft Technology Account Lead", location: "New York, NY", area: "Sales", type: "Full-time", posted: "2 days ago" },
  { title: "Workplace Advisory Consultant", location: "Chicago, IL", area: "Workplace Advisory", type: "Full-time", posted: "3 days ago", salary: "$165,000 – $195,000/yr" },
  { title: "Azure Cloud Solutions Architect", location: "Seattle, WA", area: "Azure Platform", type: "Full-time", posted: "1 week ago" },
  { title: "AI & Machine Learning Engineer", location: "San Francisco, CA", area: "AI", type: "Full-time", posted: "1 week ago" },
  { title: "Dynamics 365 Functional Consultant", location: "Dallas, TX", area: "Business Applications", type: "Full-time", posted: "2 weeks ago" },
  { title: "Cybersecurity Analyst — IAM", location: "Washington D.C.", area: "IAM & Data Protection", type: "Full-time", posted: "2 weeks ago" },
  { title: "Data Engineering Lead", location: "Boston, MA", area: "Intelligent Data Platform", type: "Full-time", posted: "3 weeks ago" },
  { title: "UX/CX Design Strategist", location: "Austin, TX", area: "Creative & UX", type: "Full-time", posted: "3 weeks ago" },
  { title: "Power Platform Developer", location: "Remote", area: "Business Applications", type: "Full-time", posted: "1 month ago" },
  { title: "Graduate Technology Consultant", location: "Multiple Locations", area: "Digital Enterprise Advisory", type: "Full-time", posted: "1 month ago" },
];

export const SearchJobsPage = () => {
  const [query, setQuery] = useState("");
  const filtered = mockJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase()) ||
      job.area.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <Link to="/en-us/career" className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-block">← Careers</Link>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2 mb-6">Search Jobs</h1>
          <input
            type="search"
            placeholder="Search by title, location, or area..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-full text-zinc-800 outline-none"
          />
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16">
        <div className="space-y-4">
          {filtered.map((job) => (
            <div key={job.title} className="p-6 rounded-2xl border border-zinc-200 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-1">{job.title}</h2>
              <p className="text-zinc-600 text-sm mb-2">{job.location} · {job.area} · {job.type}</p>
              {job.salary && <p className="text-sm font-semibold text-[rgb(206,5,105)] mb-2">{job.salary}</p>}
              <p className="text-xs text-zinc-400">Posted {job.posted}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
