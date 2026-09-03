# Portfolio

Bilingual (RU/EN) personal site — **[kulob.github.io/portfolio](https://kulob.github.io/portfolio/)**

React 18 · TypeScript (strict) · Vite · SCSS · react-i18next

## Development

```bash
yarn install
yarn dev        # dev server
yarn typecheck  # tsc --build, no emit
yarn build      # typecheck, then production bundle
yarn preview    # serve the production bundle
```

## Language handling

English is the fallback. On a first visit the language is resolved from
`?lng=`, then `localStorage`, then `navigator.language`; the visitor's choice is
stored under `portfolio.lang`. `?lng=ru` makes a localized link shareable.

Translations live in [`src/i18n/locales`](src/i18n/locales) as TypeScript
objects rather than JSON. `en.ts` is the source of truth: its shape derives the
key union used by `CustomTypeOptions`, so `t('...')` is checked at compile time
and `ru.ts` cannot omit or misspell a key.

## Contact form

The form posts through EmailJS. Its identifiers are publishable client-side
values, not secrets; copy `.env.example` to `.env.local` to point the form at a
different account.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which typechecks, builds and publishes to GitHub Pages. `base` is `/portfolio/`
([`vite.config.ts`](vite.config.ts)).
