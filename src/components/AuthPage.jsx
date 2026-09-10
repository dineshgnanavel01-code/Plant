import React, { useState } from "react";
import { motion } from "framer-motion";
import {Leaf,Mail,Lock,User,Eye,EyeOff,ArrowLeft,CheckCircle2} from "lucide-react";

export default function AuthPage({
  mode = "signin",
  setMode,
  onBack,
}) {
  const isSignIn = mode === "signin";

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSignIn && !form.name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!form.email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      setMessage(
        "Password must contain at least 6 characters."
      );
      return;
    }

    setMessage(
      isSignIn
        ? "Welcome back! Sign in successful."
        : "Account created successfully!"
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12">

      {/* ================= 3D BACKGROUND ================= */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-32
          h-28
          w-28
          rounded-full
          bg-[#d9e9cf]
          opacity-70
          blur-[1px]
        "
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-48
          h-40
          w-40
          rounded-full
          bg-[#c7dfbb]
          opacity-50
          blur-sm
        "
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="hidden lg:block"
        >
          <div className="relative mx-auto max-w-lg">

            <span className="inline-flex rounded-full bg-[#e5efdf] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#557d43]">
              Nature Nursery
            </span>

            <h1 className="mt-6 text-6xl font-black leading-[1.05] tracking-tight text-[#173d2d]">
              Grow your
              <span className="block text-[#71964c]">
                green world.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-[#718078]">
              Create your account and discover beautiful
              plants, expert care tips and everything you
              need to bring nature home.
            </p>

            {/* 3D Plant Orb */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 8, 0],
                rotateX: [0, 4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                preserve-3d
                relative
                mt-12
                flex
                h-64
                w-64
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#edf5e8]
                to-[#c8dfba]
                shadow-[0_35px_70px_rgba(23,61,45,0.16)]
              "
            >
              <div className="absolute inset-8 rounded-full bg-[#71964c]/15 blur-xl" />

              <Leaf
                size={120}
                strokeWidth={1}
                className="relative z-10 text-[#557d43]"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ================= AUTH CARD ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            rotateX: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="perspective"
        >
          <div
            className="
              mx-auto
              w-full
              max-w-md
              rounded-[30px]
              border
              border-white
              bg-white/90
              p-6
              shadow-[0_30px_80px_rgba(23,61,45,0.15)]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_40px_100px_rgba(23,61,45,0.2)]
              sm:p-8
            "
          >

            {/* Logo */}
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#173d2d] text-white shadow-lg">
                <Leaf size={21} />
              </div>

              <div>
                <p className="text-sm font-black text-[#173d2d]">
                  Nature Nursery
                </p>

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#71964c]">
                  Plant with love
                </p>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-black tracking-tight text-[#173d2d]">
              {isSignIn
                ? "Welcome back"
                : "Create your account"}
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#718078]">
              {isSignIn
                ? "Sign in to continue your plant journey."
                : "Join us and bring more nature into your home."}
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-4"
            >

              {/* NAME */}
              {!isSignIn && (
                <div>
                  <label className="mb-2 block text-xs font-bold text-[#53665b]">
                    Full Name
                  </label>

                  <div className="flex items-center rounded-xl border border-[#dfe7db] bg-[#f8faf6] px-3 transition-all focus-within:border-[#71964c] focus-within:ring-4 focus-within:ring-[#71964c]/10">
                    <User
                      size={17}
                      className="text-[#71964c]"
                    />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-transparent px-3 py-3 text-sm text-[#173d2d] outline-none placeholder:text-[#9aa89e]"
                    />
                  </div>
                </div>
              )}

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-xs font-bold text-[#53665b]">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-[#dfe7db] bg-[#f8faf6] px-3 transition-all focus-within:border-[#71964c] focus-within:ring-4 focus-within:ring-[#71964c]/10">
                  <Mail
                    size={17}
                    className="text-[#71964c]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-transparent px-3 py-3 text-sm text-[#173d2d] outline-none placeholder:text-[#9aa89e]"
                  />
                </div>
              </div>

           
              <div>
                <label className="mb-2 block text-xs font-bold text-[#53665b]">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-[#dfe7db] bg-[#f8faf6] px-3 transition-all focus-within:border-[#71964c] focus-within:ring-4 focus-within:ring-[#71964c]/10">
                  <Lock
                    size={17}
                    className="text-[#71964c]"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Minimum 6 characters"
                    className="w-full bg-transparent px-3 py-3 text-sm text-[#173d2d] outline-none placeholder:text-[#9aa89e]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((value) => !value)
                    }
                    className="text-[#718078] transition hover:text-[#173d2d]"
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

         
              {message && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#edf5e8]
                    px-3
                    py-3
                    text-xs
                    font-semibold
                    text-[#557d43]
                  "
                >
                  <CheckCircle2 size={16} />
                  {message}
                </motion.div>
              )}

              {/* SUBMIT */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="submit"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#173d2d]
                  px-5
                  py-3.5
                  text-sm
                  font-black
                  text-white
                  shadow-[0_12px_30px_rgba(23,61,45,0.2)]
                  transition-all
                  duration-300
                  hover:bg-[#285a43]
                "
              >
                {isSignIn
                  ? "Sign In"
                  : "Create Account"}
              </motion.button>
            </form>

  
            <div className="mt-6 text-center text-sm text-[#718078]">
              {isSignIn
                ? "Don't have an account?"
                : "Already have an account?"}

              <button
                type="button"
                onClick={() =>
                  setMode(
                    isSignIn
                      ? "signup"
                      : "signin"
                  )
                }
                className="ml-1 font-black text-[#557d43] transition hover:text-[#173d2d]"
              >
                {isSignIn
                  ? "Create Account"
                  : "Sign In"}
              </button>
            </div>

        
            <button
              type="button"
              onClick={onBack}
              className="
                mx-auto
                mt-5
                flex
                items-center
                gap-2
                text-xs
                font-bold
                text-[#718078]
                transition-all
                hover:-translate-x-1
                hover:text-[#173d2d]
              "
            >
              <ArrowLeft size={14} />
              Back to Nature Nursery
            </button>

          </div>
        </motion.div>
      </div>
    </main>
  );
}