# GitHub Pages deployment

Repository: [Manaskumm/Manaskumm.github.io](https://github.com/Manaskumm/Manaskumm.github.io). Site: [manaskumm.github.io](https://manaskumm.github.io/).

The existing `.github/workflows/deploy.yml` builds the static Next.js export and deploys it to GitHub Pages on pushes to `main` or a manual workflow dispatch.

1. Verify the current resume is installed and all content in `src/lib/portfolio.ts` is accurate.
2. Run `npm ci`, `npm run lint`, `npx tsc --noEmit`, and `npm run build` with Node.js 22.
3. Preview `out/` with a static server. Check all five sections on desktop and mobile, project search, images, external links, resume download, and the browser console.
4. Push reviewed changes to `main` to trigger the workflow. GitHub repository Settings → Pages should use GitHub Actions.
5. Wait for the build and deploy jobs to succeed; then verify the live root URL and resume file.

`next.config.ts` already sets `output: 'export'` and disables server-side image optimization. This is a root user site, so no `/portfolio` base path is needed. The site has no application backend or server-only features.
