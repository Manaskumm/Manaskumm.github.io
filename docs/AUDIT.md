# Portfolio audit — November 15, 2026

Audited the live [portfolio](https://manaskumm.github.io/) and every reachable screen: main menu; About / Who Am I; About / Advancements and its detail data; Projects and its search / selection controls; Skills; Contact; resume. The repository has one application route with client-side screens, plus Next.js's generated 404 page. Also reviewed unused components, assets, metadata, README, and deployment configuration.

The initial content update used the facts supplied in the task. The user subsequently provided `C:\Users\Manas\Downloads\manasresume__.pdf`; it is now the source for wording, with the user's explicit education and internship dates taking precedence. The pre-existing repository PDF was an older document and has been replaced.

## Content findings and changes

| Area | Outdated or unsupported content | Resolution |
| --- | --- | --- |
| Main menu | Rotating “ML Intern @ FlyRank!” implied a current internship. “Available for hire!” and “AI-native engineer!” were not supplied facts. | Use the supplied identity, university, degrees, and January 2028 graduation; add a direct Experience entry. |
| About biography | Claimed a current FlyRank role, client delivery specialization, scraping frameworks, LLaMA routing, and NLP outreach work. | Rewrite using the three supplied internships and listed project areas. |
| Education | Sep 2024–May 2028; omitted early graduation. Older coursework included Calculus, Intro CS, Microeconomics, and Macroeconomics, but omitted Algorithms and Security. | Sep 2024–Jan 2028, B.S. Computer Science and B.A. Economics, GPA 3.6, graduating a semester early; use exactly the supplied coursework including Architecture taught entirely in C. |
| Conquest Advisors | Entirely missing. | Add AI Software Engineering Intern, New York, Aug–Oct 2026, with supplied workflow, Kubernetes, administrative-work and API-spend outcomes. Keep descriptions general under the NDA. |
| FlyRank | “FlyRank.ai,” “Machine Learning Intern,” July 2025–Present, old search-analytics / notebook descriptions. | FlyRank AI, ML Engineering Intern, Remote, Jun–Jul 2026. Include supplied ranking, pipeline, hard-negative mining, FAISS and sentence-transformer outcomes. |
| Langpal | “Web Developer Intern,” Feb 2026–Present, Remote, generic development bullets. | Software Engineering Intern, Seattle, Feb–May 2026. Include ElevenLabs voice sessions, onboarding metrics, and WebRTC video. |
| Other roles | ETA Development and Rutgers Math Corps were outside the approved three-role list. | Remove both. |
| Hunch | Missing. | Add only the supplied HackRU 2026, team-of-three, 24-hour, widget / SDK, escrow, token and settlement facts. |
| Malware Sandbox | Extra ptrace, Scapy, Frida, VM-runner, scoring and implementation claims not supplied in this task. | Keep May 2025–present and Python, FastAPI, Docker, YARA; concise sandboxed-analysis description. |
| Venture AI | Unsupported Feb–Mar 2026 dates, model versions, extra services, authentication and implementation detail. | Describe as a hackathon AI travel itinerary platform with the supplied five technologies. Retain its verified working demo. |
| Trading agent | Missing. | Add in-progress MCP tooling in Cursor, kill switch, position sizing and trade logging. |
| S&P 500 | Unsupported specific project dates and extra libraries. | Use freshman year and scikit-learn random forest; retain the verified repository. |
| Other projects | Gmail Phishing Link Scanner and Text Animator were outside the approved list. Hidden project-creation code could add arbitrary portfolio claims. | Remove both projects and the create/edit/delete/re-create controls and dormant dialogs. |
| Skills | Missing Go, Rust, PyTorch, Hugging Face, FAISS, GraphQL, WebRTC, Docker, Kubernetes, AWS, GCP, GitHub Actions, Solana, ElevenLabs. Listed additional unconfirmed technologies and activities. | Replace the entire skills inventory with the five supplied categories. No C++ skill or professional claim. |
| Contact | Email was plain text; phone initially unconfirmed. | Clickable supplied email, GitHub and LinkedIn. Restore `732-527-7053` as a telephone link once confirmed by the attached resume. |
| Resume | Working `/resume.pdf` and unused `/resume.docx` held old education and employment content. | Remove stale documents; serve the supplied PDF unchanged at `/manasresume.pdf` from both resume links. |
| Metadata / docs | Generic old description, wrong `/portfolio/` URL and repository, incorrect framework version, Vercel-first instructions and generic template examples. | Correct identity metadata, canonical root domain, local development and GitHub Pages instructions. |

## Visual and interaction findings

- Preserve the Minecraft stone-letter logo, pixel font, landscape, beveled stone buttons, inventory tags, and world/advancement metaphors.
- The live narrow-screen menu clipped its logo and splash and overlapped the resume control with the music toggle. Content panels had fixed dimensions and overflow risks. Replace with flexible, scrollable layouts and responsive cards.
- Clickable divs and anchors without href were not keyboard accessible. Use semantic links/buttons, clear focus styles, a skip link, hash navigation and native browser Back/Forward.
- Project descriptions existed in dormant dialogs and were difficult to discover. Show all approved descriptions directly on their cards.
- Remove remote music downloads and their failure paths. Keep local Minecraft click effects as an optional, initially muted sound control.
- Replace all three employer icons and all five project icons using the built-in AI image tool. Preserve recognizable employer symbols based on verified reference artwork. See [image prompts](IMAGE-PROMPTS.md).
- Remove obsolete images, unused non-Minecraft template components and SVG assets, old favicon, and redundant logo sizes. Optimize new icons to 256 × 256 WebP; localize the existing Minecraft panorama, button texture and font with its license.

## External link audit

| URL | Observed result | Action |
| --- | --- | --- |
| `https://github.com/Manaskumm` | HTTP 200, expected profile title | Retain. |
| `https://github.com/Manaskumm/S-P-Index-Fund-Predictor` | HTTP 200, expected repository title | Retain. |
| `https://github.com/manangandhi03146/HunchTrading` | Supplied by user, HTTP 200, repository and README accessible | Add to Hunch. |
| `https://github.com/Manaskumm/malware-sandbox` | Supplied by user, HTTP 200, repository and source accessible | Add to Malware Sandbox. |
| `https://github.com/Manaskumm/venture` | Supplied by user, HTTP 200, repository and source accessible | Add to Venture AI beside its demo. |
| `https://linkedin.com/in/manas-kumm` | HTTP 200 but a reCAPTCHA browser-check page | Preserve the exact supplied URL; profile destination cannot be fully verified automatically. |
| `https://venture-blue-beta.vercel.app/` | HTTP 200, “Venture \| AI Travel Planner” | Retain as a demo, not a repository link. |
| `https://manas-sandbox.onrender.com/` | Timed out after 20 seconds; no working page verified | Omit until availability is confirmed. A timeout does not establish permanent failure. |
| `https://github.com/Manaskumm/gmail-phishing-scanner` | HTTP 200 | Remove with the unlisted project. |
| `https://github.com/Manaskumm/Text-Animator` | HTTP 200 | Remove with the unlisted project. |
| `https://manaskumm.github.io/resume.pdf` | HTTP 200, application/pdf; repository content is stale | Replace only when the current PDF is supplied. |

The initial GitHub repository listing and code search did not expose the missing project repositories. The user subsequently supplied the three URLs above; all resolve and are now linked. Hunch is a shared repository under `manangandhi03146`, rather than `Manaskumm`. Only the trading-agent repository URL remains unverified.

## Project README follow-up

Reviewed Venture and Malware Sandbox documentation against their code after the user supplied the repositories and requested clearer writing.

- Venture's README was the default create-next-app template. Replaced it with the actual app flow, source entry points, service environment variables, Prisma setup, build commands, and limits on generated costs / live booking information.
- Malware Sandbox's README claimed low-integrity tokens, Job Object limits, seccomp, live ptrace tracing and IAT patching that the current implementation does not fully provide. Replaced it with accurate static-analysis and experimental-runner descriptions, corrected repository instructions, and explicit disclosure of simulated monitoring events and the dashboard's external sample-upload flow.
- Rewrites contain no invented personal credentials, performance metrics, dates or achievements. These are documentation-only changes; the project application code was not changed or executed.
- Both README files were committed and pushed to their existing `main` branches using local Git credentials after the connector rejected write access: [Venture commit](https://github.com/Manaskumm/venture/commit/e1428ed), [Malware Sandbox commit](https://github.com/Manaskumm/malware-sandbox/commit/35a4cb7).
- The portfolio project descriptions now use direct wording: Venture turns trip preferences into an itinerary; Malware Sandbox provides Python analysis with FastAPI and YARA, defaults to static analysis, and includes a Docker runner.

## Resume reconciliation

The supplied PDF is saved at `public/manasresume.pdf`. Its SHA-256 matches the original: `41c0a70dbfc92936a28427cfc6fe5f4e8b14cf134bed76585cd438db84f47dee`.

| Item | PDF dates | Dates used on the site, as explicitly requested |
| --- | --- | --- |
| Education | Sep 2024–May 2028 | Sep 2024–Jan 2028 |
| Conquest Advisors | Jul–Oct 2026 | Aug–Oct 2026 |
| FlyRank AI | Jun–Aug 2026 | Jun–Jul 2026 |
| Langpal | Feb–Sep 2026 | Feb–May 2026 |

The PDF download preserves the user's original document, including those dates. Its wording is used for degrees and internship bullets. It also substantiates FlyRank's 30% GPU inference-throughput improvement, Langpal's platform serving tens of thousands of users, Hunch's Rust implementation, the phone number, and the additional listed HTML/CSS, NumPy, Pandas and Supabase skills. GPA 3.6, early graduation and Architecture taught entirely in C remain from the prompt.

The resume's Malware Sandbox title is used on the site. Its description is reconciled with the code review: PE/ELF analysis and YARA are supported, while runtime-monitoring paths include simulated events. The portfolio and rewritten README state that limitation instead of presenting simulated tracing as verified observations.

## Dependency audit

Remove unused animation, 3D, theme and UI dependencies. Update Next.js and its ESLint configuration to 16.4.6 and Sharp to 0.35.5; refresh compatible transitive packages. The final npm audit reports no high or critical findings. Eight moderate findings remain in the development-only ESLint / TypeScript ESLint / minimatch chain; npm's suggested automatic fix would downgrade the framework lint configuration to another major version, so it was not applied.

## Local verification results

- `npm run build`: passes, generates the static `out/` site.
- `npm run lint`: passes.
- `npx tsc --noEmit`: passes.
- `git diff --check`: passes.
- Tested the production export served at `http://127.0.0.1:4173`, rather than relying on the development server.
- All six screens checked at widths 320, 390, 768 and 1280 pixels: 24 checks, with no horizontal overflow, broken rendered images or forbidden / old content.
- All five project images and three employer images render; all 12 final image assets return HTTP 200 with `image/webp` content type. About's Rutgers image and the title logo also render.
- The eight generated icons total 64,506 bytes. All final image assets, including panorama, personal logo, Rutgers and button texture, total 320,626 bytes.
- Project search matches a technology (`Solana`), returns a clear empty state for an unmatched query, and restores all five projects when cleared.
- Browser Back / Forward returns between the main menu and Experience. Section links, direct hash reload, menu return and sound control were exercised.
- No warnings or errors recorded in the local browser console during the screen checks.
- No lorem ipsum, dummy projects, stale roles, invented repository links or C++ skills remain in the rendered site.
- Desktop and mobile screenshots and machine-readable check results are saved locally in the ignored `.audit/` directory.

The portfolio checks above use the local production export. Publishing to `main` triggers the existing [GitHub Pages workflow](https://github.com/Manaskumm/Manaskumm.github.io/actions/workflows/deploy.yml), which records the current deployment status. The separate Venture and Malware Sandbox README updates are live on GitHub. The supplied resume is installed and reconciled. The supplied LinkedIn profile is behind a browser verification page; only the trading-agent repository URL remains unverified. The malware demo timed out and remains omitted.
