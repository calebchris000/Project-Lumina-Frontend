<script lang="ts">
  import GenericCard from "$lib/common/generic_card.svelte";
  import { InlineCalendar } from 'svelte-calendar';

  const theme = {
		calendar: {
			width: '300px',
            transform: 'scale(0.4)'
		}
	};
</script>


<section class="event_holder">
<!-- <GenericCard style={`padding: 10rem; z-index: 100`}> -->
    <!-- <InlineCalendar {theme} /> -->
<!-- </GenericCard> -->
</section>

<style>
    .event_holder {
        grid-area: event;
        border: 2px solid red;
    }

</style>