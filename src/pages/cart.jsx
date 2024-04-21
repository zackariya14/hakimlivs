import React, { useState, useEffect } from "react";
import "../components/cart.css";

const Cart = () => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(Array.isArray(initialCart) ? initialCart : []);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const calculateProductTotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    const cartItems = Array.isArray(cart) ? cart : [];
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePayment = () => {
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
    setShowThankYouModal(false);
  };

  const handleCashOnDelivery = () => {
    setCart([]); // Töm varukorgen
    setShowPaymentModal(false);
    setShowThankYouModal(true);
  };

  const handleKlarnaPayment = () => {
    setCart([]); // Töm varukorgen
    setShowPaymentModal(false);
    setShowThankYouModal(true);
  };

  return (
    <div className="cart-container">
        <a href="/">Till startsidan</a>
      <h2>Din kundvagn</h2>
      {cart.length === 0 ? (
        <p>Kundvagnen är tom</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.Image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Pris: {item.price} kr</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(index)}>+</button>
                  </div>
                  <p>Totalt: {calculateProductTotal(item.price, item.quantity)} kr</p>
                  <button onClick={() => removeFromCart(index)}>Ta bort</button>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <h3>Totalt: {calculateTotal()} kr</h3>
            <button onClick={handlePayment}>Gå till betalning</button>
          </div>
        </>
      )}

      {showPaymentModal && (
        <div className="payment-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Välj betalningsalternativ</h2>
            <button onClick={handleCashOnDelivery}>Betala vid leverans</button>
            <button onClick={handleKlarnaPayment}>Betala med Klarna</button>
          </div>
        </div>
      )}

      {showThankYouModal && (
        <div className="thank-you-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Tack för ditt köp!</h2>
            <p>Ditt köp har slutförts.</p>
            <a href="/">Till startsidan</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
