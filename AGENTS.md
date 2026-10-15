# P21 website

This is the English public project proposal website for UNNC GRP Team 10.

- Use React for the main site and Vue 3 for the isolated timeline, within one Vite/TypeScript application.
- Team identity must be plain text. Do not add a team crest, badge, shield, seal, or graphical team logo.
- Source content is archived under `reference/bid-materials/`. The latest supplied English bid at `revisions/2026-10-15-latest/bid_P21.tex` is authoritative for website facts and work distribution; preserve the earlier `results/` snapshot unchanged. Internal plans may contain superseded unassigned responsibilities.
- Keep original source materials unchanged. Their AGENTS.md files apply to edits in their own directories.
- Maintain public content and source provenance in `src/data.ts`. Preserve experience type and publication status; never invent results, photos, financial data, or completed project work.
- Use the official project title and factual section headings. Do not add invented slogans, taglines, or promotional copy.
- Do not publish student IDs, raw member files, or the reference directory. Only `public/` assets and imported source assets belong in the production build.
- Stage dates are proposed plans. Do not infer completion from today's date. Preserve the team buffer and tentative course deadlines.
- The user selected synchronization to the latest seven-phase bid during implementation. The archived revision uses dates and workload instead of the superseded 20-week numbering: first demonstrable workflow by 15 December; 6 January–28 February low workload (at most one small asynchronous task per member/week); 1–9 March integration; 10–16 March evaluation; 17–30 March delivery. Freeze on 17 March, verify deployment by 23 March, and rehearse 24–30 March. Do not restore superseded six-phase dates or week counts.
- Run `npm run build` and check desktop/mobile interactions after meaningful changes. Keep architecture and commands in README.md current.

## Structure

- `src/`: React site, Vue timeline, shared content and styles.
- `public/`: public fonts and decorative assets only.
- `reference/bid-materials/`: private local archive of the supplied bid repository, excluding `.git/`.
- `artifacts/`: local visual QA and verification output; not a public web directory.
- `dist/`: generated static deployment output.
