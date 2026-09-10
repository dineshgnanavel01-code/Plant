
import React from "react";
import { motion } from "framer-motion";
import {User,Leaf,ShoppingBag, Heart, Package, MapPin, Mail, Phone,CalendarDays,ShieldCheck,Star, ArrowLeft, LogOut,ChevronRight,Sprout,CreditCard,Truck} from "lucide-react";

export default function Profile({
  cart = [],
  onBack,
  onLogout,
}) {
  const profile = {
    name: "Dinoc",
    email: "hello@naturenursery.com",
    phone: "+91 98765 43210",
    location: "Salem, Tamil Nadu",
    memberSince: "January 2025",
    membership: "Green Member",
    avatar:
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  };

  const stats = [
    {
      label: "Orders",
      value: "12",
      icon: Package,
    },
    {
      label: "Plants",
      value: "28",
      icon: Sprout,
    },
    {
      label: "Wishlist",
      value: "16",
      icon: Heart,
    },
    {
      label: "Reviews",
      value: "9",
      icon: Star,
    },
  ];

  const menuItems = [
    {
      title: "My Orders",
      description: "Track and manage your plant orders",
      icon: Package,
    },
    {
      title: "Wishlist",
      description: "View your saved favourite plants",
      icon: Heart,
    },
    {
      title: "Plant Collection",
      description: "See all plants you have purchased",
      icon: Sprout,
    },
    {
      title: "Delivery Address",
      description: "Manage your saved delivery addresses",
      icon: MapPin,
    },
    {
      title: "Payment Methods",
      description: "Manage your preferred payment options",
      icon: CreditCard,
    },
  ];

  return (
    <section className="min-h-screen bg-[#f5f8f1] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-full">

        {/* =====================================================
            BACK BUTTON
        ===================================================== */}

        <motion.button
          type="button"
          onClick={onBack}
          whileHover={{
            x: -4,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-[#dce7d7]
            bg-white
            px-4
            py-2.5
            text-sm
            font-bold
            text-[#31553d]
            shadow-sm
            transition
            hover:bg-[#edf5e9]
          "
        >
          <ArrowLeft size={17} />
          Back to Nature Nursery
        </motion.button>

        {/* =====================================================
            PROFILE HERO CARD
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-[#dce8d7]
            bg-white
            shadow-[0_25px_70px_rgba(23,61,45,.10)]
          "
        >
          {/* Background decoration */}

          <div
            className="
              absolute
              -right-20
              -top-24
              h-72
              w-72
              rounded-full
              bg-[#71964c]/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-28
              left-20
              h-64
              w-64
              rounded-full
              bg-[#a9c58f]/15
              blur-3xl
            "
          />

          <div className="relative grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">

            {/* =================================================
                AVATAR
            ================================================= */}

            <div className="flex justify-center px-6 pt-8 lg:justify-start lg:px-8 lg:py-8">
              <motion.div
                whileHover={{
                  scale: 1.06,
                  rotateY: 8,
                  rotateX: -5,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  relative
                  h-28
                  w-28
                  overflow-hidden
                  rounded-[32px]
                  border-4
                  border-white
                  bg-[#e5efdf]
                  shadow-[0_20px_45px_rgba(23,61,45,.18)]
                "
              >
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display =
                      "none";
                  }}
                />

                <div
                  className="
                    absolute
                    bottom-2
                    right-2
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white
                    bg-[#71964c]
                    text-white
                  "
                >
                  <Leaf size={15} />
                </div>
              </motion.div>
            </div>

            {/* =================================================
                PROFILE INFO
            ================================================= */}

            <div className="px-6 pb-8 text-center lg:px-0 lg:py-8 lg:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    bg-[#e8f2e2]
                    px-3
                    py-1.5
                    text-xs
                    font-black
                    text-[#52733c]
                  "
                >
                  <ShieldCheck size={14} />
                  Verified Member
                </span>

                <span
                  className="
                    rounded-full
                    bg-[#173d2d]
                    px-3
                    py-1.5
                    text-xs
                    font-black
                    text-white
                  "
                >
                  {profile.membership}
                </span>
              </div>

              <h1 className="mt-3 text-3xl font-black tracking-tight text-[#173d2d] sm:text-4xl">
                {profile.name}
              </h1>

              <p className="mt-2 text-sm text-[#718076]">
                Welcome back to your Nature Nursery account 🌿
              </p>

              <div className="mt-5 flex flex-col gap-2 text-sm text-[#617068] sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <span className="inline-flex items-center justify-center gap-2">
                  <Mail
                    size={15}
                    className="text-[#71964c]"
                  />
                  {profile.email}
                </span>

                <span className="hidden sm:block text-[#c4cec0]">
                  •
                </span>

                <span className="inline-flex items-center justify-center gap-2">
                  <Phone
                    size={15}
                    className="text-[#71964c]"
                  />
                  {profile.phone}
                </span>
              </div>

              <div className="mt-2 flex flex-col gap-2 text-sm text-[#617068] sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <span className="inline-flex items-center justify-center gap-2">
                  <MapPin
                    size={15}
                    className="text-[#71964c]"
                  />
                  {profile.location}
                </span>

                <span className="hidden sm:block text-[#c4cec0]">
                  •
                </span>

                <span className="inline-flex items-center justify-center gap-2">
                  <CalendarDays
                    size={15}
                    className="text-[#71964c]"
                  />
                  Member since {profile.memberSince}
                </span>
              </div>
            </div>

            {/* =================================================
                EDIT PROFILE
            ================================================= */}

            <div className="px-6 pb-8 lg:px-8 lg:py-8">
              <motion.button
                type="button"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#d4e2cf]
                  bg-[#f5f9f2]
                  px-5
                  py-3
                  text-sm
                  font-black
                  text-[#31553d]
                  transition
                  hover:bg-[#e9f2e4]
                  lg:w-auto
                "
              >
                Edit Profile
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            STATS
        ===================================================== */}

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className="
                  rounded-2xl
                  border
                  border-[#dce8d7]
                  bg-white
                  p-5
                  shadow-sm
                  transition
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#eaf3e5]
                      text-[#71964c]
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <span className="text-2xl font-black text-[#173d2d]">
                    {stat.value}
                  </span>
                </div>

                <p className="mt-3 text-sm font-bold text-[#718076]">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">

          {/* =================================================
              ACCOUNT MENU
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              rounded-[28px]
              border
              border-[#dce8d7]
              bg-white
              p-5
              shadow-sm
              sm:p-6
            "
          >
            <div className="mb-5">
              <h2 className="text-xl font-black text-[#173d2d]">
                Account
              </h2>

              <p className="mt-1 text-sm text-[#718076]">
                Manage your Nature Nursery account
              </p>
            </div>

            <div className="space-y-3">
              {menuItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.title}
                    type="button"
                    whileHover={{
                      x: 5,
                    }}
                    whileTap={{
                      scale: 0.99,
                    }}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-[#e3ebe0]
                      bg-[#fbfdf9]
                      p-4
                      text-left
                      transition
                      hover:border-[#cbdcc4]
                      hover:bg-[#f1f7ed]
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#e7f1e2]
                        text-[#71964c]
                        transition
                        group-hover:bg-[#71964c]
                        group-hover:text-white
                      "
                    >
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-black text-[#173d2d]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#718076]">
                        {item.description}
                      </p>
                    </div>

                    <ChevronRight
                      size={18}
                      className="
                        shrink-0
                        text-[#a2afa5]
                        transition
                        group-hover:translate-x-1
                        group-hover:text-[#71964c]
                      "
                    />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* =================================================
              MEMBERSHIP CARD
          ================================================= */}

          <div className="space-y-6">

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                bg-[#173d2d]
                p-6
                text-white
                shadow-[0_25px_60px_rgba(23,61,45,.22)]
              "
            >
              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#71964c]/30
                  blur-2xl
                "
              />

              <div
                className="
                  absolute
                  -bottom-20
                  -left-10
                  h-40
                  w-40
                  rounded-full
                  bg-[#a9c58f]/15
                  blur-2xl
                "
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/10
                    "
                  >
                    <Leaf size={23} />
                  </div>

                  <span className="rounded-full bg-[#71964c] px-3 py-1.5 text-xs font-black">
                    ACTIVE
                  </span>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-white/60">
                  Nature Nursery
                </p>

                <h3 className="mt-1 text-2xl font-black">
                  Green Member
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Enjoy member benefits, plant care support
                  and exclusive nursery offers.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold">
                  <Star
                    size={17}
                    className="fill-current text-[#a9c58f]"
                  />
                  240 Green Points
                </div>
              </div>
            </motion.div>

            {/* =================================================
                RECENT CART
            ================================================= */}

            <div
              className="
                rounded-[28px]
                border
                border-[#dce8d7]
                bg-white
                p-5
                shadow-sm
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-black text-[#173d2d]">
                    Current Cart
                  </h2>

                  <p className="mt-1 text-xs text-[#718076]">
                    {cart.length} plant type
                    {cart.length !== 1 ? "s" : ""} selected
                  </p>
                </div>

                <ShoppingBag
                  size={21}
                  className="text-[#71964c]"
                />
              </div>

              {cart.length > 0 ? (
                <div className="mt-4 space-y-3">
                  {cart.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-[#f6faf3]
                        p-3
                      "
                    >
                      <div
                        className="
                          h-12
                          w-12
                          overflow-hidden
                          rounded-xl
                          bg-[#e5efdf]
                        "
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-black text-[#173d2d]">
                          {item.name}
                        </p>

                        <p className="mt-1 text-[11px] text-[#718076]">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <span className="text-xs font-black text-[#71964c]">
                        ₹
                        {Number(
                          item.price || 0
                        ).toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-5 rounded-2xl bg-[#f6faf3] p-5 text-center">
                  <ShoppingBag
                    size={28}
                    className="mx-auto text-[#a0b496]"
                  />

                  <p className="mt-2 text-xs font-bold text-[#718076]">
                    Your cart is currently empty.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            DELIVERY + SUPPORT
        ===================================================== */}

        <div className="mt-6 grid gap-4 md:grid-cols-3">

          <motion.div
            whileHover={{
              y: -4,
            }}
            className="
              rounded-2xl
              border
              border-[#dce8d7]
              bg-white
              p-5
              shadow-sm
            "
          >
            <Truck
              size={22}
              className="text-[#71964c]"
            />

            <h3 className="mt-3 text-sm font-black text-[#173d2d]">
              Fast Delivery
            </h3>

            <p className="mt-1 text-xs leading-relaxed text-[#718076]">
              Healthy plants delivered safely to your
              doorstep.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -4,
            }}
            className="
              rounded-2xl
              border
              border-[#dce8d7]
              bg-white
              p-5
              shadow-sm
            "
          >
            <Heart
              size={22}
              className="text-[#d87852]"
            />

            <h3 className="mt-3 text-sm font-black text-[#173d2d]">
              Plant Care Support
            </h3>

            <p className="mt-1 text-xs leading-relaxed text-[#718076]">
              Get expert guidance for keeping your plants
              healthy.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -4,
            }}
            className="
              rounded-2xl
              border
              border-[#dce8d7]
              bg-white
              p-5
              shadow-sm
            "
          >
            <ShieldCheck
              size={22}
              className="text-[#71964c]"
            />

            <h3 className="mt-3 text-sm font-black text-[#173d2d]">
              Secure Account
            </h3>

            <p className="mt-1 text-xs leading-relaxed text-[#718076]">
              Your account and order information stays
              protected.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            LOGOUT
        ===================================================== */}

        <div className="mt-8 flex justify-center pb-10">
          <motion.button
            type="button"
            onClick={onLogout}
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-red-200
              bg-white
              px-6
              py-3
              text-sm
              font-black
              text-red-500
              shadow-sm
              transition
              hover:bg-red-50
            "
          >
            <LogOut size={17} />
            Logout
          </motion.button>
        </div>
      </div>
    </section>
  );
}
