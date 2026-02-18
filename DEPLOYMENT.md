# Deployment Guide

## Option 1: Vercel (Recommended for Next.js)
Vercel is the creators of Next.js and offers the best integration, performance, and free tier for personal portfolios.

### Steps:
1.  **Push to GitHub**:
    *   Initialize git if you haven't: `git init`
    *   Add files: `git add .`
    *   Commit: `git commit -m "Initial commit"`
    *   Create a new repository on GitHub.
    *   Link and push:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
        git branch -M main
        git push -u origin main
        ```

2.  **Deploy on Vercel**:
    *   Go to [vercel.com](https://vercel.com) and sign up/login with GitHub.
    *   Click **"Add New..."** -> **"Project"**.
    *   Import your GitHub repository.
    *   Keep the default settings (Framework Preset: Next.js).
    *   Click **"Deploy"**.

3.  **Done!** Vercel will give you a live URL (e.g., `your-name-portfolio.vercel.app`).

---

## Option 2: GitHub Pages (Static Export)
If you prefer hosting directly on GitHub for free.

### Steps:
1.  **Update `next.config.mjs`**:
    Change your config to enable static export:
    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      output: 'export',  // <--- Add this line
      images: {
        unoptimized: true, // <--- Required for Next.js Image component on static sites
      },
    };

    export default nextConfig;
    ```

2.  **Build**:
    Run `npm run build`. This will create an `out` folder.

3.  **Deploy**:
    *   Push your code to GitHub.
    *   Go to your repository **Settings** -> **Pages**.
    *   Source: **GitHub Actions** (or configure a workflow to deploy the `out` folder).
    *   *Easier method*: Use a library like `gh-pages` to push the `out` folder to a `gh-pages` branch.

## Recommendation
Use **Option 1 (Vercel)**. It's zero-config for Next.js, supports all features (like the optimization we just did), and updates automatically when you push to GitHub.
