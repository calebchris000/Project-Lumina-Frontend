<script lang="ts">
  import FeesGraph from "./Fees/FeesGraph.svelte";
  import "iconify-icon";
  import { page } from "$app/stores";
  import InfoCard from "$components/InfoCard.svelte";
  import OptionTabs from "./OptionTabs.svelte";
  import ThreeDotOption from "$components/ThreeDotOption.svelte";
  import { onMount } from "svelte";
  import AttendanceGraph from "./Attendance/AttendanceGraph.svelte";
  import ScoreGraph from "./Scores/ScoreGraph.svelte";
  let clickedFilter: string = "Year";

  let selectedOption: number = 0;

  function handleOption(e) {
    selectedOption = e.detail.index;
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<InfoCard className="border-2  font-medium text-lg">
  <OptionTabs on:currentIndex={handleOption} />
  {#if selectedOption === 0}
    <AttendanceGraph />
    {:else if selectedOption === 1}
    <AttendanceGraph />
    {:else if selectedOption === 2}
    <ScoreGraph />
    {:else if selectedOption === 3}
    <FeesGraph />
  {/if}
</InfoCard>

<style>
</style>
