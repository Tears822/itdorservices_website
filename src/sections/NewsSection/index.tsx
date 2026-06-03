import { NewsCard } from "@/sections/NewsSection/components/NewsCard";

const newsItems = [
  {
    title: "Avanade named Microsoft Global SI Partner of the Year",
    href: "/en-us/insights/avanade-partner-award",
    linkTitle: "Read more about Avanade partner award",
    linkAriaLabel: "Read more about Avanade partner award",
  },
  {
    title: "How responsible AI is reshaping enterprise transformation",
    href: "/en-us/insights/responsible-ai",
    linkTitle: "Read more about responsible AI",
    linkAriaLabel: "Read more about responsible AI",
  },
  {
    title: "Avanade expands global delivery with new Advanced Technology Centers",
    href: "/en-us/insights/atc-expansion",
    linkTitle: "Read more about ATC expansion",
    linkAriaLabel: "Read more about ATC expansion",
  },
];

export const NewsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-full mx-auto py-10">
      <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto px-6">
        <h2 className="text-[28px] font-bold bg-clip-text bg-[linear-gradient(90deg,rgb(206,5,105)_12.66%,rgb(255,88,0)_94.55%)] box-border caret-transparent leading-[34px] outline-[3px] break-words mb-8 md:text-5xl md:leading-[62px]">
          Latest news
        </h2>
        <div className="box-border caret-transparent flex flex-wrap gap-6 outline-[3px]">
          {newsItems.map((item) => (
            <NewsCard
              key={item.href}
              title={item.title}
              href={item.href}
              linkTitle={item.linkTitle}
              linkAriaLabel={item.linkAriaLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
