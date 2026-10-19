<script>
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../lib/Icon.svelte';
  import TrainArt from './art/TrainArt.svelte';
  import { telHref } from '../lib/site.js';
</script>

<section id="events" class="section">
  <div class="wrap">
    <div class="mb-12 max-w-[640px]">
      <p class="eyebrow">Events &amp; community</p>
      <h2 class="h2 mt-3">A West Park tradition</h2>
      <p class="mt-3.5 text-lg text-muted">
        For a lot of families, a visit to Puritas is part of the holidays. Come see what's on this season.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <!-- On phones the art sits above the text so the two never overlap. -->
      <article class="relative isolate flex flex-col overflow-hidden rounded-[26px] bg-[#1b3326] text-white lg:row-span-2 lg:min-h-[540px] lg:justify-end">
        <div class="h-56 sm:h-72 lg:absolute lg:inset-0 lg:-z-10 lg:h-auto">
          <TrainArt />
        </div>
        <div class="absolute inset-0 -z-10 hidden bg-gradient-to-b from-transparent from-30% to-[rgba(10,22,15,.85)] lg:block"></div>
        <div class="p-6 sm:p-[30px]">
          <!-- TODO: confirm the dates with Dale -->
          <p class="text-[13px] font-semibold tracking-[0.12em] text-sun uppercase">November – December</p>
          <h3 class="my-2 text-[28px] text-white">Holiday Train Display</h3>
          <p class="max-w-[30em] text-white/85">
            Our annual model train display is a family favorite. Bring the kids, see the trains, and pick out your
            wreaths and poinsettias while you're here.
          </p>
        </div>
      </article>

      <article class="relative isolate flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[26px] bg-clay-dk p-6 text-white sm:p-[30px]">
        <div class="absolute -top-2 -right-4 -z-10 size-36 rounded-full bg-sun/35"></div>
        <div class="absolute top-4 left-8 -z-10 size-16 rounded-full bg-sun/35"></div>
        <p class="text-[13px] font-semibold tracking-[0.12em] text-sun uppercase">Holiday season</p>
        <h3 class="my-2 text-[28px] text-white">Tour of Good Cheer &amp; WPKND</h3>
        <p class="max-w-[30em] text-white/85">We're a proud stop on the Tour of Good Cheer and WPKND Holiday Cheer.</p>
      </article>

      <article class="relative isolate flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[26px] bg-forest-2 p-6 text-white sm:p-[30px]">
        <div class="absolute -top-6 -right-6 -z-10 size-40 rounded-full bg-sage/20"></div>
        <p class="text-[13px] font-semibold tracking-[0.12em] text-sun uppercase">Year round</p>
        <h3 class="my-2 text-[28px] text-white">Host your event here</h3>
        <p class="max-w-[30em] text-white/85">
          Private events in the greenhouse and showroom.
          <a href={telHref} class="inline-flex items-center gap-1.5 font-semibold text-white"
            >Call to book <Icon icon={faArrowRight} class="text-sm" /></a
          >
        </p>
      </article>
    </div>
  </div>
</section>
