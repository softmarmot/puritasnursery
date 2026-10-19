<script>
  import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../lib/Icon.svelte';
  import { telHref, directionsHref } from '../lib/site.js';
</script>

<!-- Pinned to the bottom of the screen on phones only. -->
<div
  class="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2.5 border-t border-line bg-cream/97 px-3.5 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden"
>
  <a class="btn btn-dark px-2.5 py-[13px]" href={telHref}><Icon icon={faPhone} />Call</a>
  <a class="btn btn-primary px-2.5 py-[13px]" href={directionsHref} target="_blank" rel="noopener"
    ><Icon icon={faLocationDot} />Directions</a
  >
</div>
