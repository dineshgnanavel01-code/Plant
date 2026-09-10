import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Search,
  ShoppingBag,
  Star,
  X,
  Sprout,
} from "lucide-react";

/* =====================================================
   PLANT DATA
===================================================== */

export const plants = [
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    category: "Indoor Plants",
    price: 3999,
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=85",
    tag: "Best Seller",
  },

  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    category: "Indoor Plants",
    price: 5999,
    rating: 4.7,
    reviews: 110,
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=85",
    tag: "Statement",
  },

  {
    id: "snake-laurentii",
    name: "Snake Plant Laurentii",
    category: "Indoor Plants",
    price: 2699,
    rating: 4.8,
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1593482892290-f596e4691b61?auto=format&fit=crop&w=800&q=85",
    tag: "Low Light",
  },

  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    category: "Decorative Plants",
    price: 6999,
    rating: 4.6,
    reviews: 74,
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=800&q=85",
    tag: "Dramatic",
  },

  {
    id: "olive-grove",
    name: "Dwarf Olive Tree",
    category: "Outdoor Plants",
    price: 7899,
    rating: 4.8,
    reviews: 68,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=85",
    tag: "Heritage",
  },

  {
    id: "japanese-maple",
    name: "Japanese Maple",
    category: "Outdoor Plants",
    price: 8999,
    rating: 4.9,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=800&q=85",
    tag: "Seasonal",
  },

  {
    id: "gardenia-bloom",
    name: "Gardenia Bloom",
    category: "Flowering Plants",
    price: 3199,
    rating: 4.5,
    reviews: 61,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=85",
    tag: "Fragrant",
  },

  {
    id: "english-lavender",
    name: "English Lavender",
    category: "Flowering Plants",
    price: 1999,
    rating: 4.8,
    reviews: 73,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=800&q=85",
    tag: "Pollinator",
  },

  {
    id: "aloe-vera",
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 1349,
    rating: 4.9,
    reviews: 71,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85",
    tag: "Apothecary",
  },

  {
    id: "zz-plant",
    name: "ZZ Plant",
    category: "Decorative Plants",
    price: 3499,
    rating: 4.8,
    reviews: 83,
    image:
      "https://images.unsplash.com/photo-1632207511558-696122d14cff?auto=format&fit=crop&w=800&q=85",
    tag: "Easy Care",
  },
];

/* =====================================================
   FILTERS
===================================================== */

const filters = [
  "All",
  "Indoor Plants",
  "Outdoor Plants",
  "Flowering Plants",
  "Succulents",
  "Medicinal Plants",
  "Decorative Plants",
];

/* =====================================================
   FALLBACK IMAGE
===================================================== */

const fallbackImage =
  "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85";

/* =====================================================
   COMPONENT
===================================================== */

