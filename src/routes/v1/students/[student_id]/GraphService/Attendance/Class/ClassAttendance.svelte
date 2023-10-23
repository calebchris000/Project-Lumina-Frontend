<script lang="ts">
  import ThreeDotOption from "$components/ThreeDotOption.svelte";
  import AttendanceCategoryOption from "./AttendanceCategoryOption.svelte";
  import AttendanceMonthly from "./Monthly/AttendanceMonthly.svelte";
  import AttendanceWeekly from "./Weekly/AttendanceWeekly.svelte";
  import AttendanceYearly from "./Yearly/AttendanceYearly.svelte";

  let selectedOption = "Yearly";
  function handleSelected(event: any) {
    selectedOption = event.detail.option;
  }

</script>

<section class="flex items-center justify-between">
  <section class="flex items-center justify-between flex-1 mr-10 gap-10">
    <h3 class="text-[#445569]">Attendance</h3>

    <AttendanceCategoryOption on:onSelected={handleSelected} />
  </section>
  <ThreeDotOption />

</section>

{#if selectedOption === 'Yearly'}
<AttendanceYearly />
{:else if selectedOption === 'Monthly'}
<AttendanceMonthly />
{:else if selectedOption === 'Weekly'}
<AttendanceWeekly />
{/if}