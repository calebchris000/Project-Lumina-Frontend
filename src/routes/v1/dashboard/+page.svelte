<script lang="ts">
  import InfoCard from "./../../../components/InfoCard.svelte";
  import type { PageData } from "./$types";
  import BaseLayout from "$lib/core/v1/BaseLayout.svelte";
  import TopBar from "$lib/core/v1/TopBar/TopBar.svelte";
  import SummaryCard from "$components/SummaryCard.svelte";
  import { onMount } from "svelte";
  import GetEvents from "./calendar/GetEvents";
  import "iconify-icon";
  import "color-calendar/dist/css/theme-basic.css";
  import { store } from "src/store/store";
  import CalendarEventsCard from "$components/CalendarEventsCard.svelte";
  import GetQuickEvents from "./calendar/GetQuickEvent";
  import { format, parseISO } from "date-fns";
  import AdmissionGraph from "./GraphService/AdmissionGraph.svelte";
  import Option from "./Performance/Option.svelte";
  import Label from "./Performance/Label.svelte";
  import Student from "./Performance/Student.svelte";

  export let data: PageData;

  const currentDate = new Date().toISOString();
  let calendarEvents;

  (async () => {
    await GetEvents(currentDate);
  })();

  $: calendarEvents = $store.dashboard.calendar.events;
  let formattedEvents;
  $: formattedEvents = GetQuickEvents(calendarEvents);
  onMount(async () => {
    await import("color-calendar").then((module) => {
      const Calendar = module.default;
      new Calendar({
        id: "#calendar",
        calendarSize: "small",
        theme: "basic",
        primaryColor: "#445569",
        headerColor: "#445569",
        weekdaysColor: "#445569",
        fontFamilyHeader: "Poppins",
        fontFamilyWeekdays: "Poppins",
        dropShadow: "0",
        borderRadius: "0",
        eventsData: formattedEvents ? formattedEvents : [],

        dateChanged: (filteredDateEvents, currentDate?: Date) => {
          // do something
        },
      });
    });
  });
</script>

<BaseLayout className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] grid-rows-[80px] gap-4">
  <TopBar />
  <div class="summary-holder flex gap-4 flex-wrap col-span-5 row-span-1">
    <SummaryCard icon="ph:student-bold" data={data.students.present} total={data.students.total} />
    <SummaryCard title="Teachers" icon="ph:chalkboard-teacher-duotone" data={data.teachers.present} total={data.teachers.total} />
    <SummaryCard singleNumber={true} title="Courses" icon="mdi:book-open" total={data.courses.total} />
    <SummaryCard title="Weekly Earnings" singleNumber={true} icon="fa6-solid:money-check-dollar" total="$12,500" />
  </div>
    <AdmissionGraph />
    <section class="flex flex-col">
      <InfoCard className="bg-white">
        <div class="calendar justify-center" id="calendar" />

        <p class="font-medium text-[#445569]">Upcoming Events</p>

        <section class="grid grid-cols-2 gap-2">
          {#each calendarEvents as event (event.id)}
            <CalendarEventsCard eventColorLabel="#eb86be" date={format(parseISO(event.start_date), "d, MMM. yyyy")} title={event.name} />
          {/each}
        </section>
      </InfoCard>
    </section>

    <InfoCard className="w-full col-span-2">
      <h3 class="text-[#445569] font-medium">Top Performers</h3>
      <Option />
      <Label />
      <Student />
      <Student name="Mark Rober" grade="8th" rank={71.6} />
    </InfoCard>

    <InfoCard className="w-full flex-1 basis-[30%]">
      <h3 class="text-[#445569] font-medium">Students</h3>
    </InfoCard>
</BaseLayout>
