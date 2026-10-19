<script>
  import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../lib/Icon.svelte';
  import { business, telHref } from '../lib/site.js';

  let name = $state('');
  let contact = $state('');
  let message = $state('');
  let status = $state('idle'); // idle | sending | sent | error

  async function submit(event) {
    event.preventDefault();
    if (!business.formEndpoint) {
      const body = `${message}\n\n${name}\n${contact}`;
      location.href = `mailto:${business.email}?subject=${encodeURIComponent('Question from the website')}&body=${encodeURIComponent(body)}`;
      return;
    }
    status = 'sending';
    try {
      const res = await fetch(business.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message })
      });
      status = res.ok ? 'sent' : 'error';
    } catch {
      status = 'error';
    }
  }

  const field =
    'mt-1.5 w-full rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none';
</script>

<section id="contact" class="py-16 sm:py-20">
  <div class="wrap">
    <div class="grid gap-8 rounded-[30px] bg-clay p-6 text-white sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <div>
        <h2 class="text-[clamp(26px,3.4vw,36px)] text-white">Looking for something specific?</h2>
        <p class="mt-2 text-[#fde3d6]">Give us a call or send a note. If we don't have it, we'll tell you who does.</p>
        <a class="btn mt-6 bg-white text-clay-dk hover:bg-cream" href={telHref}><Icon icon={faPhone} />{business.phone}</a>
      </div>

      {#if status === 'sent'}
        <p class="rounded-2xl bg-white/15 p-6 text-lg font-semibold" role="status">Thanks! We'll get back to you soon.</p>
      {:else}
        <form class="grid gap-4" onsubmit={submit}>
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="text-sm font-semibold">Name<input class={field} bind:value={name} required autocomplete="name" /></label>
            <label class="text-sm font-semibold"
              >Phone or email<input class={field} bind:value={contact} required autocomplete="email" /></label
            >
          </div>
          <label class="text-sm font-semibold"
            >Message<textarea class="{field} min-h-28" bind:value={message} required></textarea></label
          >
          <button class="btn justify-self-start bg-forest text-white hover:bg-forest-2" disabled={status === 'sending'}>
            <Icon icon={faPaperPlane} />{status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {#if status === 'error'}
            <p class="text-sm" role="alert">Something went wrong. Please call us at {business.phone}.</p>
          {/if}
        </form>
      {/if}
    </div>
  </div>
</section>
