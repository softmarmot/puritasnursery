<script>
  // Renders a Font Awesome icon definition as inline SVG.
  // Only the icons that are imported end up in the bundle.
  let { icon, class: className = '', title = '' } = $props();
  let [width, height, , , path] = $derived(icon.icon);
</script>

<svg
  class="inline-block h-[1em] w-auto shrink-0 fill-current {className}"
  viewBox="0 0 {width} {height}"
  role={title ? 'img' : undefined}
  aria-hidden={title ? undefined : 'true'}
  aria-label={title || undefined}
>
  {#if Array.isArray(path)}
    {#each path as d}<path {d} />{/each}
  {:else}
    <path d={path} />
  {/if}
</svg>
