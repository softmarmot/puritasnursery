<script>
  import { faLocationDot, faPhone, faSeedling } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../lib/Icon.svelte';
  import HeroArt from './art/HeroArt.svelte';
  import { business, heroBadge, telHref } from '../lib/site.js';

  const years = new Date().getFullYear() - business.founded;
</script>

<section id="top" class="overflow-hidden bg-forest text-white">
  <div class="wrap grid items-center gap-9 pt-10 pb-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:pt-[72px] lg:pb-[88px]">
    <div>
      <p class="eyebrow text-sun">{business.neighborhood}, Cleveland · Family owned</p>
      <h1 class="mt-4 text-[clamp(40px,5.6vw,68px)] text-white">
        A hundred years of <em class="mr-[.08em] font-medium text-sun italic">growing</em> in West Park.
      </h1>
      <p class="mt-[22px] mb-8 max-w-[34em] text-[17px] text-sage sm:text-[19px]">
        Flowers and vegetables grown right here on site, trees and shrubs, bulk mulch and topsoil, and friendly
        advice from people who have been doing this since {business.founded}.
      </p>
      <div class="flex flex-wrap gap-3">
        <a class="btn btn-primary flex-1 sm:flex-none" href="#visit"><Icon icon={faLocationDot} />Plan your visit</a>
        <a class="btn btn-ghost flex-1 sm:flex-none" href={telHref}><Icon icon={faPhone} />Call to order</a>
      </div>
      <dl class="mt-10 grid grid-cols-3 gap-3.5 border-t border-white/15 pt-7 sm:flex sm:flex-wrap sm:gap-7">
        {#each [
          { k: String(business.founded), v: 'Growing since' },
          { k: 'On site', v: 'Flowers & veggies grown here' },
          { k: String(years), v: 'Years family owned' }
        ] as fact}
          <div class="flex flex-col-reverse text-[12.5px] leading-snug text-[#b9cbb5] sm:text-sm">
            <dt>{fact.v}</dt>
            <dd class="mb-1 font-serif text-[22px] leading-tight font-semibold text-white sm:text-[30px]">{fact.k}</dd>
          </div>
        {/each}
      </dl>
    </div>

    <div class="relative mx-auto w-full max-w-[560px] lg:max-w-none lg:pl-[18px]">
      <div class="aspect-square overflow-hidden rounded-[28px] shadow-[0_30px_60px_-20px_rgba(0,0,0,.5)]">
        <!-- Placeholder illustration: replace with a real photo of the greenhouse -->
        <HeroArt />
      </div>
      <div
        class="absolute bottom-3 left-3 flex items-center gap-3 rounded-[18px] bg-paper px-[18px] py-3.5 text-ink shadow-[0_18px_40px_-12px_rgba(0,0,0,.45)] lg:bottom-7 lg:-left-[18px]"
      >
        <span class="grid size-[42px] place-items-center rounded-xl bg-sage text-xl text-forest">
          <Icon icon={faSeedling} />
        </span>
        <span>
          <b class="block text-[15px]">{heroBadge.title}</b>
          <span class="text-[13px] text-muted">{heroBadge.text}</span>
        </span>
      </div>
    </div>
  </div>
</section>
