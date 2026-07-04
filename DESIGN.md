# Design decisions

This document records the design decisions behind the current architecture of the
Fietskeuken Gent website, as implemented in the "Recreate website in svelte 5" rebuild
(`3328ac5`). It's written after the fact — as a reference for future maintainers — rather
than as an upfront proposal.

Each decision is recorded as: **Status**, **Context**, **Decision**, **Consequences**.

---

## 1. Framework: SvelteKit with Svelte 5 runes

**Status:** Accepted

**Context:** The site was built on Svelte 3, using slots (`<slot />`) and top-level reactive
statements for component state. Svelte 3 and its ecosystem (e.g. `svelte-preprocess`,
`eslint-plugin-svelte3`) are no longer the actively developed line.

**Decision:** Migrated all components to Svelte 5 runes: `$props()` instead of `export let`,
`$state()` for local mutable state, `$derived()` for computed values, and `{@render children()}`
instead of `<slot />`. See `src/routes/+layout.svelte` and the new components under
`src/lib/components/`. The site keeps `@sveltejs/adapter-static` — it still builds to plain
static files served by Apache (see `README.md`), this change is purely about the component
model, not deployment.

**Consequences:** Component code is more explicit about what's reactive vs. plain. Any future
component work must use runes, not the Svelte 3/4 API — mixing the two isn't supported.

---

## 2. Styling: Tailwind v4 with CSS-first configuration

**Status:** Accepted

**Context:** Styling previously went through a PostCSS pipeline (`postcss.config.cjs` +
`tailwind.config.cjs` + `svelte-preprocess`), with theme customization (colors, fonts) defined
in a separate JS config file.

**Decision:** Adopted Tailwind v4 via the `@tailwindcss/vite` plugin (`vite.config.js`),
removing the PostCSS step entirely. Theme tokens (color palette, `Atkinson` font family and its
`@font-face` declarations) now live directly in `src/app.css` under an `@theme` block, replacing
`tailwind.config.cjs`.

**Consequences:** One fewer config file and build step. Theme values live next to the CSS that
consumes them, but anyone used to Tailwind's JS-based config needs to know v4 moved to a
CSS-native approach.

---

## 3. Linting: ESLint flat config

**Status:** Accepted

**Context:** Linting used the legacy `.eslintrc.cjs` format with `eslint-plugin-svelte3`, which
is superseded upstream in favor of ESLint's flat config and `eslint-plugin-svelte`.

**Decision:** Replaced `.eslintrc.cjs`/`.eslintignore` with `eslint.config.js`, using
`eslint-plugin-svelte`'s recommended rules. Two rules are explicitly disabled, with rationale
recorded inline in the config:
- `svelte/no-at-html-tags` — off, because `{@html}` usage (news paragraphs, the `LocalBusiness`
  JSON-LD block) only ever renders maintainer-authored content in `src/lib/data/news.js` and
  `src/routes/+page.svelte`, never user input.
- `svelte/no-navigation-without-resolve` — off, because the whole site is static and
  prerendered; there's no client-side router state for `resolve()` to reconcile.

**Consequences:** Anyone adding a new `{@html}` usage should confirm the same trusted-content
invariant holds, since the rule that would normally catch this is intentionally off.

---

## 4. Content as data: `src/lib/data/news.js`

**Status:** Accepted

**Context:** News announcements were previously hand-written as markup directly inside the
homepage route, mixing content edits with template code.

**Decision:** News items are now a plain array of objects in `src/lib/data/news.js`, each with
`slug`, `date`, `location`, `title`, `paragraphs`, and optional `list`/`image` fields. They're
rendered generically by `src/lib/components/NewsItem.svelte`. The data file carries a comment
recording that its (trusted) HTML fragments are hand-authored only, never user-supplied — the
same invariant referenced in the ESLint config above.

**Consequences:** Adding a news item is a data-only change — no component/template edits
needed. The trusted-content invariant must hold for every future entry.

