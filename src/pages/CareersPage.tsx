import { Link } from "react-router-dom";

const careerLinks = [
  {
    label: "Area of Expertise",
    path: "/en-us/career/area-of-expertise",
    desc: "Find your fit across technology, consulting, design, and more. Explore roles that match your skills.",
  },
  {
    label: "Countdown to Avanade",
    path: "/en-us/career/countdown",
    desc: "A structured onboarding program that helps new joiners ramp up fast and build lasting connections.",
  },
  {
    label: "Limitless Learning",
    path: "/en-us/career/limitless-learning",
    desc: "Access world-class training, Microsoft certifications, and continuous learning to grow your career.",
  },
  {
    label: "Inclusion & Diversity",
    path: "/en-us/career/inclusion-and-diversity",
    desc: "We believe diverse teams build better solutions. Learn how we foster belonging at every level.",
  },
  {
    label: "Life at Avanade",
    path: "/en-us/career/life-at-avanade",
    desc: "From global collaboration to local community impact — see what it's like to work here every day.",
  },
  {
    label: "Benefits & Total Rewards",
    path: "/en-us/career/benefits",
    desc: "Competitive pay, flexible work, health coverage, and more — built around what matters to you.",
  },
  {
    label: "Search Jobs",
    path: "/en-us/career/search-jobs",
    desc: "Ready to take the next step? Browse open roles across the globe and apply today.",
    highlight: true,
  },
];

export const CareersPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-b from-[rgb(206,5,105)] to-[rgb(255,88,0)] md:bg-gradient-to-r py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
              A career
              <br />
              that matters
            </h1>
            <p className="text-white text-lg md:text-xl mb-8">
              At Avanade, you&apos;ll work alongside 60,000 talented specialists
              transforming how work is done through the power of human ingenuity
              and Microsoft technology.
            </p>
            <Link
              to="/en-us/career/search-jobs"
              className="inline-block bg-zinc-800 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-neutral-600 transition-colors"
            >
              Search jobs
            </Link>
          </div>
          <div className="md:w-1/2 aspect-video overflow-hidden rounded-lg">
            <img
              src="https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp"
              alt="Avanade careers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block p-6 rounded-2xl border transition-shadow hover:shadow-lg ${
                link.highlight
                  ? "border-[rgb(206,5,105)] bg-gradient-to-r from-[rgb(206,5,105)]/5 to-[rgb(255,88,0)]/5"
                  : "border-zinc-200"
              }`}
            >
              <h2 className="text-xl font-bold mb-2">{link.label}</h2>
              <p className="text-zinc-600">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
