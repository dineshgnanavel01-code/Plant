import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  TreePine,
} from "lucide-react";

export default function AboutNursery() {
  const features = [
    "Naturally nurtured plants",
    "Responsible and sustainable growing",
    "Eco-friendly packaging",
  ];

  const stats = [
    ["500+", "Plant Varieties"],
    ["10K+", "Happy Customers"],
    ["25K+", "Plants Delivered"],
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-24
        sm:px-8
        lg:px-10
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <motion.div
        className="
          absolute
          -left-32
          top-20
          h-80
          w-80
          rounded-full
          bg-[#dcebd0]/60
          blur-3xl
        "
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
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
          -right-32
          bottom-10
          h-96
          w-96
          rounded-full
          bg-[#e6f0df]
          blur-3xl
        "
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-full
          items-center
          gap-16
          lg:grid-cols-2
        "
      >
        {/* ===================================================
            LEFT IMAGE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
            rotateY: 15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotateY: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            [perspective:1200px]
          "
        >
          {/* Decorative circle */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              -left-8
              -top-8
              z-0
              h-28
              w-28
              rounded-full
              border-2
              border-dashed
              border-[#71964c]/30
            "
          />

          {/* Image glow */}

          <div
            className="
              absolute
              -bottom-10
              -right-10
              h-56
              w-56
              rounded-full
              bg-[#71964c]/20
              blur-3xl
            "
          />

          {/* 3D IMAGE CARD */}

          <motion.div
            whileHover={{
              scale: 1.025,
              rotateY: -5,
              rotateX: 3,
              y: -8,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
              group
              relative
              z-10
              overflow-hidden
              rounded-[42px]
              border
              border-white
              bg-white
              p-2
              shadow-[0_35px_90px_rgba(23,61,45,0.20)]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=90"
                alt="Nature nursery"
                className="
                  h-[520px]
                  w-full
                  object-cover
                  transition-all
                  duration-1000
                  group-hover:scale-110
                  group-hover:rotate-1
                "
              />

              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#173d2d]/70
                  via-transparent
                  to-transparent
                  transition-opacity
                  duration-500
                  group-hover:from-[#173d2d]/80
                "
              />

              {/* Image shine */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-[120%]
                  w-24
                  rotate-12
                  bg-white/25
                  blur-xl
                "
                whileHover={{
                  left: "130%",
                }}
                transition={{
                  duration: 0.9,
                }}
              />

              {/* Image bottom label */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/15
                  p-4
                  text-white
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/20
                    "
                  >
                    <Leaf size={22} />
                  </div>

                  <div>
                    <p className="text-xs text-white/70">
                      Growing with love
                    </p>

                    <p className="font-black">
                      Nature • Care • Happiness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FLOATING EXPERIENCE CARD
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateZ: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              y: -10,
            }}
            className="
              absolute
              -bottom-8
              right-4
              z-20
              rounded-3xl
              border
              border-white/80
              bg-white/90
              p-5
              shadow-2xl
              backdrop-blur-xl
              sm:right-8
            "
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{
                  rotate: 15,
                  scale: 1.1,
                }}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#e4efdc]
                  text-[#557d43]
                "
              >
                <TreePine size={23} />
              </motion.div>

              <div>
                <p className="text-2xl font-black text-[#173d2d]">
                  12+
                </p>

                <p className="text-xs text-[#7c8981]">
                  Years of Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating leaf */}

          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, 8, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-3
              top-10
              z-20
              hidden
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-white/80
              text-[#71964c]
              shadow-xl
              backdrop-blur-xl
              sm:flex
            "
          >
            <Leaf size={25} />
          </motion.div>
        </motion.div>

        {/* ===================================================
            RIGHT CONTENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Small heading */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
            }}
            className="
              text-sm
              font-bold
              uppercase
              tracking-[.2em]
              text-[#71964c]
            "
          >
            About Our Nursery
          </motion.p>

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="
              mt-4
              text-3xl
              font-black
              leading-tight
              text-[#173d2d]
              sm:text-5xl
            "
          >
            Growing Plants.
            <br />

            <span className="gradient-text">
              Growing Happiness.
            </span>
          </motion.h2>

          {/* Paragraph */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="
              mt-6
              leading-7
              text-[#6f7d74]
            "
          >
            Leaf & Loom is a modern plant nursery dedicated
            to helping people bring the beauty of nature into
            their homes and workplaces.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              duration: 0.7,
            }}
            className="
              mt-4
              leading-7
              text-[#6f7d74]
            "
          >
            From carefully selected plants to responsible
            growing practices, every step is designed with
            the health of your plants and our planet in mind.
          </motion.p>

          {/* =================================================
              FEATURES
          ================================================== */}

          <div className="mt-7 space-y-3">
            {features.map((text, index) => (
              <motion.div
                key={text}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.7 + index * 0.12,
                  duration: 0.5,
                }}
                whileHover={{
                  x: 8,
                }}
                className="
                  group
                  flex
                  cursor-default
                  items-center
                  gap-3
                  rounded-xl
                  px-2
                  py-2
                  text-sm
                  font-semibold
                  text-[#4f6556]
                  transition-colors
                  hover:bg-[#f2f7ed]
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                >
                  <CheckCircle2
                    size={19}
                    className="text-[#71964c]"
                  />
                </motion.div>

                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          {/* =================================================
              STATS
          ================================================== */}

          <div className="mt-9 grid grid-cols-3 gap-3">
            {stats.map(([number, text], index) => (
              <motion.div
                key={text}
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.9 + index * 0.12,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                className="
                  group
                  cursor-default
                  rounded-2xl
                  border
                  border-transparent
                  bg-[#f2f7ed]
                  p-4
                  transition-all
                  duration-300
                  hover:border-[#71964c]/20
                  hover:bg-[#eaf3e4]
                  hover:shadow-lg
                "
              >
                <p
                  className="
                    text-xl
                    font-black
                    text-[#31553d]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    sm:text-2xl
                  "
                >
                  {number}
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    leading-4
                    text-[#7d8981]
                    sm:text-xs
                  "
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* =================================================
              BUTTON
          ================================================== */}

          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 1.2,
              duration: 0.6,
            }}
            whileHover={{
              y: -5,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#173d2d]
              px-7
              py-4
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-[#173d2d]/20
              transition-all
              hover:bg-[#28583f]
              hover:shadow-2xl
            "
          >
            Discover Our Story

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}