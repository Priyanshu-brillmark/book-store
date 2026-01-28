# GitHub Pages Deployment Guide

This guide will help you deploy your Book Store application to GitHub Pages.

## 🚀 Automatic Deployment with GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that automatically deploys your site whenever you push changes to the `main` branch. This is the easiest and recommended method!

### Prerequisites

1. A GitHub account
2. Git installed on your computer

### Quick Setup Steps

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon → "New repository"
   - Name it `book-store`
   - Choose Public or Private
   - **Do NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Update Homepage in package.json**
   - Open `package.json`
   - Replace `yourusername` with your GitHub username:
     ```json
     "homepage": "https://YOUR_USERNAME.github.io/book-store"
     ```

3. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Book Store application"
   git remote add origin https://github.com/YOUR_USERNAME/book-store.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository → **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**
   - The workflow will automatically run and deploy your site

5. **Access Your Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/book-store`
   - The workflow runs automatically on every push to `main` branch

### How It Works

- The workflow file (`.github/workflows/deploy.yml`) is already configured
- When you push to `main`, GitHub Actions will:
  1. Install dependencies
  2. Build your React app
  3. Deploy to GitHub Pages automatically
- No need to run `npm run deploy` manually!

### Updating Your Site

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

The site will automatically rebuild and deploy! 🎉

---

## Manual Deployment (Alternative Method)

If you prefer to deploy manually using `gh-pages`:

1. Follow steps 1-3 from the GitHub Actions section above

2. **Install gh-pages Package**

   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy to GitHub Pages**

   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository → Settings → Pages
   - Under "Source", select `gh-pages` branch
   - Click "Save"

5. **Access Your Site**
   Your site will be available at: `https://YOUR_USERNAME.github.io/book-store`

**Note**: With manual deployment, you need to run `npm run deploy` after every change.

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
