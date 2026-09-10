import React, { useState } from "react";
import { CheckCircle2, Leaf,Mail,Send} from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("You're subscribed! 🌱");
    setEmail("");
  };

  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-full overflow-hidden rounded-[40px] bg-[#173d2d] px-6 py-16 text-white shadow-2xl sm:px-12">

        {/* Decorative glow */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#71964c]/30 blur-3xl" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#a3bd76]/20 blur-3xl" />

        <Leaf
          size={120}
          className="absolute right-10 top-8 rotate-12 text-white opacity-[.06]"
        />

        <Leaf
          size={80}
          className="absolute bottom-8 left-10 -rotate-45 text-white opacity-[.05]"
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <Mail size={27} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[.2em] text-[#b8cf98]">
            Stay Connected
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Grow Something Beautiful
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Get new plant arrivals, care tips and exclusive offers
            delivered straight to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5">
              <Mail size={17} className="shrink-0 text-white/50" />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/40"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-[#173d2d] transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              Subscribe
              <Send size={16} />
            </button>
          </form>

          {message && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#c5dda7]">
              <CheckCircle2 size={17} />
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}