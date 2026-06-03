import { Link } from "react-router-dom";

const BackLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-flex items-center gap-1"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
    {label}
  </Link>
);

const executives = [
  { name: "Chris Howarth", role: "Chief Executive Officer", bio: "Chris leads Avanade's global strategy, culture, and client relationships.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/13.webp" },
  { name: "Danielle Brady", role: "Chief Operating Officer", bio: "Danielle oversees Avanade's day-to-day operations and delivery excellence.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/11.webp" },
  { name: "Ashley Gatehouse", role: "Chief Marketing Officer", bio: "Ashley brings over 25 years of senior business leadership experience.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp" },
  { name: "Katie O'Conor", role: "Chief Financial Officer", bio: "Katie leads Avanade's global finance function with over 30 years of experience.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/13.webp" },
  { name: "Nisha Verma", role: "Chief People Officer", bio: "Nisha drives Avanade's people strategy, talent, and culture agenda.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/11.webp" },
  { name: "Ruth Rowan", role: "Chief Growth Officer", bio: "Ruth leads Avanade's growth agenda globally.", img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp" },
];

const geographies = [
  { name: "Robert Goegele", role: "Area President, Europe & Middle East", bio: "Robert brings more than 30 years of international experience." },
  { name: "Bhavya Kapoor", role: "Area President, Asia Pacific", bio: "Bhavya leads Avanade's Asia Pacific business." },
  { name: "Gord Mawhinney", role: "Area President, The Americas", bio: "Gord oversees Avanade's largest business unit." },
];

const innovation = [
  { name: "Rani Gopalakrishnan", role: "Global Lead, Advanced Technology Centers", bio: "Rani leads a global team of 30,000+ technology experts." },
  { name: "Aaron Reich", role: "Chief Technology & Innovation Officer", bio: "Aaron shapes Avanade's technology vision and innovation roadmap." },
];

const LeaderCard = ({ name, role, bio, img }: { name: string; role: string; bio: string; img?: string }) => (
  <div className="rounded-2xl border border-zinc-200 overflow-hidden">
    {img && <img src={img} alt={name} className="w-full h-48 object-cover" />}
    <div className="p-6">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-[rgb(206,5,105)] font-semibold mt-1">{role}</p>
      <p className="text-zinc-600 mt-3">{bio}</p>
    </div>
  </div>
);

export const LeadershipPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <BackLink to="/en-us/about" label="About" />
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2">Leadership</h1>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16 space-y-16">
        <div>
          <h2 className="text-3xl font-bold mb-8">Executive team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((leader) => (
              <LeaderCard key={leader.name} {...leader} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8">Geography leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {geographies.map((leader) => (
              <LeaderCard key={leader.name} {...leader} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8">Technology & innovation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovation.map((leader) => (
              <LeaderCard key={leader.name} {...leader} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
