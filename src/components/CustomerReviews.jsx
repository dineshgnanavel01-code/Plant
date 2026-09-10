import React from "react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Ananya Sharma",
    role: "Plant Lover",
    avatar: "https://i.pravatar.cc/150?img=47",
    review:
      "The plants arrived beautifully packed and incredibly healthy. My Monstera looks amazing!",
  },
  {
    name: "Rahul Kumar",
    role: "Happy Customer",
    avatar: "https://i.pravatar.cc/150?img=12",
    review:
      "Excellent quality and very fast delivery. Their plant-care guidance was also super helpful.",
  },
  {
    name: "Priya Nair",
    role: "Home Gardener",
    avatar: "https://i.pravatar.cc/150?img=32",
    review:
      "I loved the packaging and the attention to detail. Definitely ordering more plants soon.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-[#edf5e9] px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-full">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-[#71964c]">
            Happy Plant Parents
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#173d2d] sm:text-5xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className="group relative rounded-[30px] border border-white bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              style={{
                animation: `reviewEnter .7s ease ${index * 100}ms both`,
              }}
            >
              <Quote
                size={45}
                className="absolute right-6 top-6 text-[#e8f0e3] transition group-hover:scale-110"
              />

              <div className="relative flex gap-1 text-[#dfa344]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="relative mt-6 text-[15px] leading-7 text-[#65736a]">
                “{review.review}”
              </p>

              <div className="mt-7 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover ring-4 ring-[#edf4e9] transition group-hover:scale-105"
                />

                <div>
                  <h3 className="text-sm font-black text-[#31553d]">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#87938c]">
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes reviewEnter {
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