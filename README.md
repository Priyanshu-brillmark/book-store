# Book Store Application

A modern, full-featured book store web application built with React. Browse books, manage your shopping cart, complete purchases, and manage products through an admin panel. All product data is stored in JSON format.

## Features

- **Product Display**: Browse books with search and filter functionality
- **Shopping Cart**: Add items, update quantities, and manage your cart
- **Checkout**: Complete purchase with customer and payment information
- **Admin Panel**: Add, edit, and delete books with all changes saved to JSON
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Order Management**: Order history saved in JSON format

## Technology Stack

- React 18+
- React Router DOM (for navigation)
- LocalStorage API (for cart persistence and data management)
- JSON files (for product and order data storage)
- Modern CSS (responsive design)

## Project Structure

```
book-store/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BookCard.jsx          # Product card component
│   │   ├── BookList.jsx          # Product listing with filters
│   │   ├── BookDetail.jsx        # Product detail page
│   │   ├── Cart.jsx              # Shopping cart component
│   │   ├── Checkout.jsx          # Checkout form
│   │   ├── OrderConfirmation.jsx # Order confirmation page
│   │   ├── AdminPanel.jsx        # Admin interface
│   │   └── Navigation.jsx        # Navigation bar
│   ├── context/
│   │   └── CartContext.jsx        # Cart state management
│   ├── data/
│   │   ├── books.json            # Product database (JSON)
│   │   └── orders.json           # Order history (JSON)
│   ├── utils/
│   │   └── dataManager.js        # Data management utilities
│   ├── styles/
│   │   ├── App.css               # Main app styles
│   │   └── index.css             # Global styles
│   ├── App.jsx                   # Main app component with routing
│   └── index.js                  # Entry point
├── package.json
└── README.md
```

## Installation

1. **Clone or download this repository**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## Usage

### For Customers

1. **Browse Books**: View all available books on the home page
2. **Search & Filter**: Use the search bar to find books by title or author, or filter by category
3. **View Details**: Click on any book card to see detailed information
4. **Add to Cart**: Click "Add to Cart" on any book
5. **Manage Cart**: View your cart, update quantities, or remove items
6. **Checkout**: Proceed to checkout and fill in your shipping and payment information
7. **Order Confirmation**: Receive confirmation after placing an order

### For Administrators

1. **Access Admin Panel**: Click "Admin" in the navigation bar
2. **Add New Book**: Click "Add New Book" and fill in the book details
3. **Edit Book**: Click "Edit" on any book in the admin table
4. **Delete Book**: Click "Delete" to remove a book (with confirmation)
5. **View All Books**: See all books in a table format with key information

## Data Storage

### Books Data (`src/data/books.json`)

All product information is stored in JSON format with the following structure:

```json
{
  "id": 1,
  "title": "Book Title",
  "author": "Author Name",
  "price": 12.99,
  "description": "Book description",
  "isbn": "978-0-123456-78-9",
  "stock": 25,
  "image": "image-url",
  "category": "Fiction",
  "publicationDate": "2023-01-01"
}
```

### Orders Data (`src/data/orders.json`)

Orders are saved dynamically when customers complete checkout:

```json
{
  "id": 1234567890,
  "date": "2023-01-01T00:00:00.000Z",
  "items": [...],
  "customer": {...},
  "total": 25.98
}
```

**Note**: Since this is a static React app, admin changes are stored in localStorage. For production use, consider migrating to a backend API.

## Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` directory.

## Deployment to GitHub Pages

The project includes **GitHub Actions workflow** for automatic deployment! 🚀

### Quick Setup:

1. **Create a GitHub repository** named `book-store`

2. **Update homepage in package.json**
   - Replace `yourusername` with your GitHub username:
     ```json
     "homepage": "https://YOUR_USERNAME.github.io/book-store"
     ```

3. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/book-store.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository → **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**
   - The workflow will automatically deploy your site!

5. **Access your site**
   - Available at: `https://YOUR_USERNAME.github.io/book-store`
   - **Auto-deploys** on every push to `main` branch! ✨

**Note**: The app uses HashRouter for GitHub Pages compatibility. URLs will include `#` (e.g., `/#/cart`, `/#/admin`).

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Features in Detail

### Product Display

- Grid layout with responsive design
- Book cards showing image, title, author, price, and category
- Search functionality (by title or author)
- Category filtering
- Out of stock indicators

### Shopping Cart

- Add/remove items
- Update quantities
- Real-time total calculation
- Persistent cart (saved in localStorage)
- Empty cart handling

### Checkout Process

- Customer information form
- Shipping address collection
- Payment information (simulated)
- Order summary
- Form validation
- Order confirmation page

### Admin Panel

- View all books in a table
- Add new books with full details
- Edit existing books
- Delete books with confirmation
- All changes persist in localStorage (and can be exported to JSON)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend API integration
- User authentication
- Order tracking
- Product reviews and ratings
- Wishlist functionality
- Email notifications
- Payment gateway integration

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## Support

For issues or questions, please open an issue on the GitHub repository.
