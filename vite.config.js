import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { business, jsonLd } from './src/lib/site.js';

// Injects the schema.org LocalBusiness data into the built HTML, so Google
// reads hours, phone and address without running any JavaScript.
const seo = {
  name: 'puritas-seo',
  transformIndexHtml(html) {
    return html
      .replaceAll('%SITE_URL%', business.siteUrl)
      .replace(
        '</head>',
        `<script type="application/ld+json">${JSON.stringify(jsonLd())}</script>\n</head>`
      );
  }
};

export default defineConfig({
  // Relative asset paths work on username.github.io/repo-name/ and on a custom domain.
  base: './',
  plugins: [svelte(), tailwindcss(), seo]
});
