import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Search, ShoppingBag, Menu, X, Sparkles, ArrowUpRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      type: "home",
    },
    {
      label: "Plants",
      type: "section",
      target: "plants",
    },
    {
      label: "Categories",
      type: "section",
      target: "categories",
    },
    {
      label: "About Us",
      type: "section",
      target: "about",
    },
    {
      label: "Contact",
      type: "page",
      path: "/contact",
    },
  ];

  // =========================================================
  // CLOSE MOBILE MENU
  // =========================================================

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // =========================================================
  // SCROLL TO HASH SECTION
  // =========================================================

  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = window.location.hash;

    if (!hash) return;

    const id = hash.replace("#", "");

    const timer = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  // =========================================================
  // SCROLL FUNCTION
  // =========================================================

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      return false;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    return true;
  };

  // =========================================================
  // SECTION NAVIGATION
  // =========================================================

  const goToSection = (id) => {
    closeMobileMenu();

    if (location.pathname === "/") {
      const found = scrollToSection(id);

      if (found) {
        window.history.pushState({}, "", `/#${id}`);

        window.dispatchEvent(
          new PopStateEvent("popstate")
        );

        return;
      }

      navigate(`/#${id}`);
      return;
    }

    navigate(`/#${id}`);
  };

  // =========================================================
  // HOME NAVIGATION
  // =========================================================

  const goHome = () => {
    closeMobileMenu();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.pushState({}, "", "/");

      return;
    }

    navigate("/");
  };

  // =========================================================
  // NAV CLICK
  // =========================================================

  const handleNavClick = (item) => {
    if (item.type === "home") {
      goHome();
      return;
    }

    if (item.type === "section") {
      goToSection(item.target);
      return;
    }

    if (item.type === "page") {
      closeMobileMenu();
      window.scrollTo({ top: 0, behavior: "instant" }); // Forces window to top instantly
      navigate(item.path);
    }
  };

  // =========================================================
  // CART
  // =========================================================

  const openCart = () => {
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate("/cart");
  };

  return (
    <header
      className="
        sticky
        top-0
        z-[9999]
        w-full
        border-b
        border-[#d4e2cd]
        bg-white/80
        backdrop-blur-xl
        backdrop-saturate-150
        shadow-[0_4px_25px_rgba(23,61,45,0.06)]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[80px]
          w-full
          max-w-full
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* LOGO */}
        <motion.button
          type="button"
          onClick={goHome}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="shrink-0 outline-none"
        >
          <div className="flex items-center gap-3 text-left">
            <motion.div
              animate={{
                y: [0, -3, 0, 3, 0],
                rotateZ: [-1, 1, -1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-[#173d2d]
                to-[#2b5c46]
                text-white
                shadow-[0_8px_20px_rgba(23,61,45,0.25)]
              "
            >
              <Leaf size={22} strokeWidth={2.2} className="text-[#c2dfb1]" />
              <div className="absolute -top-1 -right-1 text-[#8ab865]">
                <Sparkles size={12} />
              </div>
            </motion.div>

            <div>
              <div className="text-base font-extrabold tracking-tight text-[#173d2d]">
                Nature Nursery
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#638a42]">
                Botanic Haven
              </div>
            </div>
          </div>
        </motion.button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-[#f4f8f2] p-1.5 rounded-2xl border border-[#e3ede0]">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="
                relative
                rounded-xl
                px-4
                py-2
                text-xs
                font-bold
                text-[#3a5446]
                transition-colors
                duration-200
                hover:bg-white
                hover:text-[#173d2d]
                hover:shadow-sm
              "
            >
              <span>{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex shrink-0 items-center gap-2">
          {/* SEARCH */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#f4f8f2]
              border
              border-[#e3ede0]
              text-[#3a5446]
              transition-colors
              hover:bg-[#eaf3e6]
              hover:text-[#173d2d]
            "
            aria-label="Search"
          >
            <Search size={18} />
          </motion.button>

          {/* CART */}
          <motion.button
            type="button"
            onClick={openCart}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#173d2d]
              text-white
              shadow-md
              transition-colors
              hover:bg-[#22533d]
            "
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={18} />

            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="
                    absolute
                    -right-1.5
                    -top-1.5
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#71964c]
                    text-[10px]
                    font-black
                    text-white
                    ring-2
                    ring-white
                  "
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* MOBILE MENU TOGGLE */}
          <motion.button
            type="button"
            onClick={() => setIsMobileMenuOpen((val) => !val)}
            whileTap={{ scale: 0.92 }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#f4f8f2]
              border
              border-[#e3ede0]
              text-[#3a5446]
              md:hidden
            "
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="
              overflow-hidden
              border-t
              border-[#d4e2cd]
              bg-white/95
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  whileTap={{ scale: 0.98 }}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-bold
                    text-[#3a5446]
                    bg-[#f9fbf8]
                    border
                    border-[#edf4eb]
                    transition-all
                    hover:bg-[#173d2d]
                    hover:text-white
                  "
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={15} className="opacity-60" />
                </motion.button>
              ))}

              <motion.button
                type="button"
                onClick={openCart}
                whileTap={{ scale: 0.98 }}
                className="
                  mt-2
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  bg-[#173d2d]
                  px-4
                  py-3.5
                  text-sm
                  font-black
                  text-white
                  shadow-md
                "
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag size={18} />
                  Shopping Cart
                </span>
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs">
                  {cartCount}
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}