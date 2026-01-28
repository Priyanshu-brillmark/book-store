import React, { useState, useEffect } from "react";
import { getBooks, saveBooks } from "../utils/dataManager";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
    isbn: "",
    stock: "",
    image: "",
    category: "",
    publicationDate: "",
  });

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    const loadedBooks = getBooks();
    setBooks(loadedBooks);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (book) => {
    setEditingBook(book.id);
    setFormData({
      title: book.title,
      author: book.author,
      price: book.price.toString(),
      description: book.description,
      isbn: book.isbn,
      stock: book.stock.toString(),
      image: book.image,
      category: book.category,
      publicationDate: book.publicationDate,
    });
    setShowAddForm(true);
  };

  const handleDelete = (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      const updatedBooks = books.filter((book) => book.id !== bookId);
      saveBooks(updatedBooks);
      setBooks(updatedBooks);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      id: editingBook || Math.max(...books.map((b) => b.id), 0) + 1,
    };

    let updatedBooks;
    if (editingBook) {
      updatedBooks = books.map((book) =>
        book.id === editingBook ? bookData : book,
      );
    } else {
      updatedBooks = [...books, bookData];
    }

    saveBooks(updatedBooks);
    setBooks(updatedBooks);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      author: "",
      price: "",
      description: "",
      isbn: "",
      stock: "",
      image: "",
      category: "",
      publicationDate: "",
    });
    setEditingBook(null);
    setShowAddForm(false);
  };

  const categories = [
    "Fiction",
    "Science Fiction",
    "Romance",
    "Fantasy",
    "Mystery",
    "Non-Fiction",
  ];

  return (
    <div className="admin-panel-container">
      <h1>Admin Panel</h1>

      <div className="admin-controls">
        <button
          onClick={() => {
            resetForm();
            setShowAddForm(true);
          }}
          className="add-book-btn"
        >
          Add New Book
        </button>
      </div>

      {showAddForm && (
        <div className="admin-form-container">
          <h2>{editingBook ? "Edit Book" : "Add New Book"}</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-row">
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Author *</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Price *</label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Stock *</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>ISBN *</label>
                <input
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Image URL *</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Publication Date *</label>
                <input
                  type="date"
                  name="publicationDate"
                  value={formData.publicationDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="save-btn">
                {editingBook ? "Update Book" : "Add Book"}
              </button>
              <button type="button" onClick={resetForm} className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-books-list">
        <h2>All Books ({books.length})</h2>
        <div className="books-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>${book.price.toFixed(2)}</td>
                  <td>{book.stock}</td>
                  <td>{book.category}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(book)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
