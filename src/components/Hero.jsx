import React from "react";
import { motion } from "framer-motion";
import {ArrowRight,Leaf, Play,Sparkles,ShieldCheck, Truck, HeartHandshake} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[calc(100vh-88px)]
        flex-col
        justify-center
        overflow-hidden
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-16
        lg:py-28
      "
    >
      

      <div className="absolute inset-0 -z-30">
        <img
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2000&q=90"
          alt=""
          className="
            h-full
            w-full
            scale-105
            object-cover
            filter
            brightness-[1.05]
          "
        />
      </div>

      {/* Main overlay */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-[#f5f8ef]/98
          via-[#eef5e8]/90
          to-[#dcebd5]/75
        "
      />

      {/* Green overlay */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-br
          from-transparent
          via-[#dcebd5]/30
          to-[#71964c]/20
        "
      />

      {/* =====================================================
          ANIMATED BACKGROUND BLOBS
      ====================================================== */}

      <motion.div
        className="
          absolute
          -left-20
          top-10
          h-80
          w-80
          rounded-full
          bg-[#a9c58f]/35
          blur-3xl
        "
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          -right-20
          bottom-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#71964c]/20
          blur-3xl
        "
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[2000px]
          items-center
          gap-16
          lg:grid-cols-2
          lg:gap-20
        "
      >
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            relative
            z-10
            flex
            flex-col
            items-start
            text-left
          "
        >
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            className="
              mb-6
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-[#71964c]/30
              bg-white/85
              px-5
              py-2
              text-sm
              font-bold
              text-[#52733c]
              shadow-xl
              backdrop-blur-md
            "
          >
            <Sparkles
              size={16}
              className="animate-pulse text-[#71964c]"
            />

            <span>Fresh Plants • Happy Homes</span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="
              w-full
              text-4xl
              font-black
              leading-[1.1]
              tracking-tight
              text-[#173d2d]
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
            "
          >
            Bring{" "}

            <span className="relative mx-1 inline-block">
              <span className="relative z-10 text-[#71964c]">
                Nature
              </span>

              <motion.span
                className="
                  absolute
                  -bottom-2
                  left-0
                  z-0
                  h-2.5
                  rounded-full
                  bg-[#71964c]/30
                "
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                }}
              />
            </span>{" "}

            Into Your Living Space
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="
              mt-6
              max-w-xl
              text-base
              leading-relaxed
              text-[#3b5c4d]
              sm:text-lg
            "
          >
            Discover breathtaking, healthy botanical specimens cultivated
            with passion and expert care. Elevate your interior ambiance
            into a tranquil, oxygen-rich sanctuary with our exclusive
            curated collection.
          </motion.p>

          {/* =================================================
              ACTION BUTTONS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.7,
            }}
            className="
              mt-8
              flex
              w-full
              flex-col
              gap-4
              sm:w-auto
              sm:flex-row
            "
          >
            {/* =================================================
                SHOP COLLECTION BUTTON
            ================================================== */}

            <motion.a
              href="#plants"
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group
                relative
                isolate
                inline-flex
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-2xl
                border
                border-[#173d2d]
                bg-[#173d2d]
                px-8
                py-4
                text-base
                font-bold
                text-white
                shadow-[0_15px_35px_rgba(23,61,45,0.30)]
                transition-all
                duration-300
                hover:shadow-[0_22px_45px_rgba(23,61,45,0.42)]
              "
            >
              {/* Shine */}

              <motion.span
                initial={{
                  x: "-140%",
                }}
                animate={{
                  x: ["-140%", "160%"],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-y-0
                  left-0
                  z-0
                  w-16
                  rotate-12
                  bg-white/20
                  blur-md
                "
              />

              {/* Green glow */}

              <span
                className="
                  absolute
                  inset-0
                  -z-10
                  rounded-2xl
                  bg-[#71964c]
                  opacity-0
                  blur-xl
                  transition-opacity
                  duration-300
                  group-hover:opacity-40
                "
              />

              {/* Leaf */}

              <motion.span
                whileHover={{
                  rotate: -18,
                  scale: 1.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                  relative
                  z-10
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  ring-1
                  ring-white/20
                "
              >
                <Leaf size={18} />
              </motion.span>

              <span className="relative z-10">
                Shop Collection
              </span>

              {/* Arrow */}

              <motion.span
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  transition-colors
                  group-hover:bg-white/20
                "
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>

            {/* =================================================
                WATCH OUR STORY BUTTON
            ================================================== */}

            <motion.a
              href="#about"
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-2xl
                border-2
                border-[#173d2d]/20
                bg-white/75
                px-8
                py-4
                text-base
                font-bold
                text-[#173d2d]
                shadow-[0_12px_30px_rgba(23,61,45,0.12)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#71964c]
                hover:bg-white
                hover:shadow-[0_20px_40px_rgba(113,150,76,0.22)]
              "
            >
              {/* Animated glow */}

              <motion.span
                className="
                  absolute
                  -right-10
                  -top-10
                  h-24
                  w-24
                  rounded-full
                  bg-[#71964c]/15
                  blur-2xl
                "
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Play circle */}

              <motion.span
                whileHover={{
                  scale: 1.12,
                }}
                className="
                  relative
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#71964c]/30
                  bg-[#71964c]/10
                  text-[#52733c]
                  shadow-inner
                "
              >
                {/* Rotating ring */}

                <motion.span
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-[-4px]
                    rounded-full
                    border
                    border-dashed
                    border-[#71964c]/40
                  "
                />

                <Play
                  size={15}
                  className="
                    ml-0.5
                    fill-[#71964c]
                    text-[#71964c]
                  "
                />
              </motion.span>

              <span className="relative z-10">
                Watch Our Story
              </span>

              {/* Sparkle */}

              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  text-[#71964c]
                "
              >
                ✦
              </motion.span>
            </motion.a>
          </motion.div>

          {/* =================================================
              TRUST HIGHLIGHTS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.85,
              duration: 0.6,
            }}
            className="
              mt-8
              grid
              w-full
              max-w-lg
              grid-cols-1
              gap-4
              border-t
              border-[#173d2d]/15
              pt-6
              sm:grid-cols-3
            "
          >
            {/* Secure */}

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              className="flex items-center gap-2"
            >
              <div
                className="
                  rounded-xl
                  bg-[#71964c]/15
                  p-2
                  text-[#71964c]
                "
              >
                <ShieldCheck size={20} />
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#173d2d]">
                  100% Secure
                </h4>

                <p className="text-[11px] text-[#557564]">
                  Safe delivery
                </p>
              </div>
            </motion.div>

            {/* Delivery */}

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              className="flex items-center gap-2"
            >
              <div
                className="
                  rounded-xl
                  bg-[#71964c]/15
                  p-2
                  text-[#71964c]
                "
              >
                <Truck size={20} />
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#173d2d]">
                  Express Delivery
                </h4>

                <p className="text-[11px] text-[#557564]">
                  Direct to door
                </p>
              </div>
            </motion.div>

            {/* Expert Advice */}

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              className="flex items-center gap-2"
            >
              <div
                className="
                  rounded-xl
                  bg-[#71964c]/15
                  p-2
                  text-[#71964c]
                "
              >
                <HeartHandshake size={20} />
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#173d2d]">
                  Expert Advice
                </h4>

                <p className="text-[11px] text-[#557564]">
                  Support 24/7
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              STATS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
            className="
              mt-6
              flex
              w-full
              max-w-lg
              items-center
              justify-between
              gap-4
              border-t
              border-[#173d2d]/10
              pt-6
              sm:justify-start
              sm:gap-8
            "
          >
            {/* Stat 1 */}

            <div>
              <div className="text-2xl font-black text-[#173d2d] sm:text-3xl">
                500+
              </div>

              <div className="text-xs font-medium text-[#718076]">
                Plant Varieties
              </div>
            </div>

            <div className="h-8 w-px bg-[#173d2d]/10" />

            {/* Stat 2 */}

            <div>
              <div className="text-2xl font-black text-[#173d2d] sm:text-3xl">
                10K+
              </div>

              <div className="text-xs font-medium text-[#718076]">
                Happy Customers
              </div>
            </div>

            <div className="h-8 w-px bg-[#173d2d]/10" />

            {/* Stat 3 */}

            <div>
              <div className="text-2xl font-black text-[#173d2d] sm:text-3xl">
                25K+
              </div>

              <div className="text-xs font-medium text-[#718076]">
                Delivered Safe
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ===================================================
            RIGHT SIDE — 3D PLANT STAGE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotateY: 20,
            x: 60,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            flex
            min-h-[520px]
            items-center
            justify-center
            py-6
            [perspective:1400px]
          "
        >
          {/* =================================================
              ROTATING OUTER RING
          ================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[360px]
              w-[360px]
              rounded-full
              border-2
              border-dashed
              border-[#71964c]/35
              sm:h-[480px]
              sm:w-[480px]
            "
          />

          {/* Inner ring */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[300px]
              w-[300px]
              rounded-full
              border
              border-[#173d2d]/15
              sm:h-[400px]
              sm:w-[400px]
            "
          />

          {/* =================================================
              AMBIENT GLOW
          ================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.35, 0.6, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-72
              w-72
              rounded-full
              bg-[#71964c]/35
              blur-3xl
            "
          />

          {/* =================================================
              3D PLANT CARD
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 1.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.04,
              rotateY: -8,
              rotateX: 6,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
              relative
              z-10
              h-[430px]
              w-[310px]
              overflow-hidden
              rounded-[50px]
              border-2
              border-white/90
              bg-white/50
              p-3.5
              shadow-[0_50px_100px_rgba(23,61,45,0.35)]
              backdrop-blur-2xl
              sm:h-[490px]
              sm:w-[360px]
            "
          >
            {/* Image */}

            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-[40px]
                bg-[#dfeedd]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=90"
                alt="Beautiful Monstera plant"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  hover:scale-110
                "
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=90";
                }}
              />

              {/* Dark gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#173d2d]/85
                  via-[#173d2d]/15
                  to-transparent
                "
              />

              {/* Image shine */}

              <motion.div
                animate={{
                  x: ["-130%", "130%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-y-0
                  w-24
                  rotate-12
                  bg-white/25
                  blur-xl
                "
              />

              {/* Product info */}

              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-2xl
                  border
                  border-white/40
                  bg-white/25
                  p-4
                  text-white
                  shadow-lg
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white/80
                  "
                >
                  Featured Botanical Specimen
                </p>

                <h3 className="mt-1 text-xl font-black text-white">
                  Monstera Deliciosa
                </h3>

                <div className="mt-2.5 flex items-center justify-between gap-2">
                  <span className="text-lg font-black text-white">
                    ₹899
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-white/25
                      px-3
                      py-1
                      text-xs
                      font-bold
                      backdrop-blur-md
                    "
                  >
                    ⭐ 4.9 (1.2k reviews)
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              FLOATING LEAF
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 12, -5, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.15,
              rotate: 20,
            }}
            className="
              absolute
              left-2
              top-10
              z-20
              flex
              h-[72px]
              w-[72px]
              items-center
              justify-center
              rounded-2xl
              border-2
              border-white/80
              bg-white/90
              text-[#71964c]
              shadow-2xl
              backdrop-blur-xl
              sm:left-4
            "
          >
            <Leaf size={32} />
          </motion.div>

          {/* =================================================
              HEALTH STATUS
          ================================================== */}

          <motion.div
            animate={{
              y: [0, 18, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
            }}
            className="
              absolute
              bottom-6
              right-2
              z-20
              rounded-2xl
              border-2
              border-white/80
              bg-white/90
              px-5
              py-3.5
              shadow-2xl
              backdrop-blur-xl
              sm:bottom-8
              sm:right-4
            "
          >
            <div className="text-xs font-semibold text-[#718076]">
              Cultivation Status
            </div>

            <div className="mt-0.5 text-sm font-black text-[#173d2d]">
              100% Organic 🌱
            </div>
          </motion.div>

          {/* =================================================
              DECORATIVE DOT 1
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 12, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-10
              top-8
              h-6
              w-6
              rounded-full
              bg-[#71964c]
              shadow-xl
            "
          />

          {/* =================================================
              DECORATIVE DOT 2
          ================================================== */}

          <motion.div
            animate={{
              y: [0, 22, 0],
              x: [0, -12, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-20
              left-6
              h-4
              w-4
              rounded-full
              bg-[#d87852]
              shadow-xl
            "
          />

          {/* Small decorative leaf */}

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-28
              right-12
              text-[#71964c]/50
            "
          >
            <Leaf size={28} />
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-4
          left-1/2
          hidden
          -translate-x-1/2
          text-xs
          font-bold
          uppercase
          tracking-wider
          text-[#718076]
          sm:block
        "
      >
        Scroll to explore ↓
      </motion.div>
    </section>
  );
}