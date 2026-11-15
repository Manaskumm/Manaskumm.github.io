# Manas Kummarapurugu — Portfolio

Minecraft-themed portfolio at [manaskumm.github.io](https://manaskumm.github.io/), built with Next.js 16, React 19, TypeScript and Tailwind CSS. GitHub Pages serves the static export.

## Local development

Use Node.js 22 and npm. Run `npm ci`, then `npm run dev`, and open [localhost:3000](http://localhost:3000).

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before deploying. The production files are written to `out/`; use a static server to preview that directory. `next start` is not supported for an exported site.

## Content and assets

- All biographical facts, experience, project descriptions, skills and external URLs live in `src/lib/portfolio.ts`.
- The original Minecraft title screen opens About Me, Projects, Skills and Contact. Education and experience are under About Me → Advancements. The original stylesheet, fonts, animated panorama and music behavior are preserved.
- Final pixel artwork is stored in `public/assets/images/`. Generation prompts and logo-reference provenance are in [docs/IMAGE-PROMPTS.md](docs/IMAGE-PROMPTS.md).
- The local Minecraft font's license is in `public/assets/fonts/LICENSE`.
- The pre-update findings and outstanding verification limits are in [docs/AUDIT.md](docs/AUDIT.md).

## Current resume

The supplied `manasresume__.pdf` is served unchanged at `public/manasresume.pdf`. Both resume links point to `/manasresume.pdf`. The older PDF and DOCX were removed.

Site wording follows the supplied resume, while the education and internship dates follow the user's explicit timeline. The PDF itself retains its original dates. Replace this file with any future revision and re-run the build and browser checks.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md). The existing GitHub Actions workflow deploys `out/` when changes reach `main`.
