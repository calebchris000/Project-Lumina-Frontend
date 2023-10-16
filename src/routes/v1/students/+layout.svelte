<script lang="ts">
  import InfoCard from "$components/InfoCard.svelte";
  import ThreeDotOption from "$components/ThreeDotOption.svelte";
  import BaseLayout from "$lib/core/v1/BaseLayout.svelte";
  import TopBar from "$lib/core/v1/TopBar/TopBar.svelte";
  import type { LayoutData } from "./$types";
  import StudentList from "./StudentList.svelte";
  import student_image from "$lib/assets/student-image.png";
  import student_image2 from "$lib/assets/student-image2.png";
  import student_image3 from "$lib/assets/student-image3.png";
  export let data: LayoutData;
</script>

<main class="flex w-full">
  <BaseLayout scrollable={true} className="gap-4 overflow-auto transition-all">
    <TopBar title="Students" />

    <section class="flex gap-4 flex-wrap">
      <InfoCard className="flex-1 basis-[30%] transition-all">
        <div class="flex items-center m-0 gap-4 justify-between">
          <h2 class="text-lg font-medium text-[#445569]">Students</h2>
          <ThreeDotOption />
        </div>
        <input class="rounded-lg px-4 p-2 outline-none border-2 border-[#ebebeb]" type="text" placeholder="Search by name or ID" />

        <section class="w-full">
          <div class="flex my-4 w-full gap-5 justify-between text-[#445569] font-medium">
            <p class="text-xs">Photo</p>
            <p class="flex-1 text-xs">Name</p>
            <p class="flex-1 text-xs">Student ID</p>
            <p class="text-xs">Year</p>
          </div>

          <div class="flex flex-col gap-2 mt-7">
            <StudentList img_url={student_image} name="Emily B. Jones" student_id="ST43236165" />
            <StudentList img_url={student_image2} name="Eleanor G. Hart" student_id="ST68467278" />
            <StudentList img_url={student_image3} name="Henry A. Chester" student_id="ST43236165" />
          </div>
        </section>
      </InfoCard>
      <slot />
    </section>
  </BaseLayout>
</main>

<svelte:head>
  <title>Students</title>
</svelte:head>
