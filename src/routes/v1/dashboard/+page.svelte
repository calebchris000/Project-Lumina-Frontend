<script lang="ts">
  import type { PageData } from "./$types";
  import BaseLayout from "$lib/core/v1/BaseLayout.svelte";
  import TopBar from "$lib/core/v1/TopBar/TopBar.svelte";
  import SummaryCard from "$components/SummaryCard.svelte";
  export let data: PageData;
</script>

<BaseLayout className="gap-4">
  <TopBar />
  <div class="summary-holder flex gap-4 flex-wrap">
    <SummaryCard icon="ph:student-bold" data={data.students.present} total={data.students.total}/>
    <SummaryCard title="Teachers" icon="ph:chalkboard-teacher-duotone" data={data.teachers.present} total={data.teachers.total}/>
    <SummaryCard singleNumber={true} title="Courses" icon="mdi:book-open" total={data.courses.total}/>
    <SummaryCard title="Weekly Earnings" singleNumber={true} icon="fa6-solid:money-check-dollar" total="$12,500"/>
  </div>
</BaseLayout>
