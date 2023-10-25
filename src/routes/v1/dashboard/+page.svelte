<script lang="ts">
  import InfoCard from "./../../../components/InfoCard.svelte";
  import type { PageData } from "./$types";
  import BaseLayout from "$lib/core/v1/BaseLayout.svelte";
  import TopBar from "$lib/core/v1/TopBar/TopBar.svelte";
  import SummaryCard from "$components/SummaryCard.svelte";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import GetEvents from "./calendar/GetEvents";
  import "iconify-icon";
  import "color-calendar/dist/css/theme-basic.css";
  import { store } from "src/store/store";
  import CalendarEventsCard from "$components/CalendarEventsCard.svelte";
  import GetQuickEvents from "./calendar/GetQuickEvent";
  import { format, parseISO } from "date-fns";

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
        eventsData: formattedEvents,

        dateChanged: (filteredDateEvents, currentDate?: Date) => {
          // do something
        },
      });
    });
  });
  $: console.log(calendarEvents);
</script>

<BaseLayout className="gap-4">
  <TopBar />
  <div class="summary-holder flex gap-4 flex-wrap">
    <SummaryCard icon="ph:student-bold" data={data.students.present} total={data.students.total} />
    <SummaryCard title="Teachers" icon="ph:chalkboard-teacher-duotone" data={data.teachers.present} total={data.teachers.total} />
    <SummaryCard singleNumber={true} title="Courses" icon="mdi:book-open" total={data.courses.total} />
    <SummaryCard title="Weekly Earnings" singleNumber={true} icon="fa6-solid:money-check-dollar" total="$12,500" />
  </div>
  <section class="w-full flex">
    <InfoCard className="bg-white justify-self-end ms-auto self-end">
      <div class="calendar" id="calendar" />

      <p class="font-medium text-[#445569]">Upcoming Events</p>

      <section class="grid grid-cols-2 gap-2">
        {#each calendarEvents as event (event.id)}
          <CalendarEventsCard eventColorLabel="#eb86be" date={format(parseISO(event.start_date), "d, MMM. yyyy")} title={event.name} />
        {/each}

      </section>
    </InfoCard>
  </section>
</BaseLayout>
