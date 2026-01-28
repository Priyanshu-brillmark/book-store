import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./BookCard.css";

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (book.stock > 0) {
      addToCart(book);
    }
  };

  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`} className="book-link">
        <div className="book-image-container">
          <img src={book.image} alt={book.title} className="book-image" />
          {book.stock === 0 && (
            <div className="out-of-stock-badge">Out of Stock</div>
          )}
        </div>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">by {book.author}</p>
          <p className="book-category">{book.category}</p>
          <div className="book-footer">
            <span className="book-price">${book.price.toFixed(2)}</span>
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={book.stock === 0}
            >
              {book.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
