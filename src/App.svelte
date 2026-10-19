<script>
  import TopBar from './components/TopBar.svelte';
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import SeasonBanner from './components/SeasonBanner.svelte';
  import Categories from './components/Categories.svelte';
  import Bulk from './components/Bulk.svelte';
  import Events from './components/Events.svelte';
  import Story from './components/Story.svelte';
  import Visit from './components/Visit.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';
  import CallBar from './components/CallBar.svelte';
</script>

<a
  href="#main"
  class="sr-only z-50 rounded-lg bg-paper px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
>
  Skip to content
</a>

<TopBar />
<Header />
<main id="main">
  <Hero />
  <SeasonBanner />
  <Categories />
  <Bulk />
  <Events />
  <Story />
  <Visit />
  <Contact />
</main>
<Footer />
<CallBar />
