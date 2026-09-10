import React from "react";
import { motion } from "framer-motion";
import { Leaf,Mail,MapPin,Phone,Globe,Share2,MessageCircle, Video, ArrowUpRight,Heart,} from "lucide-react";

const categories = [
  "Indoor Plants",
  "Outdoor Plants",
  "Flowering Plants",
  "Succulents",
  "Medicinal Plants",
];

export default function Footer({ onNavigate }) {
  const socialIcons = [
    { Icon: Globe, label: "Website" },
    { Icon: Share2, label: "Share" },
    { Icon: MessageCircle, label: "Message" },
    { Icon: Video, label: "Video" },
  ];

  const quickLinks = [
    ["Home", "home"],
    ["Plants", "plants"],
    ["Categories", "categories"],
    ["About Us", "about"],
    ["Contact", "contact"],
  ];

  return (
    <footer className="relative overflow-hidden bg-[#102d21] px-5 pb-8 pt-20 text-white sm:px-8 lg:px-10">
      {/* ANIMATED BACKGROUND */}
      <motion.div
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#71964c]/15 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#28583f]/30 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FLOATING LEAVES */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[10%] top-10 hidden text-[#71964c]/20 lg:block"
      >
        <Leaf size={70} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-24 left-[5%] hidden text-[#9ab76c]/10 lg:block"
      >
        <Leaf size={55} />
      </motion.div>

      {/* MAIN FOOTER */}
      <div className="relative mx-auto grid max-w-full gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.button
            type="button"
            onClick={() => onNavigate?.("home")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-3 text-left"
          >
            <motion.div
              whileHover={{
                rotateY: 180,
                rotateX: 10,
                scale: 1.1,
              }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#9ab76c] shadow-lg backdrop-blur-md"
            >
              <Leaf size={23} />
            </motion.div>

            <div>
              <div className="text-lg font-black">
                Leaf<span className="text-[#9ab76c]">&</span>Loom
              </div>
              <div className="text-[8px] font-bold uppercase tracking-[.25em] text-white/40">
                Nature Nursery
              </div>
            </div>
          </motion.button>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-xs text-sm leading-6 text-white/50"
          >
            Bringing beautiful, healthy and sustainable greenery into homes one plant at a time.
          </motion.p>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex gap-2">
            {socialIcons.map(({ Icon, label }, index) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                title={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -7,
                  scale: 1.15,
                  rotateY: 15,
                  rotateZ: 3,
                }}
                whileTap={{ scale: 0.88 }}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#9ab76c]/40 hover:bg-[#71964c]/25 hover:text-[#c5df9b] hover:shadow-[0_12px_30px_rgba(113,150,76,.25)]"
              >
                <Icon size={17} className="transition-transform duration-300 group-hover:scale-110" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="font-black">Quick Links</h3>
          <div className="mt-5 space-y-2">
            {quickLinks.map(([label, id], index) => (
              <motion.button
                key={id}
                type="button"
                onClick={() => onNavigate?.(id)}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + index * 0.07 }}
                whileHover={{ x: 8 }}
                className="group flex w-full items-center gap-2 text-left text-sm text-white/50 transition-colors hover:text-white"
              >
                <span className="h-px w-0 bg-[#9ab76c] transition-all duration-300 group-hover:w-4" />
                {label}
                <ArrowUpRight
                  size={13}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CATEGORIES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="font-black">Plant Categories</h3>
          <div className="mt-5 space-y-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                type="button"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.07 }}
                whileHover={{ x: 8 }}
                className="group flex w-full items-center gap-2 text-left text-sm text-white/50 transition-colors hover:text-white"
              >
                <Leaf
                  size={13}
                  className="text-[#71964c]/60 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110"
                />
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="font-black">Contact Us</h3>
          <div className="mt-5 space-y-4">
            <motion.div whileHover={{ x: 7 }} className="group flex gap-3 text-sm leading-6 text-white/50">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#9ab76c] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#71964c]/20">
                <MapPin size={17} />
              </div>
              <span className="pt-1">
                Green Garden Road, <br /> India
              </span>
            </motion.div>

            <motion.div whileHover={{ x: 7 }} className="group flex items-center gap-3 text-sm text-white/50">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#9ab76c] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#71964c]/20">
                <Phone size={17} />
              </div>
              <span>+91 98765 43210</span>
            </motion.div>

            <motion.div whileHover={{ x: 7 }} className="group flex items-center gap-3 text-sm text-white/50">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#9ab76c] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#71964c]/20">
                <Mail size={17} />
              </div>
              <span>hello@leafandloom.com</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto mt-14 flex max-w-full flex-col justify-between gap-5 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row"
      >
        <p className="flex items-center gap-1">
          © 2026 Leaf & Loom Nature Nursery. All rights reserved.
          <Heart size={12} className="ml-1 text-[#71964c]" />
        </p>

        <div className="flex gap-5">
          <motion.button type="button" whileHover={{ y: -2 }} className="transition hover:text-white">
            Privacy Policy
          </motion.button>
          <motion.button type="button" whileHover={{ y: -2 }} className="transition hover:text-white">
            Terms & Conditions
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mx-auto mt-8 h-px max-w-full origin-center bg-gradient-to-r from-transparent via-[#71964c]/40 to-transparent"
      />
    </footer>
  );
}