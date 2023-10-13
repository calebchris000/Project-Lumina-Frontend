<script lang="ts">
  import '$lib/common/app.css'
  import CardTotality from "./../../components/dashboard/widgets/card_totality.svelte";
  import AdmissionGraph from "../../components/dashboard/widgets/earning-chart.svelte";
  import Topbar from "../../components/topbar/topbar.svelte";
  import { Month } from "@svelteuidev/dates";
  import type { PageData } from "./$types";
  import NoticeBoard from "../../components/dashboard/widgets/notice-board/notice-board.svelte";
  import GenericCard from "$lib/common/generic_card.svelte";

  let value = new Date();
  export let data: PageData;
</script>

<section class="dashboard-body fixed top-[1rem] right-[3.8rem]">
  <Topbar />

  <section style="grid-area: totality_holder;" class="totality-holder">
    <CardTotality present={String(data.students.present)} total={data.students.total} />
    <CardTotality present={String(data.teachers.present)} name="Teachers" total={data.teachers.total} icon={data.iconNames.teachers} />
    <CardTotality name="Courses" total={data.courses.total} icon={data.iconNames.course} />
    <CardTotality name="Other Staff" total={326} icon={data.iconNames.staff} />
  </section>
  <section />

  <AdmissionGraph />
  <!-- <EventsCalendar /> -->
  <GenericCard style="grid-area: calendar; flex-direction: column; justify-content:flex-start">
    <p class="upcoming-event-title text-sm">Upcoming Events</p>
    <Month class="calendar w-4" bind:value month={value} onChange={(val) => (value = val)} />
  </GenericCard>
  <NoticeBoard />
</section>

<style>
  .dashboard-body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "topbar topbar topbar topbar"
      "totality_holder totality_holder totality_holder totality_holder"
      "graph graph graph calendar"
      " . . . notice_board";
    gap: 1rem;
    width: calc(100% - 20rem);
  }

  .dashboard-body::-webkit-scrollbar {
    width: 0;
  }

  .upcoming-event-title {
    justify-self: left;
    text-align: left;
  }

  .totality-holder {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    /* overflow-y: auto; */

    justify-content: space-between;
    gap: 1rem;
  }

  @media (max-width: 768px) {
  .dashboard-body {
    position: relative;
    margin: 0 auto;
    grid-template-areas:
      "topbar topbar topbar topbar"
      "totality_holder totality_holder totality_holder totality_holder"
      "graph graph calendar calendar"
      " notice_board notice_board notice_board notice_board";
    padding: 0 3rem;
    width: 100%
  }
  }
</style>
