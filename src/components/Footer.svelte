<script>
  import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
  import Icon from '../lib/Icon.svelte';
  import { business, telHref, mailHref, directionsHref } from '../lib/site.js';

  const social = [
    { href: business.social.facebook, icon: faFacebook, label: 'Facebook' },
    { href: business.social.instagram, icon: faInstagram, label: 'Instagram' }
  ].filter((s) => s.href);

  const year = new Date().getFullYear();
</script>

<footer class="bg-forest-3 pt-14 pb-[110px] text-sm text-[#9fb39b] sm:pb-8">
  <div class="wrap">
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <p class="font-serif text-[21px] font-semibold text-white">{business.name}</p>
        <p class="mt-2.5 max-w-[28em]">
          Family owned in West Park, Cleveland since {business.founded}. Value, quality, integrity, knowledge and
          commitment.
        </p>
        {#if social.length}
          <div class="mt-4 flex gap-3 text-xl">
            {#each social as s}
              <a href={s.href} class="hover:text-white" target="_blank" rel="noopener"><Icon icon={s.icon} title={s.label} /></a>
            {/each}
          </div>
        {/if}
      </div>
      {#each [
        { title: 'Shop', links: [['#shop', 'Plants & flowers'], ['#bulk', 'Bulk supplies'], ['#shop', 'Firewood'], ['#shop', 'Gift certificates']] },
        { title: 'Visit', links: [['#visit', 'Hours'], [directionsHref, 'Directions'], ['#events', 'Events'], ['#story', 'Our story']] }
      ] as col}
        <div>
          <h4 class="mb-3.5 text-sm font-semibold tracking-[0.1em] text-white uppercase">{col.title}</h4>
          <ul class="grid gap-2">
            {#each col.links as [href, label]}
              <li><a {href} class="no-underline hover:text-white">{label}</a></li>
            {/each}
          </ul>
        </div>
      {/each}
      <div>
        <h4 class="mb-3.5 text-sm font-semibold tracking-[0.1em] text-white uppercase">Contact</h4>
        <ul class="grid gap-2">
          <li>{business.street}<br />{business.city}, {business.region} {business.zip}</li>
          <li><a href={telHref} class="no-underline hover:text-white">{business.phone}</a></li>
          <li><a href={mailHref} class="no-underline hover:text-white">{business.email}</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-11 flex flex-wrap justify-between gap-4 border-t border-white/[.08] pt-[22px]">
      <span>© {year} {business.name}</span>
      <span>Site by SoftMarmot</span>
    </div>
  </div>
</footer>
