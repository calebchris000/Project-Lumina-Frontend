<script lang="ts">
  import InfoCard from "$components/InfoCard.svelte";
  import { onMount } from "svelte";
  import GetEvents from "./calendar/GetEvents";
  import "iconify-icon";
  import "color-calendar/dist/css/theme-basic.css";
  import { store } from "src/store/store";
  import CalendarEventsCard from "$components/CalendarEventsCard.svelte";
  import GetQuickEvents from "./calendar/GetQuickEvent";
  import { format, parseISO } from "date-fns";

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
</script>

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
