<script lang="ts">
  let selected: string = "Week";

  function handleSelect(value: string) {
    selected = value;
  }
</script>

<section class="flex gap-5 border-b text-[#bebebe] font-medium">
  <button on:click={() => handleSelect("Week")} class:selected={selected === "Week"} class="border-b-2   m-0 pb-1 transition-all text-xs border-transparent">Week</button>
  <button on:click={() => handleSelect("Month")} class:selected={selected === "Month"} class="border-b-2 m-0 pb-1 transition-all text-xs border-transparent">Month</button>
  <button on:click={() => handleSelect("Year")} class:selected={selected === "Year"} class="border-b-2   m-0 pb-1 transition-all text-xs border-transparent">Year</button>
</section>

<style>
  .selected {
    border-bottom: 2px solid #9b9b9b;
    color: #9b9b9b
  }
</style>
