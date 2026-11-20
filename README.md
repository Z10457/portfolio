# Personal website

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

- `app/page.tsx` is the homepage. Edit the `links` and `projects` arrays at the top, and the bio text.
- `app/layout.tsx` wraps every page: font, page title and description.
- `app/globals.css` holds global styles and the light/dark color variables.
- `postcss.config.mjs` hooks Tailwind into the build. Tailwind v4 needs no `tailwind.config` file.

## Build for production

```bash
npm run build
npm run start
```