---

## 5. Component decomposition

**Status:** Accepted

**Context:** `src/routes/+page.svelte` previously duplicated near-identical markup (~300 lines)
for the two bike-kitchen locations, including two large inline SVG icons.

**Decision:** Extracted `LocationCard.svelte` (card layout, takes `variant`/`name` props and
children) and `LocationIcon.svelte` (variant-driven SVG icon), plus `SectionHeading.svelte` for
the repeated section-title styling. `+page.svelte` shrank to roughly a third of its previous
size.

**Consequences:** Adding a third location or another heading-styled section reuses these
components instead of copy-pasting markup.

---

## 6. SEO and structured data

**Status:** Accepted

**Context:** Page metadata (title, description, Open Graph tags) was previously set once in the
shared `+layout.svelte`, so every route shared the same title/description. There was no sitemap
and no structured data for search engines.

**Decision:** Moved `<svelte:head>` metadata into each route's own `+page.svelte` (see
`src/routes/+page.svelte`, `about/+page.svelte`, `contact/+page.svelte`, `privacy/+page.svelte`),
keeping only route-independent tags (favicon, `og:type`, `og:locale`, `og:site_name`, the
GoatCounter analytics snippet) in the layout. Added a prerendered sitemap endpoint
(`src/routes/sitemap.xml/+server.js`) and inline `LocalBusiness` JSON-LD per location on the
homepage.

**Consequences:** Each page now controls its own title/description/canonical URL — a
prerequisite for meaningful search results per page. The JSON-LD opening hours in
`+page.svelte` are a separate, hand-maintained copy of the hours shown in the `LocationCard`
content on the same page; the two must be kept in sync manually (recorded in a comment at the
`localBusinessJsonLd` definition) — there's no single source of truth for opening hours yet.

---

## 7. Accessibility

**Status:** Accepted

**Context:** Decorative SVG icons had no `aria-hidden`, the mobile nav toggle had no
`aria-expanded` state, and several `aria-label`s were in English on an otherwise Dutch-language
site.

**Decision:** Decorative SVGs (menu icon, location icons, social icons) are marked
`aria-hidden="true" focusable="false"`. The mobile menu toggle button now exposes
`aria-expanded={showMobileMenu}`. Navigation/header `aria-label`s were translated to Dutch
(e.g. "Hoofdnavigatie", "Menu, in-/uitklappen") to match the page's `lang` and reduce confusion
for Dutch-speaking screen reader users.

**Consequences:** Any new icon or toggle control added to the site should follow the same
pattern (hide decorative SVGs from assistive tech, expose expanded/collapsed state, keep labels
in Dutch).

---

## 8. Testing strategy

**Status:** Accepted

**Context:** The project had a single Vitest unit test and no end-to-end coverage of actual
rendered pages.

**Decision:** Added Playwright smoke tests (`tests/smoke.spec.js`, run via `npm test`) covering:
the homepage's nav/hero/where/news sections render, the mobile menu toggles, and the about/
contact/privacy pages load with the correct `h1`. Vitest (`npm run test:unit`) remains for unit
tests.

**Consequences:** Playwright smoke tests give a fast signal that the main routes still render
and the mobile nav still works after a change, without needing full page-by-page coverage.

---

## 9. Dependency baseline

**Status:** Accepted

**Context:** The toolchain had drifted behind current major versions across the board.

**Decision:** Bumped the full toolchain to current majors in one pass: SvelteKit 1 → 2,
`adapter-static` 1 → 3, Svelte 3 → 5, Vite 4 → 8, ESLint 8 → 9, Prettier 2 → 3, Playwright and
Vitest to their current majors. See `package.json` for the exact pinned versions.

**Consequences:** All tooling is on a current, actively-maintained major version. Because this
was done as one combined bump rather than incrementally, individual breaking changes aren't
separately documented — this file and the diff of `3328ac5` are the record of what changed.
