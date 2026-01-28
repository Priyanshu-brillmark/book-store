import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BookCard from "./BookCard";
import { getBooks } from "../utils/dataManager";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const loadedBooks = getBooks();
    setBooks(loadedBooks);
    setFilteredBooks(loadedBooks);

    // Read search params from URL
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "All";
    setSearchTerm(search);
    setSelectedCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  useEffect(() => {
    let filtered = books;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((book) => book.category === selectedCategory);
    }

    setFilteredBooks(filtered);
    setSearchParams({
      search: searchTerm,
      category: selectedCategory,
    });
  }, [searchTerm, selectedCategory, books, setSearchParams]);

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  return (
    <div className="book-list-container">
      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search books by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="category-filter">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="no-results">
          <p>No books found matching your criteria.</p>
        </div>
      ) : (
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
