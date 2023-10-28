<script lang="ts">
  import "iconify-icon";
  export let title: string = "Dashboard";
  import image from "$lib/assets/image.png";
  import { store } from "src/store/store";
  import { onDestroy } from "svelte";

  let darkMode: boolean = false;
  function setTheme() {
    store.update((defaults) => {
      darkMode = !darkMode
      defaults.theme.darkMode = darkMode 
      return defaults;
    });
  }
  const unsubscribe = store.subscribe((defaults) => {
    darkMode = defaults.theme.darkMode;
  });

  onDestroy(unsubscribe);
</script>

<section class="topbar col-span-full bg-white p-4 py-6 rounded-xl max-sm:justify-between flex gap-10 items-center">
  <h1 class="title text-xl font-semibold text-[#445569]">{title}</h1>
  <input
    class="outline-none p-2 max-w-[90rem] max-sm:hidden text-[#445569] border-2 w-full rounded-lg border-[#ebebeb] focus:border-[#b2b4b9] transition-all placeholder:text-[#b3b3b3]"
    type="text"
    placeholder="Search Teachers, Students, Subjects..."
  />
  <iconify-icon icon="ph:bell-simple-bold" class="scale-[1.8] text-[#445569]" />
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <iconify-icon on:click={setTheme} icon={darkMode ? "material-symbols:sunny-outline-rounded" : "tabler:moon-filled"} class="transition-all max-sm:hidden cursor-pointer scale-[1.8] text-[#445569]" />
  <img class="w-10 rounded-full" src={image} alt="user" />
</section>

<style>
  .topbar {
    grid-column: span 1 / span -1;
  }
</style>