<script lang="ts">
  import InfoCard from "$components/InfoCard.svelte";
  import ThreeDotOption from "$components/ThreeDotOption.svelte";
  import BaseLayout from "$lib/core/v1/BaseLayout.svelte";
  import TopBar from "$lib/core/v1/TopBar/TopBar.svelte";
  import type { LayoutData } from "./$types";
  import StudentList from "./StudentList.svelte";
  import { store } from "src/store/store";
  export let data: LayoutData;
  let students: any = data.results;
  $: students = data.results;

  let filtered = students;
  function handleInput(e: any) {
    filtered = students.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
      return item.student_id.includes(e.target.value) || fullName.includes(e.target.value.toLowerCase());
    });
  }

  let menuClick = false;

  if ($store.sidebar.selectedTab !== "Students") {
    store.update((item) => {
      item.sidebar.selectedTab = "Students";
      return item;
    });
  }
</script>

<main class="flex w-full">
  <BaseLayout scrollable={true} className="gap-4 overflow-auto transition-all">
    <TopBar title="Students" />
    <section class="flex gap-4 flex-wrap">
      <InfoCard className="flex-1 basis-[30%] transition-all">
        <div class="flex relative items-center m-0 gap-4 justify-between">
          <h2 class="text-lg font-medium text-[#445569]">Students</h2>
          <ThreeDotOption clicked={menuClick} />
        </div>
        <input on:input={handleInput} class="rounded-lg px-4 p-2 outline-none border-2 border-[#ebebeb]" type="text" placeholder="Search by name or ID" />

        <section class="w-full">
          <div class="flex my-4 w-full gap-5 justify-between text-[#445569] font-medium">
            <p class="text-xs">Photo</p>
            <p class="flex-1 text-xs">Name</p>
            <p class="flex-1 text-xs">Student ID</p>
            <p class="text-xs">Year</p>
          </div>

          <div class="flex flex-col gap-2 mt-7">
            {#if filtered && filtered.length !== 0}
              {#each filtered as student (student.id)}
                <StudentList img_url={student.profile_image} name={`${student.first_name} ${student.last_name}`} student_id={student.student_id} />
              {/each}
            {:else}
              <p>0 Students</p>
            {/if}
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
