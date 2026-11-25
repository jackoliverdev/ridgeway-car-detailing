# Ridgeway Car Detailing

The website for Ridgeway Car Detailing (ridgewaycardetailing.co.uk), a Ridgeway company in Harlow: our fictional
car valeting and detailing firm for Centrus CRM demos. Built from the Ridgeway FM site, with its own colours, logo,
photos and words.

- Every word is in `src/content/` (`site.ts`, `services.ts`, `team.ts`).
- Colours are in `src/app/globals.css` (`--color-ridgeway*`).
- Booking is on our own site: the form sits on `/book`, and every "Book online" button opens it over the page (Centrus CRM's embed script, loaded in `src/app/layout.tsx`). How it looks and what it says are set in Centrus CRM (Booking portal > On your website). Gift vouchers go to Ridgeway Car Detailing's gift page in Centrus CRM.

```bash
npm install
npm run dev
```
