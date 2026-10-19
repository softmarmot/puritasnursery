# Puritas Nursery & Garden Center website

One-page site for Puritas Nursery & Garden Center, West Park, Cleveland.
Built with Svelte 5, Vite, Tailwind CSS 4 and Font Awesome 7 (free icons, imported one by one so only the used icons ship).

## Run it

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
npm run preview  # serve dist/ locally
```

Node 20 or newer.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository, on the `main` branch.
2. In the repository go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Every push to `main` builds and publishes the site (`.github/workflows/deploy.yml`). You can also run it by hand from the Actions tab.

The build uses relative paths (`base: './'` in `vite.config.js`), so it works both at `https://<user>.github.io/<repo>/` and on a custom domain.

### Custom domain (puritasnursery.com)

1. Add a file `public/CNAME` containing `puritasnursery.com` (or `www.puritasnursery.com`).
2. At the domain registrar, point DNS at GitHub Pages: four `A` records for the apex to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` for `www` to `<user>.github.io`.
3. In **Settings → Pages**, enter the domain and tick **Enforce HTTPS** once the certificate is issued.

`business.siteUrl` in `src/lib/site.js` is used for the canonical link, social previews and Google data; keep it equal to the live address.

## Editing content

- **Hours, phone, email, address, links:** `src/lib/site.js`. The top bar ("Open now until 7 pm"), the hours table, the map, every call and directions button, and the schema.org data Google reads are all generated from it.
- **Seasonal banner and hero badge:** `seasonal` and `heroBadge` in `src/lib/site.js`.
- **Sections:** one component each in `src/components/` (Hero, Categories, Bulk, Events, Story, Visit, Contact, Footer).
- **Colors and fonts:** the `@theme` block in `src/app.css`.
- **Icons:** import from `@fortawesome/free-solid-svg-icons` (or `free-brands-svg-icons`) and render with `<Icon icon={faSomething} />`.

## Contact form

GitHub Pages can't receive form posts, so the form sends to a form service.
Create a free form at [Formspree](https://formspree.io) (or similar), forwarding to the nursery's email, and put its endpoint in `business.formEndpoint`.
Until then, the form opens the visitor's email app with the message filled in.

## Before launch

- [ ] Confirm current hours with Dale (these are the old "Summer Hours").
- [ ] Replace the illustrations (`src/components/art/`) with real photos of the greenhouse and the train display. Put images in `src/assets/` and import them so Vite optimizes the paths.
- [ ] Confirm the Holiday Train Display dates (currently "November – December").
- [ ] Check the Cheers quote wording against the City Council resolution.
- [ ] Add the Facebook/Instagram links in `business.social` if they exist.
- [ ] Set up `business.formEndpoint`.
- [ ] Replace `public/og-image.png` (link preview image) with a real photo, 1200 × 630.
- [ ] Claim or update the Google Business Profile with the same hours, so search results match the site.
