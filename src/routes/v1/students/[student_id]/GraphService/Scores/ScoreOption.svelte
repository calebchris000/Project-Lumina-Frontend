<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let index: number = 0;
  function handleSelect(e) {
    const selectedIndex = e.target.getAttribute("data-index");
    index = Number(selectedIndex);
    dispatch("currentIndex", { index });
  }
</script>

<section class="flex gap-3 text-[#445569]">
  <button data-index={0} class="border border-[#445569] px-3 rounded-lg" on:click={handleSelect} class:index={index === 0}>School</button>
  <button data-index={1} class="border border-[#445569] px-3 rounded-lg" on:click={handleSelect} class:index={index === 1}>Class</button>
</section>

<style>
  .index {
    background-color: #445569;
    color: white;
  }
</style>
