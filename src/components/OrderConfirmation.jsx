import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="order-confirmation-container">
        <h1>Order Confirmation</h1>
        <p>No order found.</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="order-confirmation-container">
      <div className="confirmation-content">
        <div className="success-icon">✓</div>
        <h1>Order Confirmed!</h1>
        <p className="confirmation-message">
          Thank you for your purchase, {order.customer.name}!
        </p>
        <p className="order-id">Order ID: #{order.id}</p>

        <div className="order-details">
          <h2>Order Details</h2>
          <div className="order-items">
            {order.items.map((item) => (
              <div key={item.id} className="order-item">
                <span>
                  {item.title} x{item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>Total:</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="shipping-info">
          <h2>Shipping To</h2>
          <p>{order.customer.address.street}</p>
          <p>
            {order.customer.address.city}, {order.customer.address.zipCode}
          </p>
        </div>

        <button onClick={() => navigate("/")} className="continue-shopping-btn">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
