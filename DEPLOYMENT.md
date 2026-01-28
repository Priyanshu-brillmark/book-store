# GitHub Pages Deployment Guide

This guide will help you deploy your Book Store application to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `book-store` (or your preferred name)
5. Choose Public or Private
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 2. Initialize Git and Push to GitHub

Open your terminal/command prompt in the project directory and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Book Store application"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/book-store.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Update Homepage in package.json

Before deploying, update the `homepage` field in `package.json`:

1. Open `package.json`
2. Find the `"homepage"` field
3. Replace `yourusername` with your actual GitHub username:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/book-store"
   ```

### 4. Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

### 5. Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:

- Build your React app for production
- Create a `gh-pages` branch
- Push the build files to GitHub Pages

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select `gh-pages` branch
5. Click "Save"

### 7. Access Your Deployed Site

Your site will be available at:

```
https://YOUR_USERNAME.github.io/book-store
```

**Note**: It may take a few minutes for the site to be available after deployment.

## Updating Your Site

Whenever you make changes to your code:

1. Commit your changes:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. Deploy the updated version:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Issue: 404 errors when navigating to routes

**Solution**: The app uses HashRouter which adds `#` to URLs. This is normal and works correctly. Your URLs will look like:

- `https://yourusername.github.io/book-store/#/`
- `https://yourusername.github.io/book-store/#/cart`
- `https://yourusername.github.io/book-store/#/admin`

### Issue: Site shows blank page

**Solutions**:

1. Check that the `homepage` field in `package.json` matches your repository URL
2. Ensure you've selected the `gh-pages` branch in GitHub Pages settings
3. Wait a few minutes and refresh (GitHub Pages can take time to update)
4. Check the browser console for errors

### Issue: Assets not loading

**Solution**: Make sure the `homepage` field in `package.json` is correctly set to your GitHub Pages URL.

### Issue: Changes not appearing

**Solutions**:

1. Clear your browser cache
2. Wait a few minutes (GitHub Pages can take 1-5 minutes to update)
3. Make sure you ran `npm run deploy` after making changes

## Alternative: Using Custom Domain

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update the `homepage` in `package.json` to your custom domain

## Notes

- The `gh-pages` branch contains only the built files, not your source code
- Your source code remains on the `main` branch
- Always run `npm run deploy` from the `main` branch after committing changes
- GitHub Pages is free for public repositories
