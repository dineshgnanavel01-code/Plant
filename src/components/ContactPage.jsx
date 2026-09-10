import React, { useState } from "react";
import { motion } from "framer-motion";
import {Clock3,Mail,Phone, MapPin, Send, Leaf,CheckCircle2} from "lucide-react";

const plants = [
  "Monstera Deliciosa",
  "Snake Plant",
  "Peace Lily",
  "Aloe Vera",
  "ZZ Plant",
  "Echeveria Succulent",
  "Fiddle Leaf Fig",
  "Calathea Green",
  "Areca Palm",
  "Bougainvillea",
  "Croton Plant",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plant: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      plant: "",
      message: "",
    });

    window.setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f9f2]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        {/* Background decoration */}

        <motion.div
          aria-hidden="true"
          animate={{
            rotate: [0, 8, -8, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-[#dcebd3]
            blur-3xl
          "
        />

        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-24
            h-64
            w-64
            rounded-full
            bg-[#e7f1df]
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#cfe0c7]
                bg-white/80
                px-4
                py-2
                text-xs
                font-black
                uppercase
                tracking-[0.16em]
                text-[#71964c]
                shadow-sm
              "
            >
              <Leaf size={15} />
              Nature Nursery
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-[#173d2d]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Let's grow something
              <span className="block text-[#71964c]">
                beautiful together.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-[#627267]
                sm:text-lg
              "
            >
              Have a question about a plant, delivery, or plant
              care? Send us a message and our nursery team will
              get back to you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-8
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{
                y: -5,
                rotateY: -2,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                rounded-3xl
                border
                border-[#dce8d7]
                bg-[#173d2d]
                p-7
                text-white
                shadow-[0_20px_50px_rgba(23,61,45,0.16)]
                sm:p-8
              "
            >
              <h2 className="text-2xl font-black">
                Contact Information
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Visit, call, or email us. We're happy to help you
                choose the perfect plant.
              </p>

              <div className="mt-8 space-y-5">
                {/* PHONE */}

                <motion.a
                  href="tel:+919876543210"
                  whileHover={{
                    x: 6,
                    scale: 1.02,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    transition
                  "
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      Phone
                    </p>

                    <p className="mt-1 font-bold">
                      +91 98765 43210
                    </p>
                  </div>
                </motion.a>

                {/* EMAIL */}

                <motion.a
                  href="mailto:hello@naturenursery.com"
                  whileHover={{
                    x: 6,
                    scale: 1.02,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    transition
                  "
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      Email
                    </p>

                    <p className="mt-1 break-all font-bold">
                      hello@naturenursery.com
                    </p>
                  </div>
                </motion.a>

                {/* ADDRESS */}

                <motion.div
                  whileHover={{
                    x: 6,
                    scale: 1.02,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                  "
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      Nursery
                    </p>

                    <p className="mt-1 font-bold leading-6">
                      Nature Nursery
                      <br />
                      Salem, Tamil Nadu
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                TIMING
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              whileHover={{
                y: -5,
                rotateY: 2,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                rounded-3xl
                border
                border-[#dce8d7]
                bg-white
                p-7
                shadow-[0_15px_45px_rgba(23,61,45,0.08)]
                sm:p-8
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4e9] text-[#71964c]">
                  <Clock3 size={21} />
                </div>

                <div>
                  <h3 className="font-black text-[#173d2d]">
                    Opening Hours
                  </h3>

                  <p className="text-xs text-[#7a887e]">
                    We're here to help
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-[#edf1eb] pb-3">
                  <span className="font-semibold text-[#66756a]">
                    Monday - Friday
                  </span>

                  <span className="font-black text-[#173d2d]">
                    9:00 AM - 7:00 PM
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#edf1eb] pb-3">
                  <span className="font-semibold text-[#66756a]">
                    Saturday
                  </span>

                  <span className="font-black text-[#173d2d]">
                    9:00 AM - 6:00 PM
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-[#66756a]">
                    Sunday
                  </span>

                  <span className="font-black text-[#71964c]">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="
              rounded-3xl
              border
              border-[#dce8d7]
              bg-white
              p-6
              shadow-[0_20px_55px_rgba(23,61,45,0.08)]
              sm:p-8
              lg:p-10
            "
          >
            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#71964c]">
                Send a message
              </p>

              <h2 className="mt-2 text-3xl font-black text-[#173d2d]">
                How can we help?
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#718078]">
                Fill in your details and tell us which plant
                you're interested in.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME + EMAIL */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-[#31553d]"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#dce8d7]
                      bg-[#f9fbf7]
                      px-4
                      py-3.5
                      text-sm
                      text-[#173d2d]
                      outline-none
                      transition
                      placeholder:text-[#a2aea5]
                      focus:border-[#71964c]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#71964c]/10
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-[#31553d]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#dce8d7]
                      bg-[#f9fbf7]
                      px-4
                      py-3.5
                      text-sm
                      text-[#173d2d]
                      outline-none
                      transition
                      placeholder:text-[#a2aea5]
                      focus:border-[#71964c]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#71964c]/10
                    "
                  />
                </div>
              </div>

              {/* PHONE + PLANT */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-[#31553d]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#dce8d7]
                      bg-[#f9fbf7]
                      px-4
                      py-3.5
                      text-sm
                      text-[#173d2d]
                      outline-none
                      transition
                      placeholder:text-[#a2aea5]
                      focus:border-[#71964c]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#71964c]/10
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="plant"
                    className="mb-2 block text-sm font-bold text-[#31553d]"
                  >
                    Select Plant
                  </label>

                  <select
                    id="plant"
                    name="plant"
                    value={form.plant}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#dce8d7]
                      bg-[#f9fbf7]
                      px-4
                      py-3.5
                      text-sm
                      text-[#173d2d]
                      outline-none
                      transition
                      focus:border-[#71964c]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#71964c]/10
                    "
                  >
                    <option value="">
                      Choose a plant
                    </option>

                    {plants.map((plant) => (
                      <option key={plant} value={plant}>
                        {plant}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-[#31553d]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you would like to know..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-[#dce8d7]
                    bg-[#f9fbf7]
                    px-4
                    py-3.5
                    text-sm
                    leading-6
                    text-[#173d2d]
                    outline-none
                    transition
                    placeholder:text-[#a2aea5]
                    focus:border-[#71964c]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#71964c]/10
                  "
                />
              </div>

              {/* SEND */}

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  rotateX: 2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-2xl
                  bg-[#173d2d]
                  px-6
                  py-4
                  text-sm
                  font-black
                  text-white
                  shadow-[0_15px_30px_rgba(23,61,45,0.18)]
                  transition
                  hover:bg-[#214f3a]
                  hover:shadow-[0_20px_40px_rgba(23,61,45,0.24)]
                "
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={19} />
                    Message Sent Successfully
                  </>
                ) : (
                  <>
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}