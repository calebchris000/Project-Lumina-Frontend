<script lang="ts">
  import "iconify-icon";
  import { page } from "$app/stores";
  import InfoCard from "$components/InfoCard.svelte";
  import OptionTabs from "./OptionTabs.svelte";
  import ThreeDotOption from "$components/ThreeDotOption.svelte";
  import { onMount } from "svelte";
  import AttendanceGraph from "./Attendance/AttendanceGraph.svelte";
  let clickedFilter: string = "Year";

  let selectedOption: number = 0

  function handleOption(e) {
    selectedOption = e.detail.index
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<InfoCard className="border-2  font-medium text-lg">
  <OptionTabs on:currentIndex={handleOption}/>
  <AttendanceGraph />
</InfoCard>

<style>

</style>
