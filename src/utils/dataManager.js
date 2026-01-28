// Utility functions for managing book data
// Since we're using static JSON files, we'll use localStorage as a cache/override layer
import defaultBooks from '../data/books.json';

export const getBooks = () => {
  // Check if there's a modified version in localStorage
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }

  // Otherwise, return the default books from the JSON file
  return defaultBooks;
};

export const saveBooks = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
  // Also update the in-memory cache
  return books;
};

export const getOrders = () => {
  const storedOrders = localStorage.getItem('orders');
  return storedOrders ? JSON.parse(storedOrders) : [];
};

export const saveOrder = (order) => {
  const orders = getOrders();
  const newOrder = {
    ...order,
    id: Date.now(),
    date: new Date().toISOString()
  };
  orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orders));
  return newOrder;
};

export const getBookById = (id) => {
  const books = getBooks();
  return books.find(book => book.id === parseInt(id));
};
