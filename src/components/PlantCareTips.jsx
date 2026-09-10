import React from "react";
import {ArrowRight, Droplets,Leaf,Sprout, Sun} from "lucide-react";

const tips = [
  {
    title: "Watering Your Plants",
    tag: "Watering",
    icon: Droplets,
    description:
      "Learn how to recognize when your plants need water and avoid common overwatering problems.",
  },
  {
    title: "Understanding Sunlight",
    tag: "Sunlight",
    icon: Sun,
    description:
      "Discover the difference between direct, indirect and low light for healthier plant growth.",
  },
  {
    title: "Choosing the Right Soil",
    tag: "Soil",
    icon: Sprout,
    description:
      "The right soil gives your roots room to breathe and helps plants absorb nutrients.",
  },
  {
    title: "Simple Plant Maintenance",
    tag: "Maintenance",
    icon: Leaf,
    description:
      "Regular cleaning, pruning and observation can keep your plants fresh and beautiful.",
  },
];

export default function PlantCareTips() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-full">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#71964c]">
              Plant Knowledge
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#173d2d] sm:text-5xl">
              Plant Care Tips
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#718076]">
              Simple tips to help your plants stay healthy, fresh
              and beautiful all year round.
            </p>
          </div>

          <div className="rounded-full bg-[#edf4e9] px-5 py-3 text-xs font-bold text-[#557d43]">
            🌱 Learn • Grow • Enjoy
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <article
                key={tip.title}
                className="group rounded-[30px] border border-[#e0e8dc] bg-[#f7faf5] p-6 transition-all duration-500 hover:-translate-y-3 hover:bg-white hover:shadow-2xl"
                style={{
                  animation: `tipEnter .7s ease ${index * 90}ms both`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5efdf] text-[#557d43] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={25} />
                  </div>

                  <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#719064] shadow-sm">
                    {tip.tag}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-black text-[#31553d]">
                  {tip.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#78857d]">
                  {tip.description}
                </p>

                <button className="group/read mt-6 flex items-center gap-2 text-xs font-black text-[#557d43]">
                  Read Guide
                  <ArrowRight
                    size={15}
                    className="transition group-hover/read:translate-x-1"
                  />
                </button>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes tipEnter {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}