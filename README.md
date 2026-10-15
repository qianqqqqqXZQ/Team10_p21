# UNNC GRP Team 10 · P21

An English project proposal website for **AI-Driven Post-Investment Quarterly Report Analysis for Private Equity Portfolios**. The cream-and-gold visual design references [Sav Gold](https://sav.money/gold), with original CSS/SVG decorations and plain-text team identity. There is no team crest or logo.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://127.0.0.1:5173`).

```sh
npm run typecheck
npm run build
npm run preview
```

`build` checks both TypeScript and Vue before generating `dist/`. Deploy **only the contents of `dist/`** to a static host. Relative build URLs support deployment under a subdirectory. No backend, API keys, runtime font service, or environment variables are required. This site describes a proposed analysis system; it does not process investment reports.

On Vercel, import `qianqqqqqXZQ/Team10_p21` with production branch `main`, framework preset **Vite**, and the repository root as the root directory. `vercel.json` fixes the production build command to `npm run build` and the output directory to `dist`. `npm run dev` starts a persistent local development server and must never be used as the production build command. Pushing to `main` triggers a production deployment. `.vercelignore` excludes the private archive and local QA files from CLI source uploads; `.vercel/` contains local deployment metadata and is excluded from Git.

## Architecture and editing

- `src/App.tsx`: React page, responsive navigation, proposal accordions, and native accessible member dialogs.
- `src/data.ts`: typed public copy, members, experiences, proposed responsibilities, phases, milestones, and source provenance. Edit content here; verify it against the authoritative English bid. Student IDs are intentionally excluded.
- `src/Timeline.vue`: Vue 3 phase selector, keyboard-operable tabs, monthly calendar, and course milestones.
- `src/TimelineBridge.tsx`: React effect mounts one Vue application and unmounts it during cleanup. Shared data is passed as props; React and Vue never own the same child DOM.
- `src/styles.css`: shared design tokens, responsive layout, timeline styles, and reduced-motion support.
- `public/`: local fonts, SIL Open Font Licenses, and the decorative contour SVG. There are no remote runtime assets.
- `reference/bid-materials/`: unmodified local archive of the supplied repository, excluding `.git/`. Contains all three bid options for reference, while the website covers P21 only.
- `artifacts/`: local QA screenshots and verification results, excluded from the production output and Git by default.

Typography uses the bundled DM Sans for body copy, member names, and profile subheadings; Barlow Condensed remains the display face and Cormorant Garamond supplies italic accents. Shared reading tokens in `src/styles.css` set body copy to `0.9375rem` (15px at the default browser size), secondary copy to `0.8125rem`, and body line-height to 1.75. These sizes stay consistent on mobile; workflow cards stack into one column for comfortable line lengths.

The English `reference/bid-materials/results/bid_P21.tex`, dated 15 October 2026, is authoritative for profile facts and work distribution. `project_plan_P21.md` provides planning context; its unassigned internal roles do not override the formal bid. Keep internship, project, and research experience separate. Preserve submitted/accepted/research-in-progress statuses. Missing personal details should be omitted, never invented.

All phases describe **planned** work. The seven-phase schedule follows the latest archived bid, as explicitly selected by the user during implementation. That revision organises work by date ranges and workload rather than the superseded 20-week numbering: requirements (21 October–3 November), parsing (4–24 November), first report and rule pilots (25 November–15 December), light review/documentation (6 January–28 February), integration (1–9 March), evaluation (10–16 March), and delivery (17–30 March). Preserve the 16 December–5 January team buffer and 31 March–1 April submission checks. During the light period, each member has at most one small asynchronous task per week, adjusted to availability, with no critical integration, required training, or participant trials. Target the first demonstrable workflow for 15 December, resume concentrated integration on 1 March, freeze on 17 March, verify deployment by 23 March, and rehearse during 24–30 March. Course milestones and university holidays remain subject to formal notices. No automatic completion indicators are used. Source files are a local snapshot; editing the external source directory does not automatically rebuild this website.

## Accessibility and verification

The site includes semantic landmarks, a skip link, visible keyboard focus, accessible names, native disclosure controls, reduced-motion support, and native modal dialogs with Escape handling and focus restoration. The Vue tabs support Left/Right, Home, and End. The monthly table scrolls within its own container on small screens.

Before delivery, run `npm run build`, verify desktop/tablet/mobile overflow and all seven profiles, exercise the navigation and timeline, and check the final `dist/` for raw source materials or student IDs. Never deploy the repository root or `reference/` folder. The Vite development server also denies direct access to the reference archive.

## Font attribution

DM Sans, Barlow Condensed, and Cormorant Garamond are bundled locally from Google Fonts and distributed under the SIL Open Font License. Their individual license files are in `public/fonts/` and included in `dist/fonts/`.
