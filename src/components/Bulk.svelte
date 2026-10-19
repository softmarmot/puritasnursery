<script>
  import { faCircleCheck, faTruck } from '@fortawesome/free-solid-svg-icons';
  import Icon from '../lib/Icon.svelte';
  import { telHref } from '../lib/site.js';

  const perks = ['Loaded for you at the yard', 'Call-ahead orders ready when you arrive', 'Friendly advice on how much you need'];

  const items = [
    { name: 'Mulch', note: 'For beds, borders and trees', chip: 'Bulk' },
    { name: 'Topsoil', note: 'Screened, for beds and lawns', chip: 'Bulk' },
    { name: 'Sweet Peet', note: 'Organic mulch and soil builder', chip: 'Bulk' },
    { name: 'Gravel', note: 'For paths, drainage and edging', chip: 'Bulk' },
    { name: 'Grass seed & straw', note: 'Everything to patch the lawn', chip: 'In store' },
    { name: 'Firewood', note: 'Seasoned and ready to burn', chip: 'Delivery' }
  ];
</script>

<section id="bulk" class="section bg-sage-2">
  <div class="wrap grid items-center gap-14 lg:grid-cols-2">
    <div>
      <p class="eyebrow">Bulk landscape supplies</p>
      <h2 class="h2 mt-3">Mulch, topsoil &amp; more, by the scoop</h2>
      <p class="mt-3.5 text-lg text-muted">Bring your truck and we'll load it, or call and we'll arrange delivery.</p>
      <ul class="mt-[26px] mb-[30px] grid gap-3">
        {#each perks as perk}
          <li class="flex items-start gap-3">
            <Icon icon={faCircleCheck} class="mt-1 text-leaf" />{perk}
          </li>
        {/each}
      </ul>
      <a class="btn btn-dark" href={telHref}><Icon icon={faTruck} />Call for bulk orders</a>
    </div>

    <ul class="rounded-3xl border border-line bg-paper px-[18px] py-1 sm:px-7 sm:py-2.5">
      {#each items as item}
        <li class="flex items-center justify-between gap-4 border-b border-dashed border-line py-4 last:border-0">
          <span>
            <b class="font-semibold">{item.name}</b>
            <small class="block text-sm text-muted">{item.note}</small>
          </span>
          <span class="rounded-full bg-sage-2 px-[11px] py-[5px] text-[13px] font-semibold whitespace-nowrap text-leaf"
            >{item.chip}</span
          >
        </li>
      {/each}
    </ul>
  </div>
</section>
