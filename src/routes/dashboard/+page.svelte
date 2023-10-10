<script lang="ts">
  import EventsCalendar from "./../../components/dashboard/widgets/events_calendar.svelte";
  import CardTotality from "./../../components/dashboard/widgets/card_totality.svelte";
  import AdmissionGraph from "../../components/dashboard/widgets/admission_graph.svelte";
  import Topbar from "../../components/topbar/topbar.svelte";
  import { Month } from "@svelteuidev/dates";
  import type { PageData } from "./$types";
  import NoticeBoard from "../../components/dashboard/widgets/notice-board/notice-board.svelte";
  import GenericCard from "$lib/common/generic_card.svelte";

  let value = new Date();
  export let data: PageData;
</script>

<section class="dashboard-body">
  <Topbar />

  <section style="grid-area: totality_holder;" class="totality-holder">
    <CardTotality present={1201} total={data.students} />
    <CardTotality present={1202} name="Teachers" total={data.teachers} icon={data.iconNames.teachers} />
    <CardTotality name="Departments" total={data.departments} icon={data.iconNames.departments} />
    <CardTotality name="Other Staffs" total={326} icon={data.iconNames.staff} />
  </section>
  <section />

  <AdmissionGraph />
  <!-- <EventsCalendar /> -->
  <GenericCard style="grid-area: calendar; justify-content: center;">
    <Month class="calendar" bind:value month={value} onChange={(val) => (value = val)} />
  </GenericCard>
  <NoticeBoard />
</section>

<style>
  .dashboard-body {
    position: fixed;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fit, min-max(10px, 1fr));
    grid-template-areas:
      "topbar topbar topbar topbar"
      "totality_holder totality_holder totality_holder totality_holder"
      "graph graph graph calendar"
      " . . . notice_board";
    gap: 1rem;
    right: 2.8rem;
    width: calc(100% - 20rem);
  }

  .calendar {
    border: 4px solid red;
  }

  .totality-holder {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    /* overflow-y: auto; */
    justify-content: space-between;
    gap: 1rem;
  }
</style>
