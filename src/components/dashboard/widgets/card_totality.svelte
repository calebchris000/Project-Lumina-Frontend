<script lang="ts">
  import GenericCard from "$lib/common/generic_card.svelte";
  import PieChart from "$lib/common/pie-chart/pie-chart.svelte";
  import "iconify-icon";
  export let name: string = "Students";
  export let present: number = 0;
  export let total: number = 13212;
  export let icon: string = "ph:student-bold";
</script>

<div class="card_totality_holder">
  <GenericCard clickable={true}>
    <div class="card_totality_subholder">
      <iconify-icon class="icon" icon={icon} />
      <div>
        <p>{name}</p>
        {#if present}
          <h3>{present} | {total}</h3>
        {:else}
          <h3>{total}</h3>
        {/if}
      </div>
    </div>
  </GenericCard>
</div>

<style >
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
    font-size: 1rem;
    color: rgb(128, 128, 128);
  }

  h3 {
    font-weight: 500;
    font-size: 1.4rem;
    margin: 0;
  }

  .icon {
    transform: scale(2);
    margin-left: 1rem;
  }
</style>
