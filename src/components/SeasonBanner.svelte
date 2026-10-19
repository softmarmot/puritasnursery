<script>
  import { faTrain, faLeaf, faSeedling, faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../lib/Icon.svelte';
  import { seasonal } from '../lib/site.js';

  const icons = { train: faTrain, leaf: faLeaf, seedling: faSeedling };
</script>

<div class="bg-sun text-forest">
  <p class="wrap flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 py-3.5 text-center text-[15.5px] font-semibold">
    <Icon icon={icons[seasonal.icon] ?? faLeaf} />
    {seasonal.text}
    <a href={seasonal.link.href} class="inline-flex items-center gap-1.5 font-bold">
      {seasonal.link.label}<Icon icon={faArrowRight} class="text-sm" />
    </a>
  </p>
</div>
