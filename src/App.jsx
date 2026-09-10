import React, { useState } from "react";
import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlantCategories from "./components/PlantCategories";
import FeaturedPlants from "./components/FeaturedPlants";
import AboutNursery from "./components/AboutNursery";
import WhyChooseUs from "./components/WhyChooseUs";
import PlantCareTips from "./components/PlantCareTips";
import CustomerReviews from "./components/CustomerReviews";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import CartPage from "./components/CartPage"
import ConfirmationPage from "./components/ConfirmationPage";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === plant.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === plant.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...plant,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce(
    (total, item) =>
      total + (item.quantity || 0),
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        (item.quantity || 0),
    0
  );

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f6f9f2]">
        <Navbar cartCount={cartCount} />

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero />

                <PlantCategories />

                <FeaturedPlants
                  onAddToCart={addToCart}
                />

                <AboutNursery />

                <WhyChooseUs />

                <PlantCareTips />

                <CustomerReviews />

                <Newsletter />
              </>
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />

          {/* CART */}
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                cartTotal={cartTotal}
                onRemove={removeFromCart}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
              />
            }
          />

          {/* ORDER CONFIRMED */}
          <Route
            path="/order-confirmed"
            element={<ConfirmationPage />}
          />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}