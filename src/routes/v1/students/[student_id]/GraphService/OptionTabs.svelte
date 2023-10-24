<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { store } from "src/store/store";
  const dispatch = createEventDispatcher();
  export let index: number = 0;
  function handleSelect(e: any) {
    const selectedIndex = e.target.getAttribute("data-index");

    index = Number(selectedIndex);
    dispatch("currentIndex", { index });
  }

  let darkMode: boolean = false;
  store.subscribe((defaults) => {
    darkMode = defaults.theme.darkMode;
  });
</script>

<section
  class:darkMode
  class="flex justify-between text-[#445569] bg-gray-200 border-b-2 border-gray-200 absolute left-0 right-0 top-0 z-[9999] rounded-tl-xl rounded-tr-xl"
>
  <button data-index={0} class="transition-all w-full py-3 rounded-tl-xl" on:click={handleSelect} class:index={index === 0}>Attendance</button>
  <button data-index={1} class="transition-all w-full" on:click={handleSelect} class:index={index === 1}>Performance</button>
  <button data-index={2} class="transition-all w-full" on:click={handleSelect} class:index={index === 2}>Scores</button>
  <button data-index={3} class="transition-all w-full rounded-tr-xl" on:click={handleSelect} class:index={index === 3}>Fees</button>
</section>

<style>
  .index {
    background-color: white;
  }

  /* .darkMode {
  }
  .darkMode button {
    background-color: #101519;
  } */
</style>
