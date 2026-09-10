import React from "react";
import {
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Truck,
} from "lucide-react";

const benefits = [
  {
    title: "Healthy Plants",
    text: "Every plant is carefully checked before leaving our nursery.",
    icon: CheckCircle2,
  },
  {
    title: "Fast Delivery",
    text: "Quick and safe delivery that keeps your plants protected.",
    icon: Truck,
  },
  {
    title: "Eco-Friendly Packaging",
    text: "Thoughtfully designed packaging with sustainability in mind.",
    icon: PackageCheck,
  },
  {
    title: "Expert Plant Care",
    text: "Get practical guidance from experienced plant specialists.",
    icon: Sprout,
  },
  {
    title: "Secure Payment",
    text: "Enjoy a safe and simple checkout experience.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f3f7ef] px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-full">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-[#71964c]">
            Our Promise
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#173d2d] sm:text-5xl">
            Why Choose Us?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#718076]">
            We make buying and caring for plants simple, safe and
            enjoyable.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[28px] border border-[#dfe8db] bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                style={{
                  animation: `benefitEnter .7s ease ${index * 90}ms both`,
                }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e7f0e1] text-[#557d43] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={27} />
                </div>

                <h3 className="mt-5 font-black text-[#31553d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#7a877f]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes benefitEnter {
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