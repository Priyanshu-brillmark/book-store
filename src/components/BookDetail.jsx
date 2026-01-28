import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getBookById } from "../utils/dataManager";
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const book = getBookById(id);

  if (!book) {
    return (
      <div className="book-detail-container">
        <div className="book-not-found">
          <h2>Book not found</h2>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (book.stock > 0) {
      addToCart(book);
    }
  };

  return (
    <div className="book-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="book-detail">
        <div className="book-detail-image">
          <img src={book.image} alt={book.title} />
          {book.stock === 0 && (
            <div className="out-of-stock-badge">Out of Stock</div>
          )}
        </div>
        <div className="book-detail-info">
          <h1>{book.title}</h1>
          <p className="book-detail-author">by {book.author}</p>
          <div className="book-detail-meta">
            <span className="book-category">{book.category}</span>
            <span className="book-isbn">ISBN: {book.isbn}</span>
          </div>
          <div className="book-detail-price">${book.price.toFixed(2)}</div>
          <p className="book-detail-description">{book.description}</p>
          <div className="book-detail-stock">
            {book.stock > 0 ? (
              <span className="in-stock">
                In Stock ({book.stock} available)
              </span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>
          <button
            className="add-to-cart-btn-large"
            onClick={handleAddToCart}
            disabled={book.stock === 0}
          >
            {book.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
