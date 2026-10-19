<script>
  import { faPhone, faEnvelope, faLocationDot, faCarSide, faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../lib/Icon.svelte';
  import { business, fullAddress, telHref, mailHref, directionsHref, mapEmbedSrc } from '../lib/site.js';
  import { groupedHours, openStatus } from '../lib/hours.js';

  const rows = groupedHours();
  const today = openStatus().day;
</script>

<section id="visit" class="section bg-forest text-sage">
  <div class="wrap">
    <div class="mb-12 max-w-[640px]">
      <p class="eyebrow text-sun">Plan your visit</p>
      <h2 class="h2 mt-3 text-white">Come see us in West Park</h2>
    </div>

    <div class="grid gap-7 lg:grid-cols-[1fr_1.1fr]">
      <div class="rounded-[26px] bg-forest-2 p-6 sm:p-[34px]">
        <h3 class="text-white">Hours</h3>
        <table class="mt-[18px] mb-1.5 w-full border-collapse">
          <tbody>
            {#each rows as row}
              <tr class={row.days.includes(today) ? 'text-sun' : ''}>
                <th scope="row" class="border-b border-white/10 py-3 text-left font-normal">
                  {row.label}{#if row.days.includes(today)}<span class="sr-only"> (today)</span>{/if}
                </th>
                <td class="border-b border-white/10 py-3 text-right font-semibold {row.days.includes(today) ? '' : 'text-white'}">
                  {row.range}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
        <small class="text-[#a9bda5]">Seasonal hours may change. Call ahead around holidays.</small>

        <ul class="mt-[26px] grid gap-[18px]">
          {#each [
            { href: telHref, icon: faPhone, text: business.phone, sub: 'Call to order or ask a question' },
            { href: mailHref, icon: faEnvelope, text: business.email, sub: "We'll get back to you soon" },
            { href: directionsHref, icon: faLocationDot, text: fullAddress, sub: 'Get directions in Google Maps', external: true }
          ] as row}
            <li>
              <a
                href={row.href}
                class="flex items-center gap-3.5 font-medium break-words text-white no-underline hover:underline"
                target={row.external ? '_blank' : undefined}
                rel={row.external ? 'noopener' : undefined}
              >
                <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white/[.08] text-lg"><Icon icon={row.icon} /></span>
                <span class="min-w-0">{row.text}<small class="block text-[13px] font-normal text-[#a9bda5]">{row.sub}</small></span>
              </a>
            </li>
          {/each}
        </ul>

        <p class="mt-6 flex items-center gap-3.5 rounded-2xl border border-sun/35 bg-sun/12 px-[18px] py-4 text-[15px] text-[#f3e3b8]">
          <Icon icon={faCarSide} class="text-xl" />
          <span><b class="text-white">Call-ahead pickup.</b> Phone in your order and we'll bring it out to your car.</span>
        </p>
      </div>

      <div class="relative min-h-[300px] overflow-hidden rounded-[26px] bg-[#e9e4d6] sm:min-h-[420px]">
        <iframe
          title="Map to {business.name}"
          src={mapEmbedSrc}
          class="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <a class="btn btn-primary absolute right-[18px] bottom-[18px]" href={directionsHref} target="_blank" rel="noopener">
          Get directions <Icon icon={faArrowRight} />
        </a>
      </div>
    </div>
  </div>
</section>
