import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag,Trash2,Plus, Minus,ArrowRight,Leaf,Package,ShieldCheck,Truck,} from "lucide-react";

export default function CartPage({
  cart = [],
  cartTotal = 0,
  onRemove,
  onIncrease,
  onDecrease,
}) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!cart.length) return;

    const orderId = `NN-${Date.now()
      .toString()
      .slice(-8)}`;

    navigate("/order-confirmed", {
      state: {
        orderId,
      },
    });
  };

  return (
    <main className="min-h-[calc(100vh-76px)] bg-[#f6f9f2] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{
                rotateY: 180,
                scale: 1.08,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                flex h-12 w-12 items-center
                justify-center rounded-2xl
                bg-[#173d2d] text-white
                shadow-lg
              "
            >
              <ShoppingBag size={24} />
            </motion.div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#71964c]">
                Nature Nursery
              </p>

              <h1 className="text-3xl font-black tracking-tight text-[#173d2d] sm:text-4xl">
                Your Shopping Cart
              </h1>
            </div>
          </div>

          <p className="mt-3 text-sm text-[#718078]">
            Review your plants before placing your order.
          </p>
        </motion.div>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <motion.section
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              rounded-[30px]
              border border-[#dfe9da]
              bg-white
              px-6 py-16
              text-center
              shadow-[0_20px_60px_rgba(23,61,45,0.08)]
            "
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                mx-auto flex h-24 w-24
                items-center justify-center
                rounded-[30px]
                bg-[#edf4e9]
                text-[#71964c]
              "
            >
              <ShoppingBag size={44} />
            </motion.div>

            <h2 className="mt-7 text-2xl font-black text-[#173d2d]">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#718078]">
              Looks like you haven't added any beautiful
              plants yet. Explore our nursery and find
              something green for your space.
            </p>

            <Link to="/">
              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  mt-7 inline-flex
                  items-center gap-2
                  rounded-2xl
                  bg-[#173d2d]
                  px-7 py-4
                  text-sm font-black
                  text-white
                  shadow-lg
                "
              >
                <Leaf size={18} />
                Explore Plants
                <ArrowRight size={17} />
              </motion.button>
            </Link>
          </motion.section>
        ) : (
          <div className="grid gap-7 lg:grid-cols-[1fr_380px]">

            {/* CART ITEMS */}
            <section className="space-y-4">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 80,
                      height: 0,
                    }}
                    whileHover={{
                      y: -5,
                      rotateX: 1.5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    className="
                      overflow-hidden
                      rounded-[26px]
                      border border-[#dfe9da]
                      bg-white
                      p-4
                      shadow-[0_15px_40px_rgba(23,61,45,0.07)]
                      sm:p-5
                    "
                  >
                    <div className="flex gap-4">

                      {/* IMAGE */}
                      <div className="
                        relative h-28 w-28
                        shrink-0 overflow-hidden
                        rounded-2xl bg-[#edf4e9]
                        sm:h-36 sm:w-36
                      ">
                        <img
                          src={
                            item.image ||
                            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80"
                          }
                          alt={item.name}
                          className="
                            h-full w-full
                            object-cover
                          "
                        />

                        <div className="
                          absolute inset-0
                          bg-gradient-to-t
                          from-[#173d2d]/20
                          to-transparent
                        " />
                      </div>

                      {/* DETAILS */}
                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#71964c]">
                              {item.category}
                            </p>

                            <h2 className="
                              mt-1
                              text-base font-black
                              text-[#173d2d]
                              sm:text-xl
                            ">
                              {item.name}
                            </h2>
                          </div>

                          {/* REMOVE */}
                          <motion.button
                            type="button"
                            onClick={() =>
                              onRemove?.(item.id)
                            }
                            whileHover={{
                              scale: 1.1,
                              rotate: 8,
                            }}
                            whileTap={{
                              scale: 0.9,
                            }}
                            className="
                              flex h-9 w-9
                              shrink-0
                              items-center justify-center
                              rounded-xl
                              text-[#9a625d]
                              transition
                              hover:bg-[#fff0ee]
                            "
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={18} />
                          </motion.button>
                        </div>

                        {/* PRICE */}
                        <p className="mt-3 text-lg font-black text-[#31553d]">
                          ₹{Number(item.price || 0).toLocaleString("en-IN")}
                        </p>

                        {/* QUANTITY */}
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div
                            className="
                              flex items-center
                              overflow-hidden
                              rounded-xl
                              border border-[#dfe9da]
                              bg-[#f6f9f2]
                            "
                          >
                            <motion.button
                              type="button"
                              onClick={() =>
                                onDecrease?.(item.id)
                              }
                              whileTap={{
                                scale: 0.8,
                              }}
                              className="
                                flex h-9 w-9
                                items-center justify-center
                                text-[#31553d]
                                hover:bg-[#e8f0e3]
                              "
                            >
                              <Minus size={15} />
                            </motion.button>

                            <span className="
                              flex h-9 min-w-9
                              items-center justify-center
                              text-sm font-black
                              text-[#173d2d]
                            ">
                              {item.quantity || 1}
                            </span>

                            <motion.button
                              type="button"
                              onClick={() =>
                                onIncrease?.(item.id)
                              }
                              whileTap={{
                                scale: 0.8,
                              }}
                              className="
                                flex h-9 w-9
                                items-center justify-center
                                text-[#31553d]
                                hover:bg-[#e8f0e3]
                              "
                            >
                              <Plus size={15} />
                            </motion.button>
                          </div>

                          <p className="
                            text-sm font-black
                            text-[#173d2d]
                          ">
                            ₹
                            {(
                              Number(item.price || 0) *
                              Number(item.quantity || 0)
                            ).toLocaleString("en-IN")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>

              {/* CONTINUE SHOPPING */}
              <Link
                to="/"
                className="
                  inline-flex items-center
                  gap-2 pt-2
                  text-sm font-black
                  text-[#71964c]
                  hover:text-[#173d2d]
                "
              >
                ← Continue Shopping
              </Link>
            </section>

            {/* SUMMARY */}
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  rounded-[28px]
                  border border-[#dfe9da]
                  bg-white
                  p-6
                  shadow-[0_20px_60px_rgba(23,61,45,0.1)]
                "
              >
                <h2 className="text-xl font-black text-[#173d2d]">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4">

                  <div className="flex justify-between text-sm">
                    <span className="text-[#718078]">
                      Items
                    </span>
                    <span className="font-bold text-[#173d2d]">
                      {cart.reduce(
                        (total, item) =>
                          total +
                          Number(item.quantity || 0),
                        0
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[#718078]">
                      Subtotal
                    </span>
                    <span className="font-bold text-[#173d2d]">
                      ₹{Number(cartTotal).toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[#718078]">
                      Delivery
                    </span>
                    <span className="font-bold text-[#71964c]">
                      FREE
                    </span>
                  </div>

                  <div className="border-t border-[#e5ece1] pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-black text-[#173d2d]">
                        Total
                      </span>

                      <span className="text-2xl font-black text-[#173d2d]">
                        ₹{Number(cartTotal).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CHECKOUT */}
                <motion.button
                  type="button"
                  onClick={handleCheckout}
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
                    mt-6 flex w-full
                    items-center justify-center
                    gap-2 rounded-2xl
                    bg-[#173d2d]
                    px-6 py-4
                    text-sm font-black
                    text-white
                    shadow-[0_15px_35px_rgba(23,61,45,0.2)]
                    transition
                    hover:bg-[#31553d]
                  "
                >
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </motion.button>

                {/* BENEFITS */}
                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3">
                    <div className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-xl bg-[#edf4e9]
                      text-[#71964c]
                    ">
                      <Truck size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-black text-[#173d2d]">
                        Free Plant Delivery
                      </p>
                      <p className="text-[10px] text-[#849087]">
                        Safe doorstep delivery
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-xl bg-[#edf4e9]
                      text-[#71964c]
                    ">
                      <Package size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-black text-[#173d2d]">
                        Carefully Packed
                      </p>
                      <p className="text-[10px] text-[#849087]">
                        Plants protected during shipping
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-xl bg-[#edf4e9]
                      text-[#71964c]
                    ">
                      <ShieldCheck size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-black text-[#173d2d]">
                        Secure Checkout
                      </p>
                      <p className="text-[10px] text-[#849087]">
                        Safe and protected ordering
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}