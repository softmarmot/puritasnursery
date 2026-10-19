<script>
  import { onMount } from 'svelte';
  import { business, telHref } from '../lib/site.js';
  import { openStatus } from '../lib/hours.js';

  let status = $state(openStatus());

  onMount(() => {
    const timer = setInterval(() => (status = openStatus()), 60_000);
    return () => clearInterval(timer);
  });
</script>

<div class="bg-forest text-sm text-sage">
  <div class="wrap flex justify-center gap-4 py-2 sm:justify-between">
    <span class="flex items-center gap-2">
      <span
        class="inline-block size-2 rounded-full {status.open
          ? 'bg-[#7bd389] shadow-[0_0_0_3px_rgba(123,211,137,.25)]'
          : 'bg-[#e5866a] shadow-[0_0_0_3px_rgba(229,134,106,.25)]'}"
      ></span>
      <b class="font-semibold text-white">{status.label}</b>
    </span>
    <span class="hidden sm:inline">
      {business.street}, {business.city} ·
      <a href={telHref} class="font-semibold text-white no-underline hover:underline">{business.phone}</a>
    </span>
  </div>
</div>
