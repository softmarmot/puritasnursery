<script>
  const timeline = [
    { year: '1925', text: 'Jack Fiorelli Sr. and his brother open Fiorelli Brothers Nursery in West Park.' },
    { year: 'Next gen', text: 'Jack Fiorelli Jr. buys out his uncle and the business becomes Puritas Nursery.' },
    { year: '1985', text: 'His nephew, Dale Heyink, buys the nursery.' },
    { year: '2025', text: '100 years in West Park, honored by Cleveland City Council.' }
  ];
  const values = ['Value', 'Quality', 'Integrity', 'Knowledge', 'Commitment'];
</script>

<section id="story" class="section border-y border-line bg-paper">
  <div class="wrap grid items-start gap-16 lg:grid-cols-2">
    <div>
      <p class="eyebrow">Our story</p>
      <h2 class="h2 mt-3">Same family, same corner, since 1925</h2>
      <p class="mt-[18px] text-lg text-[#3c463e]">
        Puritas started as Fiorelli Brothers Nursery, a family greenhouse on Puritas Avenue. Dale Heyink bought it
        from his uncle in 1985. A century later, we still grow our own flowers and vegetables, and we still know our
        customers by name.
      </p>
      <ul class="mt-[26px] flex flex-wrap gap-2">
        {#each values as v}
          <li class="rounded-full border border-line bg-paper px-3.5 py-[7px] text-sm font-medium">{v}</li>
        {/each}
      </ul>
      <figure class="mt-8 rounded-r-[18px] border-l-4 border-sun bg-cream px-[26px] py-[22px]">
        <!-- TODO: check the exact wording against the resolution text -->
        <blockquote class="font-serif text-[21px] text-forest italic">
          “A greenhouse version of the beloved TV tavern <i>Cheers</i>.”
        </blockquote>
        <figcaption class="mt-2.5 text-sm text-muted">Cleveland City Council, 100th anniversary resolution, 2025</figcaption>
      </figure>
    </div>

    <ol class="relative pl-[30px] before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-0.5 before:bg-line">
      {#each timeline as item, i}
        <li
          class="relative before:absolute before:top-1.5 before:-left-[30px] before:size-4 before:rounded-full before:border-[3px] before:border-leaf before:bg-paper
            {i === timeline.length - 1 ? '' : 'pb-[30px]'}"
        >
          <p class="font-serif text-[26px] leading-none font-semibold text-clay">{item.year}</p>
          <p class="mt-1.5 text-muted">{item.text}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>
