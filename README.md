# Ella M Williams — portfolio

A static Astro portfolio with a UX/UI-led opening and direct UX/UI and graphic design routes. Seven projects, About, a custom 404, an explicit former-project notice and GitHub Pages deployment configuration.

## Run

The build used Codex's bundled Node 24.22.1 and pnpm 11.25.0. These were **not installed globally**. On this Mac, a normal Terminal currently finds Node 17 and cannot find pnpm; the plain commands below require the session setup first.

### On this Mac

Paste this into Terminal. The PATH change applies only to that Terminal session and makes both compatible tools available:

```sh
cd "/Users/omarazam/Documents/ChatGPT/UI Portfolio/site"
export PATH="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH"
pnpm dev
```

Open the Local URL printed by the command. Dependencies are already installed in this local copy, so another install is not needed just to view it. Repeat the `export` in a new Terminal session unless you have separately configured compatible system tools. This does not edit shell startup files or upgrade system Node.

### Fresh checkout or changed dependencies

With a supported Node release meeting `package.json` and pnpm available (or after the session setup above):

```sh
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm check
pnpm build
pnpm preview --port 4321
```

Astro 7 preview may keep its server running after the command returns. Use `pnpm exec astro preview status` or `pnpm exec astro preview stop` to manage it. `ASTRO_TELEMETRY_DISABLED=1` can be set for local commands. The development and preview scripts bind to 127.0.0.1.

## Edit

- `src/data/projects.ts`, `ux-refinements.ts` and `graphic-refinements.ts`: project assembly, copy, classification, meaningful stage labels and selected figures.
- `src/data/profile.ts`: user-confirmed contact and profile destinations.
- `src/layouts/`: shared shell and case-study structure.
- `src/styles/global.css` and `refinements.css`: established system and refinement rules, including both themes and reduced motion.
- `src/scripts/navigation.ts`: case origins, Back/category separation, Work/About location memory and native history returns. `section-navigation.ts` coordinates native anchors/current-section state with measured sticky header and section-bar heights.
- `src/scripts/case-presentation.ts`: sizes UX previews around their descriptions/captions, aligns parallel groups and releases long-section headings as the next section enters view. UX cases share Home's heading-column/gutter grid.
- `src/assets/`: selected publication derivatives; originals live outside this repository.

The site uses semantic HTML, responsive Astro images and two preloaded self-hosted variable fonts. Project pages provide HTML stage links and fit-to-screen enlargement using a native dialog, with viewing the original as a secondary action. Back appears for a known in-site origin; category links remain available for direct entry and without JavaScript. Work/About remembers the current work page and position within the tab/session; the logo and All work links lead Home. The header remains available while scrolling. Theme choice follows the system until manually selected and is saved when storage is available. No analytics, forms or remote font requests are included.

The latest 31 October revision retains matched explanations, images and distinct conclusions, with compact complete previews, section-bound desktop headings and responsive parallel groups. Heading boxes were removed; PocketWise's three control examples use columns on wide screens. The native flow SVG, EMW mark, requested copy and two-colour About stickers are applied. Existing section hashes remain, including aliases for moved content. Private source maps and focused verification are recorded in the parent planning folder.

Font licenses are in `licenses/`. Project imagery retains its own identity; its presence in this local build does not change underlying ownership or establish publication clearance.

Read `AGENTS.md` before edits. Local sessions need the **parent workspace**, whose private planning contains source evidence, design decisions, derivative mappings and QA results. Those folders are deliberately absent from this repository and build.

## GitHub Pages

The deployment workflow is prepared for Ellamwill's main Pages repository, `ellamwill.github.io`, at `https://ellamwill.github.io`. The repository root must contain this website's files from `site/`; keep the parent source/planning folders outside it. Existing internal links use `/`, so a project repository served at `/repo-name/` requires a separate base-path/link migration before deployment.

After GitHub login, create or select that repository, push the website on `main`, and set **Settings → Pages → Source → GitHub Actions**. `.github/workflows/deploy.yml` installs locked dependencies with Node 24 and pnpm 11.25.0, builds `dist/`, then deploys it through the official Pages artifact workflow. Later pushes to `main` update the site. No personal access token is required by the workflow; deployment uses GitHub's temporary token and OIDC permissions.

`astro.config.mjs` defaults to the confirmed public origin and accepts an optional `SITE_URL` override. The workflow supplies the configured Pages origin automatically. Local development needs no override. A `.nojekyll` file is unnecessary for this artifact-based Actions deployment. Account authentication, the chosen repository and a successful workflow deployment must still be completed before calling the site live.
