import { Link } from "react-router-dom";

const articles = [
  {
    category: "AI",
    title: "Responsible AI at Scale: A Practical Guide for Enterprise Leaders",
    date: "May 28, 2026",
    img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp",
    path: "/en-us/insights/responsible-ai",
  },
  {
    category: "Security",
    title: "Zero Trust Architecture: Moving from Strategy to Implementation",
    date: "May 20, 2026",
    img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/13.webp",
    path: "/en-us/insights/zero-trust",
  },
  {
    category: "Cloud",
    title: "Maximizing ROI from Azure: Lessons from 1,000 Migrations",
    date: "May 14, 2026",
    img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/11.webp",
    path: "/en-us/insights/azure-roi",
  },
  {
    category: "Microsoft Copilot",
    title: "How Copilot Is Changing the Way Finance Teams Work",
    date: "May 7, 2026",
    img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/3.webp",
    path: "/en-us/insights/copilot-finance",
  },
  {
    category: "Client Story",
    title: "EQ Bank Transforms Customer Banking Experience with Avanade",
    date: "April 30, 2026",
    img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/18.webp",
    path: "/en-us/insights/eq-bank",
  },
  {
    category: "Events",
    title: "Microsoft Build 2026: Key Takeaways for Enterprise IT Leaders",
    date: "April 22, 2026",
    img: "https://c.animaapp.com/mpwv05edh3Fe6z/assets/13.webp",
    path: "/en-us/insights/build-2026",
  },
];

const subNav = [
  { label: "Client Success Stories", path: "/en-us/insights/clients" },
  { label: "Events", path: "/en-us/insights/events" },
];

export const InsightsPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            From the people
            <br />
            deploying it first
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-8">
            Forward-looking research and field notes on technology innovation,
            AI, and security from the world&apos;s largest team of Microsoft
            experts.
          </p>
          <div className="flex gap-4 flex-wrap">
            {subNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white border border-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[rgb(206,5,105)] transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-[1176px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.path}
              to={article.path}
              className="block rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
            >
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-[rgb(206,5,105)] font-semibold">
                  {article.category}
                </span>
                <h2 className="text-lg font-bold mt-2 mb-2">{article.title}</h2>
                <p className="text-sm text-zinc-500">{article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