export default function FeaturedPlants({
  selectedCategory = "All",
  onCategoryChange,
  onAddToCart,
}) {
  const [category, setCategory] = useState(selectedCategory);
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);

  /* ===================================================
     CATEGORY HANDLER
  =================================================== */

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    onCategoryChange?.(newCategory);
  };

  /* ===================================================
     FILTER + SEARCH
  =================================================== */

  const filteredPlants = useMemo(() => {
    const query = search.trim().toLowerCase();

    return plants.filter((plant) => {
      const categoryMatch =
        category === "All" ||
        plant.category === category;

      const searchMatch =
        !query ||
        plant.name.toLowerCase().includes(query) ||
        plant.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  /* ===================================================
     WISHLIST
  =================================================== */

  const toggleWishlist = (id) => {
    setWishlist((currentWishlist) =>
      currentWishlist.includes(id)
        ? currentWishlist.filter((item) => item !== id)
        : [...currentWishlist, id]
    );
  };

  /* ===================================================
     RETURN
  =================================================== */

  return (
    <section
      id="plants"
      className="
        relative
        overflow-hidden
        bg-[#f4f8f0]
        px-5
        py-24
        sm:px-8
        lg:px-10
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-[#71964c]/10
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
          absolute
          -right-40
          bottom-10
          h-96
          w-96
          rounded-full
          bg-[#173d2d]/5
          blur-3xl
        "
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-[2000px]">

        {/* =================================================
            HEADER
        ================================================= */}

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
          className="
            flex
            flex-col
            justify-between
            gap-7
            lg:flex-row
            lg:items-end
          "
        >
          <div>
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[.2em]
                text-[#71964c]
              "
            >
              Green Collection
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-[#173d2d]
                sm:text-5xl
              "
            >
              Featured Plants
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-[#718076]
              "
            >
              Beautiful plants carefully selected to
              bring freshness and natural beauty into
              your space.
            </p>
          </div>

          {/* =================================================
              SEARCH
          ================================================= */}

          <div
            className="
              flex
              w-full
              max-w-md
              items-center
              gap-3
              rounded-2xl
              border
              border-[#dce6d7]
              bg-white
              px-4
              py-3
              shadow-sm
              transition-all
              duration-300
              focus-within:-translate-y-1
              focus-within:shadow-lg
            "
          >
            <Search
              size={18}
              className="shrink-0 text-[#849087]"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search plants..."
              className="
                w-full
                bg-transparent
                text-sm
                text-[#173d2d]
                outline-none
                placeholder:text-[#9aa59e]
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="
                  rounded-full
                  p-1
                  text-[#718076]
                  transition
                  hover:bg-[#e7f0e2]
                  hover:text-[#173d2d]
                "
              >
                <X size={16} />
              </button>
            )}
          </div>
        </motion.div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <div
          className="
            mt-9
            flex
            gap-2
            overflow-x-auto
            pb-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              type="button"
              onClick={() =>
                handleCategoryChange(filter)
              }
              whileHover={{
                y: -2,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className={`
                whitespace-nowrap
                rounded-full
                px-5
                py-2.5
                text-xs
                font-bold
                transition-all
                ${
                  category === filter
                    ? "bg-[#173d2d] text-white shadow-lg"
                    : "bg-white text-[#68776e] hover:bg-[#e7f0e2]"
                }
              `}
            >
              {filter.replace(" Plants", "")}
            </motion.button>
          ))}
        </div>

        {/* =================================================
            PRODUCT COUNT
        ================================================= */}

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs font-semibold text-[#849087]">
            Showing{" "}
            <span className="font-black text-[#173d2d]">
              {filteredPlants.length}
            </span>{" "}
            {filteredPlants.length === 1
              ? "plant"
              : "plants"}
          </p>

          {search && (
            <p className="text-xs text-[#849087]">
              Search:{" "}
              <span className="font-bold text-[#31553d]">
                "{search}"
              </span>
            </p>
          )}
        </div>

        {/* =================================================
            PRODUCT GRID
        ================================================= */}

        <motion.div
          layout
          className="
            mt-7
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {filteredPlants.map((plant, index) => {
            const liked = wishlist.includes(plant.id);

            return (
              <motion.article
                layout
                key={plant.id}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  rotateX: 2,
                  rotateY: -2,
                  scale: 1.01,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-[#e0e8dc]
                  bg-white
                  shadow-sm
                  transition-shadow
                  duration-500
                  hover:shadow-[0_30px_70px_rgba(31,65,42,.18)]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    h-72
                    overflow-hidden
                    bg-[#eaf2e5]
                  "
                >
                  <motion.img
                    src={plant.image}
                    alt={plant.name}
                    loading="lazy"
                    onError={(e) => {
                      if (
                        e.currentTarget.src !==
                        fallbackImage
                      ) {
                        e.currentTarget.src =
                          fallbackImage;
                      }
                    }}
                    whileHover={{
                      scale: 1.12,
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

                  {/* Overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#173d2d]/35
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* TAG */}

                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      rounded-full
                      bg-[#173d2d]/90
                      px-3
                      py-1.5
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      text-white
                      shadow-lg
                      backdrop-blur
                    "
                  >
                    {plant.tag}
                  </span>

                  {/* WISHLIST */}

                  <motion.button
                    type="button"
                    onClick={() =>
                      toggleWishlist(plant.id)
                    }
                    whileHover={{
                      scale: 1.12,
                    }}
                    whileTap={{
                      scale: 0.85,
                    }}
                    aria-label={
                      liked
                        ? `Remove ${plant.name} from wishlist`
                        : `Add ${plant.name} to wishlist`
                    }
                    className={`
                      absolute
                      right-4
                      top-4
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      shadow-lg
                      backdrop-blur
                      ${
                        liked
                          ? "text-red-500"
                          : "text-[#52655a]"
                      }
                    `}
                  >
                    <Heart
                      size={19}
                      fill={
                        liked
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </motion.button>

                  {/* CATEGORY */}

                  <span
                    className="
                      absolute
                      bottom-4
                      left-4
                      rounded-full
                      bg-white/95
                      px-3
                      py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#557d43]
                      shadow-sm
                    "
                  >
                    {plant.category}
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="p-5">
                  <h3
                    className="
                      text-lg
                      font-black
                      text-[#234732]
                    "
                  >
                    {plant.name}
                  </h3>

                  {/* RATING */}

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-1
                        text-[#dfa344]
                      "
                    >
                      <Star
                        size={14}
                        fill="currentColor"
                      />

                      <span className="text-xs font-bold">
                        {plant.rating}
                      </span>
                    </div>

                    <span
                      className="
                        text-xs
                        text-[#89958d]
                      "
                    >
                      ({plant.reviews} reviews)
                    </span>
                  </div>

                  {/* PRICE + CART */}

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-2xl
                        font-black
                        text-[#173d2d]
                      "
                    >
                      ₹{plant.price.toLocaleString("en-IN")}
                    </span>

                    <motion.button
                      type="button"
                      onClick={() => {
                        onAddToCart?.(plant);
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.04,
                      }}
                      whileTap={{
                        scale: 0.92,
                      }}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-[#e7f0e2]
                        px-4
                        py-3
                        text-xs
                        font-black
                        text-[#31553d]
                        transition-all
                        duration-300
                        hover:bg-[#173d2d]
                        hover:text-white
                        hover:shadow-lg
                      "
                    >
                      <ShoppingBag size={16} />
                      Add
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {filteredPlants.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="py-20 text-center"
          >
            <LeafIcon />

            <h3
              className="
                mt-4
                text-xl
                font-black
                text-[#173d2d]
              "
            >
              No plants found
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-[#849087]
              "
            >
              Try another search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                handleCategoryChange("All");
              }}
              className="
                mt-5
                rounded-full
                bg-[#173d2d]
                px-5
                py-3
                text-xs
                font-bold
                text-white
                transition
                hover:-translate-y-1
              "
            >
              View All Plants
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* =====================================================
   EMPTY STATE ICON
===================================================== */

function LeafIcon() {
  return (
    <div
      className="
        mx-auto
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-[#e5efdf]
        text-[#71964c]
      "
    >
      <Sprout size={28} />
    </div>
  );
}