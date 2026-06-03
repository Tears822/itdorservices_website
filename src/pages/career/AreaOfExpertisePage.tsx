import { Link } from "react-router-dom";

const practices = [
  { name: "AI", desc: "Innovate across Generative AI, Deep Learning, Robotics, and Natural Language Processing." },
  { name: "Azure Platform", desc: "Migrate clients to the cloud, modernize applications, and develop cloud-native solutions on Azure." },
  { name: "Business Applications", desc: "Transform operations with Microsoft Dynamics 365, Power Platform, and intelligent automation." },
  { name: "Business Leadership", desc: "Drive growth, support sales, lead people, build culture, and elevate Employee Experience." },
  { name: "Business Process Mining & Automation", desc: "Improve process execution, quality, and efficiency using innovative automation technologies." },
  { name: "Client Leadership", desc: "Build, support, and enable a thriving client culture through strong relationships." },
  { name: "Creative & UX", desc: "Create transformative UX experiences that connect people with technology in meaningful ways." },
  { name: "Customer Engagement", desc: "Focus on customer interactions and service level agreements using Microsoft Dynamics 365." },
  { name: "Customer Experience", desc: "Create unforgettable experiences powered by real-time data and intelligent insights." },
  { name: "Data & Analytics", desc: "Provide tools and services to automate business processes and improve decision-making using AI and ML." },
  { name: "Digital Enterprise Advisory", desc: "Drive digital strategies, innovation design, and Data, Analytics, and AI advisory." },
  { name: "ERP", desc: "Unify global financials and operations using Microsoft Dynamics 365 Finance and Supply Chain." },
  { name: "Human Resources", desc: "Develop and implement People Strategy, cultivate an inclusive and growth-focused environment." },
  { name: "IAM & Data Protection", desc: "Protect identities, endpoints, and data; ensure compliance with Zero Trust models." },
  { name: "Intelligent Cyber Defense", desc: "Develop security strategies to improve security operations, governance, and Cyber Resilience." },
  { name: "Marketing", desc: "Create authentic, value-driven customer experiences aligned with brand purpose." },
  { name: "Org Change Management", desc: "Focus on enterprise change, digital culture, communication, and adoption strategies." },
  { name: "Sales", desc: "Build and grow client relationships, drive revenue, and deliver value through Microsoft solutions." },
  { name: "Workplace Advisory", desc: "Design modern workplace experiences powered by Microsoft 365 and Copilot." },
];

export const AreaOfExpertisePage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <Link to="/en-us/career" className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-block">← Careers</Link>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2 mb-6">Area of Expertise</h1>
          <p className="text-white text-lg max-w-2xl">Find your fit across technology, consulting, design, and more.</p>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice) => (
            <div key={practice.name} className="p-6 rounded-2xl border border-zinc-200">
              <h2 className="text-lg font-bold mb-2">{practice.name}</h2>
              <p className="text-zinc-600 text-sm">{practice.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
