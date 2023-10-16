<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import "iconify-icon";
  import { page } from "$app/stores";
  import InfoCard from "$components/InfoCard.svelte";
  import ThreeDotOption from "$components/ThreeDotOption.svelte";
  import { studentStore } from "../studentStore";
  let currentStudent: any;
  $: currentStudent = $studentStore.all_students[$page.params.student_id];
</script>

<InfoCard className="flex-1 basis-[60%] flex flex-col gap-10 transition-all">
  <section class="bg-[#445569] rounded-tl-xl rounded-tr-xl px-4 py-2 m-[-1rem]">
    <section class="w-full p-2 flex items-center gap-6">
      <img class="w-20 cursor-pointer rounded-full" src={currentStudent.profile_image} alt="" />
      <div class="flex flex-col">
        <p class="font-medium text-white text-3xl">{currentStudent.first_name} {currentStudent.last_name}</p>
        <p class="text-white text-xs">Grade {currentStudent.grade} &nbsp; | &nbsp; Student ID: {currentStudent.student_id}</p>
      </div>
    </section>
  </section>

  <InfoCard className="border-2 border-[#ebebeb] mt-4 rounded-lg p-3">
    <div class="flex items-center justify-between">
      <h3 class="text-[#445569] text-lg font-medium">Basic Details</h3>
      <ThreeDotOption />
    </div>

    <section class="mt-5 grid grid-cols-3 gap-3 2xl:grid-cols-4">
      <div class="flex flex-col">
        <p class="font-semibold text-[#b3b3b3!important]">Gender</p>
        <p class="text-[#445569]">
          {currentStudent.gender.slice(0, 1).toUpperCase() + currentStudent.gender.slice(1)}
        </p>
      </div>

      <div class="flex flex-col">
        <p class="font-semibold text-[#b3b3b3!important]">Date Of Birth</p>
        <p class="text-[#445569]">
          {currentStudent.date_of_birth}
        </p>
      </div>

      <div class="flex flex-col">
        <p class="font-semibold text-[#b3b3b3!important]">Home Address</p>
        <p class="text-[#445569]">
          {currentStudent.home_address}
        </p>
      </div>
      <div class="flex flex-col">
        <p class="font-semibold text-[#b3b3b3!important]">Religion</p>
        <p class="text-[#445569]">Christian</p>
      </div>

      <div class="flex flex-col">
        <p class="font-semibold text-[#b3b3b3!important]">Contacts</p>
        {#if currentStudent.usercontact.length !==0}
        <p class="text-[#445569]">+{currentStudent.usercontact[0].home}</p>
          {:else}
        <p class="text-[#445569]">None</p>
        {/if}
      </div>
    </section>
  </InfoCard>

  <InfoCard className="border-2 text-[#445569] font-medium text-lg">
    <section>
      Attendance
    </section>
  </InfoCard>
</InfoCard>

