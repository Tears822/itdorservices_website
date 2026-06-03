import { Link } from "react-router-dom";

const steps = [
  { num: "01", title: "Sign your acceptance letter", desc: "Congratulations on your offer! Review and sign your acceptance letter to confirm your start date." },
  { num: "02", title: "Set up your Workday profile", desc: "Complete your profile in Workday with personal details, banking info, and emergency contacts." },
  { num: "03", title: "Dive into Avanade events", desc: "Meet your team, hear from leadership, and learn what it means to Go Orange." },
  { num: "04", title: "Access your Year One resources", desc: "From day one, you'll have a curated learning plan, a buddy, and a manager ready to help you thrive." },
];

const faqs = [
  { q: "What should I do before my first day?", a: "Complete your Workday profile, sign your offer letter, and check your email for IT setup instructions." },
  { q: "What is 'Go Orange'?", a: "Go Orange is our global onboarding program designed to welcome new joiners into the Avanade community." },
  { q: "Will I have a buddy or mentor?", a: "Yes — every new joiner is paired with an onboarding buddy who can answer questions." },
  { q: "What equipment will I receive?", a: "You'll receive a laptop and any necessary peripherals before your start date." },
  { q: "Can I request accommodations?", a: "Absolutely. Contact your recruiter or HR partner to discuss accessibility needs." },
];

export const CountdownPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <Link to="/en-us/career" className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-block">← Careers</Link>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2 mb-4">Countdown to Avanade</h1>
          <p className="text-white text-lg max-w-2xl">Your step-by-step guide to joining Avanade.</p>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="p-6 rounded-2xl border border-zinc-200">
              <span className="text-[rgb(206,5,105)] font-bold text-2xl">{step.num}</span>
              <h2 className="text-xl font-bold mt-2 mb-2">{step.title}</h2>
              <p className="text-zinc-600">{step.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-zinc-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
