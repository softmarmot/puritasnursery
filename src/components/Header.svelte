<script>
  import { faBars, faXmark, faPhone, faSeedling } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../lib/Icon.svelte';
  import { business, telHref } from '../lib/site.js';

  const links = [
    { href: '#shop', label: 'What we grow' },
    { href: '#bulk', label: 'Bulk & delivery' },
    { href: '#events', label: 'Events' },
    { href: '#story', label: 'Our story' },
    { href: '#visit', label: 'Visit' }
  ];

  let open = $state(false);
  const close = () => (open = false);
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && close()} />

<header class="sticky top-0 z-20 border-b border-line bg-cream/95 backdrop-blur-md">
  <div class="wrap flex h-[66px] items-center justify-between gap-5 lg:h-[76px]">
    <a href="#top" class="flex items-center gap-3 no-underline" onclick={close}>
      <span class="grid size-[38px] place-items-center rounded-xl bg-forest text-xl text-sun lg:size-11">
        <Icon icon={faSeedling} />
      </span>
      <span class="leading-none">
        <span class="block font-serif text-lg font-semibold text-forest lg:text-[21px]">{business.shortName}</span>
        <span class="mt-1 block text-[10.5px] font-semibold tracking-[0.12em] text-muted uppercase lg:text-xs">
          Garden Center · Since {business.founded}
        </span>
      </span>
    </a>

    <nav class="hidden gap-7 text-[15px] font-medium lg:flex" aria-label="Main">
      {#each links as link}
        <a href={link.href} class="text-ink/85 no-underline hover:text-clay">{link.label}</a>
      {/each}
    </nav>

    <div class="flex items-center gap-2.5">
      <a href={telHref} class="btn btn-dark hidden px-[18px] py-[11px] text-[15px] sm:inline-flex">
        <Icon icon={faPhone} />{business.phone}
      </a>
      <button
        type="button"
        class="grid size-11 place-items-center rounded-[10px] border border-line bg-paper text-xl text-forest lg:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onclick={() => (open = !open)}
      >
        <Icon icon={open ? faXmark : faBars} />
      </button>
    </div>
  </div>

  {#if open}
    <nav id="mobile-menu" class="border-t border-line bg-cream lg:hidden" aria-label="Main">
      <ul class="wrap grid py-2">
        {#each links as link}
          <li class="border-b border-line last:border-0">
            <a
              href={link.href}
              class="block py-3.5 text-lg font-medium text-forest no-underline"
              onclick={close}>{link.label}</a
            >
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</header>
