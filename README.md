# Bhagwati Hospital website (version 3)

One-page website for Bhagwati Hospital, Chaw Mandi, Roorkee, built with Next.js 16 and
React 19. The design follows the taste skill (MIT licence, see
`public/assets/LICENSE-taste-skill.txt`): its stylesheet, motion and moment scripts live in
`public/assets` and are loaded as plain files.

## Run it on your computer

Needs Node.js 20.9 or newer.

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things are

| File | What it holds |
|---|---|
| `src/app/page.tsx` | All page sections: treatments, doctors, facilities, visit and questions |
| `src/app/layout.tsx` | Menu, footer, phone call bar, colours, fonts, search-engine details |
| `public/assets/` | The taste skill's kit (do not edit these files) |
| `next.config.ts` | Old addresses (`/services`, `/doctors`, `/contact`...) sent to the matching section |

Phone numbers, hours and the address appear in `page.tsx`, `layout.tsx` (menu, footer, phone bar
and the Google structured data). Change every copy when one changes.

## Photos

The site has no photographs yet, because none of the hospital's own were available. Stock
pictures of other hospitals would mislead patients, so none are used. Real photos of the
building, both doctors, the operation theatre, the labour room and a patient room are the
biggest improvement left; each section's layout changes to give them space.

## Deploying

Push to the GitHub repository connected to Vercel. Vercel builds and publishes it.
