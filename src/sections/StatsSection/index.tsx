import { StatCard } from "@/sections/StatsSection/components/StatCard";

const stats = [
  {
    value: "24/7",
    description: "Emergency onsite dispatch",
    cardVariant: "",
  },
  {
    value: "7+",
    description: "IT service specialties",
    cardVariant: "",
  },
  {
    value: "Fast",
    suffix: "Response",
    description: "Network & connectivity support",
    cardVariant: "",
  },
  {
    value: "New",
    suffix: "",
    description: "Software solutions offered",
    cardVariant: "",
  },
];

export const StatsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-full mx-auto py-10">
      <div className="box-border caret-transparent max-w-[1176px] outline-[3px] w-full mx-auto px-6">
        <div className="box-border caret-transparent flex flex-wrap outline-[3px]">
          {stats.map((stat) => (
            <StatCard
              key={stat.description}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.description}
              cardVariant={stat.cardVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
