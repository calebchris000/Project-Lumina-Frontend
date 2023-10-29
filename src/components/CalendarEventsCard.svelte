<script lang="ts">
  import "iconify-icon";
  export let date: string = "";
  export let title: string = "";
  export let eventColorLabel: string = "#57d2f1";
  export let event_id: string = ''
</script>

<section id={event_id} class="calendar-events text-sm w-full bg-[#f1f4fa] rounded-md p-2">
  <div class=" font-medium flex items-center gap-1 text-xs text-[#9c9c9c]">
    <p style="background-color: {eventColorLabel};" class={`event-color-label not-italic rounded-full p-[3px]`} />
    {date}
  </div>
  <div class="flex flex-wrap items-center gap-3">
    <p>{title}</p>
    <iconify-icon class=" hover:translate-x-[4px] transition-all scale-[1.2]" icon="material-symbols:arrow-forward" />
  </div>
</section>
