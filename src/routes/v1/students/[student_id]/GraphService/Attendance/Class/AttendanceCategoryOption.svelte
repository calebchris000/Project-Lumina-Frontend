<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let clickedFilter: string = "Yearly";

  function handleSelectedOption(selectedString: string) {
    clickedFilter = clickedFilter !== selectedString && selectedString;

    dispatch("onSelected", { option: clickedFilter });
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="flex gap-3 items-center text-[#445569]">
  <p class="cursor-pointer m-0 p-0 text-sm font-medium" on:click={() => handleSelectedOption("Yearly")} class:current={clickedFilter == "Yearly"}>Yearly</p>
  |
  <p class="cursor-pointer m-0 p-0 text-sm font-medium" on:click={() => handleSelectedOption("Monthly")} class:current={clickedFilter == "Monthly"}>Monthly</p>
  |
  <p class="cursor-pointer m-0 p-0 text-sm font-medium" on:click={() => handleSelectedOption("Weekly")} class:current={clickedFilter == "Weekly"}>Weekly</p>
  |
</div>

<style>
  .current {
    background-color: #445569;
    border-radius: 0.4rem;
    padding: 0.1rem 0.4rem;
    color: white;
    font-size: 0.875rem;
  }
</style>
