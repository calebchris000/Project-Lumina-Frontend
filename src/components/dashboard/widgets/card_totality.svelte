<script lang="ts">
  import '$lib/common/app.css'
  import GenericCard from "$lib/common/generic_card.svelte";
  import PieChart from "$lib/common/pie-chart/pie-chart.svelte";
  import "iconify-icon";
  export let name: string = "Students";
  export let present: number | string = 0;
  export let total: number = 13212;
  export let icon: string = "ph:student-bold";

  import { globalStore } from "../../../lib/common/global_store";
  import { onDestroy } from "svelte";
  let isDarkMode: boolean = false;
  const unsubscribe = globalStore.subscribe((value) => (isDarkMode = value["isDarkMode"]));
  onDestroy(unsubscribe);

</script>

<div class="card_totality_holder" class:isDarkMode>
  <GenericCard clickable={true}>
    <div class="card_totality_subholder">
      <iconify-icon class="icon" {icon} />
      <div>
        <p class="text-sm">{name}</p>
        {#if present}
          <h3 class="text-lg">{present} | {total}</h3>
        {:else}
          <h3 class='text-lg'>{total}</h3>
        {/if}
      </div>
    </div>
  </GenericCard>
</div>

<style>
  .card_totality_holder {
    width: 100%;
  }

  .card_totality_subholder {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  p {
    font-weight: 500;
    margin: 0;
    color: rgb(128, 128, 128);
  }

  h3 {
    font-weight: 500;
    margin: 0;
  }

  .icon {
    transform: scale(1.6);
    margin-left: 1rem;
  }

  .isDarkMode * {
    color: white
  }
</style>
