import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Flower2, HeartPulse,Leaf,Sprout,TreePine} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Indoor Plants",
    description: "Fresh greenery for beautiful indoor spaces",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Outdoor Plants",
    description: "Perfect plants for gardens and balconies",
    icon: TreePine,
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Flowering Plants",
    description: "Colorful blooms to brighten your home",
    icon: Flower2,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Succulents",
    description: "Low-maintenance plants with unique beauty",
    icon: Sprout,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Medicinal Plants",
    description: "Natural plants for wellness and everyday care",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Decorative Plants",
    description: "Stylish greenery for modern interiors",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PlantCategories({
  onCategorySelect,
}) {
  const handleCategoryClick = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }

    setTimeout(() => {
      document
        .getElementById("plants")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  return (
    <section
      id="categories"
      className="
        relative overflow-hidden
        bg-[#f6f9f2]
        px-5 py-20
        sm:px-8
        lg:px-12
        lg:py-28
      "
    >
      {/* ================= BACKGROUND ================= */}

      <motion.div
        className="
          pointer-events-none
          absolute -left-32 top-20
          h-72 w-72
          rounded-full
          bg-[#a9c58f]/20
          blur-3xl
        "
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute -right-32 bottom-10
          h-80 w-80
          rounded-full
          bg-[#71964c]/15
          blur-3xl
        "
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-full">


        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mx-auto mb-4
              inline-flex
              items-center gap-2
              rounded-full
              border border-[#71964c]/20
              bg-white/70
              px-4 py-2
              text-xs font-black
              uppercase
              tracking-[0.2em]
              text-[#71964c]
              shadow-sm
              backdrop-blur-md
            "
          >
            <Sprout size={15} />

            Explore Collection
          </motion.div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-[#173d2d]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Find Your Perfect
            <span className="gradient-text ml-2">
              Plant
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5
              max-w-2xl
              text-base
              leading-7
              text-[#718076]
              sm:text-lg
            "
          >
            Explore our carefully selected collection
            of plants and bring a little more nature
            into your everyday life.
          </p>
        </motion.div>

        {/* ================= CATEGORY GRID ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.button
                key={category.id}
                variants={cardVariants}
                type="button"
                onClick={() =>
                  handleCategoryClick(category.name)
                }
                whileHover={{
                  y: -10,
                  rotateX: 2,
                  rotateY: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/70
                  bg-white/70
                  text-left
                  shadow-[0_15px_50px_rgba(23,61,45,0.10)]
                  backdrop-blur-xl
                  transition-shadow
                  duration-500
                  hover:shadow-[0_30px_70px_rgba(23,61,45,0.20)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#71964c]
                  focus:ring-offset-2
                "
              >
                {/* ================= IMAGE ================= */}

                <div
                  className="
                    relative
                    h-64
                    overflow-hidden
                    sm:h-72
                  "
                >
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {/* Dark gradient */}

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#173d2d]/75
                      via-[#173d2d]/10
                      to-transparent
                    "
                  />

                  {/* Floating icon */}

                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.15,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      absolute
                      left-5 top-5
                      flex h-12 w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/40
                      bg-white/20
                      text-white
                      shadow-xl
                      backdrop-blur-xl
                    "
                  >
                    <Icon size={23} />
                  </motion.div>

                  {/* Number */}

                  <div
                    className="
                      absolute
                      right-5 top-5
                      flex h-9 w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/20
                      text-xs
                      font-black
                      text-white
                      backdrop-blur-md
                    "
                  >
                    0{category.id}
                  </div>

                  {/* Image title */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5
                    "
                  >
                    <h3
                      className="
                        text-2xl
                        font-black
                        text-white
                      "
                    >
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}

                <div className="p-5">

                  <p
                    className="
                      min-h-[48px]
                      text-sm
                      leading-6
                      text-[#718076]
                    "
                  >
                    {category.description}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-black
                        text-[#173d2d]
                      "
                    >
                      Explore Plants
                    </span>

                    <motion.span
                      whileHover={{
                        x: 5,
                      }}
                      className="
                        flex h-10 w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[#edf3e8]
                        text-[#173d2d]
                        transition-colors
                        duration-300
                        group-hover:bg-[#173d2d]
                        group-hover:text-white
                      "
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </div>
                </div>

                {/* Hover shine */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[120%]
                    top-0
                    h-full
                    w-[60%]
                    rotate-12
                    bg-white/20
                    transition-all
                    duration-1000
                    group-hover:left-[130%]
                  "
                />
              </motion.button>
            );
          })}
        </motion.div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="mt-10 text-center"
        >
          <motion.a
            href="#plants"
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#173d2d]/10
              bg-white/70
              px-6 py-3
              text-sm
              font-bold
              text-[#173d2d]
              shadow-md
              backdrop-blur-md
            "
          >
            View All Plants

            <ArrowRight size={17} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}