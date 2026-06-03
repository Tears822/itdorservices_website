import { Link, useParams, useLocation } from "react-router-dom";

const slugToTitle = (slug: string) =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export const GenericSubPage = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  const section = segments[1] ?? "";
  const sub = segments[2] ?? "";

  const sectionLabels: Record<string, string> = {
    industry: "Industries",
    services: "Services",
    "software-solutions": "Software Solutions",
    insights: "Insights",
    career: "Careers",
    about: "About",
  };

  const parentPath = `/en-us/${section}`;
  const parentLabel = sectionLabels[section] ?? section;
  const pageTitle = slugToTitle(sub);

  return (
    <main className="box-border caret-transparent outline-[3px] pt-16 md:pt-20">
      <section className="w-full bg-gradient-to-r from-[rgb(206,5,105)] to-[rgb(255,88,0)] py-16 md:py-24">
        <div className="max-w-[1176px] mx-auto px-6">
          <Link
            to={parentPath}
            className="text-white/80 text-sm font-medium hover:text-white mb-4 inline-flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {parentLabel}
          </Link>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-2">
            {pageTitle}
          </h1>
        </div>
      </section>

      <section className="max-w-[1176px] mx-auto px-6 py-16 text-center">
        <p className="text-zinc-500 text-lg mb-8">
          This page is coming soon. Explore more from the {parentLabel} section.
        </p>
        <Link
          to={parentPath}
          className="inline-block bg-zinc-800 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-neutral-600 transition-colors"
        >
          Back to {parentLabel}
        </Link>
      </section>
    </main>
  );
};
