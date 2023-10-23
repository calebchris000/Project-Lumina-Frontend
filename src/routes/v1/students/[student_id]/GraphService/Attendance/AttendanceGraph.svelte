<script lang="ts">
  import AttendanceCategoryOption from "./Class/AttendanceCategoryOption.svelte";

  import { page } from "$app/stores";
  import InfoCard from "$components/InfoCard.svelte";
  import ThreeDotOption from "$components/ThreeDotOption.svelte";
  import AttendanceOption from "./AttendanceOption.svelte";
  import ClassAttendance from "./Class/ClassAttendance.svelte";

  let selectedOption: number = 1;

  function handleSelectedOption(e) {
    selectedOption = e.detail.index;
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<InfoCard className="mt-16">
  <AttendanceOption on:currentIndex={handleSelectedOption} />
  {#if selectedOption === 1}
  <ClassAttendance />
  {/if}
</InfoCard>
