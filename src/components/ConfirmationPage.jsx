import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {CheckCircle2,Leaf,PackageCheck,Truck,ArrowRight,ShoppingBag,Sparkles,} from "lucide-react";

export default function ConfirmationPage() {
  const location = useLocation();

  const orderId =
    location.state?.orderId ||
    `NN-${Date.now().toString().slice(-8)}`;

  return (
    <main className="min-h-[calc(100vh-76px)] overflow-hidden bg-[#f6f9f2] px-4 py-12 sm:px-6 lg:px-8">
      {/* BACKGROUND GLOW */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none fixed
          left-1/2 top-1/2
          h-72 w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#b9d79c]
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-4xl">

        {/* SUCCESS CARD */}
        <motion.section
          initial={{
            opacity: 0,
            y: 40,
            rotateX: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="
            relative overflow-hidden
            rounded-[32px]
            border border-[#dfe9da]
            bg-white
            p-6
            shadow-[0_30px_80px_rgba(23,61,45,0.12)]
            sm:p-10
            lg:p-14
          "
        >
          {/* TOP SHINE */}
          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute left-0 top-0
              h-full w-24
              rotate-[20deg]
              bg-gradient-to-r
              from-transparent
              via-white/70
              to-transparent
              blur-xl
            "
          />

          {/* SUCCESS ICON */}
          <div className="relative flex justify-center">
            <motion.div
              initial={{
                scale: 0,
                rotateY: -180,
              }}
              animate={{
                scale: 1,
                rotateY: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 14,
                delay: 0.2,
              }}
              whileHover={{
                rotateY: 180,
                scale: 1.08,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                relative flex h-24 w-24
                items-center justify-center
                rounded-[30px]
                bg-[#173d2d]
                text-white
                shadow-[0_20px_45px_rgba(23,61,45,0.25)]
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                }}
                className="
                  absolute inset-0
                  rounded-[30px]
                  bg-[#71964c]
                  blur-2xl
                "
              />

              <CheckCircle2
                size={52}
                strokeWidth={1.8}
                className="relative z-10"
              />
            </motion.div>

            {/* FLOATING SPARKLES */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute -right-2 top-0 text-[#71964c]"
            >
              <Sparkles size={25} />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -left-3 bottom-0 text-[#71964c]"
            >
              <Leaf size={24} />
            </motion.div>
          </div>

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 text-center"
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#71964c]">
              Order Confirmed
            </p>

            <h1
              className="
                mt-3
                text-3xl
                font-black
                tracking-tight
                text-[#173d2d]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Thank you for your order! 🌿
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#68776d] sm:text-base">
              Your plants are getting ready for their journey.
              We have received your order successfully and will
              carefully prepare everything for delivery.
            </p>
          </motion.div>

          {/* ORDER ID */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="
              mx-auto mt-8
              max-w-md
              rounded-2xl
              border border-[#dfe9da]
              bg-[#f6f9f2]
              p-5
              text-center
            "
          >
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#71964c]">
              Order ID
            </p>

            <p className="mt-2 text-lg font-black tracking-wider text-[#173d2d]">
              {orderId}
            </p>
          </motion.div>

          {/* DELIVERY STEPS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">

            {/* STEP 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{
                y: -6,
                rotateX: 4,
                scale: 1.02,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                rounded-2xl
                border border-[#dfe9da]
                bg-[#f6f9f2]
                p-5
                text-center
              "
            >
              <div
                className="
                  mx-auto flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#173d2d]
                  text-white
                "
              >
                <PackageCheck size={23} />
              </div>

              <h3 className="mt-4 text-sm font-black text-[#173d2d]">
                Order Packed
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#718078]">
                Your plants will be carefully packed.
              </p>
            </motion.div>

            {/* STEP 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{
                y: -6,
                rotateX: 4,
                scale: 1.02,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                rounded-2xl
                border border-[#dfe9da]
                bg-[#f6f9f2]
                p-5
                text-center
              "
            >
              <div
                className="
                  mx-auto flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#71964c]
                  text-white
                "
              >
                <Truck size={23} />
              </div>

              <h3 className="mt-4 text-sm font-black text-[#173d2d]">
                On The Way
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#718078]">
                Your order will be dispatched shortly.
              </p>
            </motion.div>

            {/* STEP 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{
                y: -6,
                rotateX: 4,
                scale: 1.02,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                rounded-2xl
                border border-[#dfe9da]
                bg-[#f6f9f2]
                p-5
                text-center
              "
            >
              <div
                className="
                  mx-auto flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#31553d]
                  text-white
                "
              >
                <Leaf size={23} />
              </div>

              <h3 className="mt-4 text-sm font-black text-[#173d2d]">
                Grow Naturally
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#718078]">
                Enjoy your new green companions.
              </p>
            </motion.div>
          </div>

          {/* ACTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <Link to="/">
              <motion.button
                type="button"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  rotateX: 3,
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#173d2d]
                  px-7
                  py-4
                  text-sm
                  font-black
                  text-white
                  shadow-[0_15px_35px_rgba(23,61,45,0.2)]
                  transition
                  hover:bg-[#31553d]
                  sm:w-auto
                "
              >
                <ShoppingBag size={18} />
                Continue Shopping
                <ArrowRight size={17} />
              </motion.button>
            </Link>
          </motion.div>

          {/* FOOTER MESSAGE */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[#849087]">
              Need help with your order?
              <Link
                to="/contact"
                className="ml-1 font-bold text-[#71964c] hover:underline"
              >
                Contact Nature Nursery
              </Link>
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}