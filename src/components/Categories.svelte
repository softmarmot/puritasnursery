<script>
  import {
    faSeedling,
    faTree,
    faBucket,
    faSprayCanSparkles,
    faWater,
    faGift,
    faFire,
    faTicket
  } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../lib/Icon.svelte';

  const categories = [
    {
      icon: faSeedling,
      title: 'Flowers & vegetables',
      text: 'Annuals, herbs and vegetable starts grown right here in our own greenhouses.',
      tag: 'Grown on site',
      feature: true
    },
    { icon: faTree, title: 'Trees, shrubs & perennials', text: 'Hardy picks for Northeast Ohio yards, and advice on where to plant them.' },
    { icon: faBucket, title: 'Pots & hanging baskets', text: 'Decorative pots, planters and ready-made hanging baskets.' },
    { icon: faSprayCanSparkles, title: 'Lawn & garden care', text: 'Seeds, potting soil, grass seed, natural pest control and deer repellent.' },
    { icon: faWater, title: 'Landscaping & water features', text: 'Plants, stone and pond supplies to finish a project the right way.' },
    { icon: faGift, title: 'Gifts & fairy gardens', text: 'Wind chimes, flags, fairy garden pieces and local history books.' },
    { icon: faFire, title: 'Seasoned firewood', text: 'Ready to burn, with delivery available.', tag: 'Delivery' },
    { icon: faTicket, title: 'Gift certificates', text: 'The easy gift for every gardener on your list.' }
  ];
</script>

<section id="shop" class="section">
  <div class="wrap">
    <div class="mb-12 max-w-[640px]">
      <p class="eyebrow">What we grow &amp; carry</p>
      <h2 class="h2 mt-3">Everything for the garden, under one roof</h2>
      <p class="mt-3.5 text-lg text-muted">
        Walk the greenhouses and showroom, or call ahead and we'll have your order ready when you pull up.
      </p>
    </div>

    <ul class="grid gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {#each categories as c}
        <li
          class="grid grid-cols-[56px_1fr] gap-x-4 rounded-[22px] border p-5 transition hover:-translate-y-[3px] hover:shadow-[0_20px_40px_-24px_rgba(31,61,43,.45)] sm:block sm:p-[26px]
            {c.feature ? 'border-forest bg-forest text-[#c3d3be]' : 'border-line bg-paper text-muted'}"
        >
          <span
            class="row-span-3 grid size-14 place-items-center rounded-2xl text-[26px] sm:mb-[18px]
              {c.feature ? 'bg-white/10 text-sun' : 'bg-sage-2 text-forest-2'}"
          >
            <Icon icon={c.icon} />
          </span>
          <h3 class="mb-2 text-xl {c.feature ? 'text-white' : ''}">{c.title}</h3>
          <p class="text-[15px]">{c.text}</p>
          {#if c.tag}
            <span
              class="mt-3.5 inline-block justify-self-start rounded-full px-2.5 py-1 text-xs font-semibold text-forest
                {c.feature ? 'bg-sun' : 'bg-sage'}">{c.tag}</span
            >
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>
