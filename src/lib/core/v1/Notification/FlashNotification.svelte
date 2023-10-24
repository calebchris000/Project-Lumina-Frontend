<script lang="ts">
  import { browser } from "$app/environment";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let message: string = "This is an info";
  export let timeout: number = 500;
  export let dismissible: boolean = true
  export let showNotification: boolean = true;

  function handleClickedOut() {
    showNotification = false;
    dispatch("visibleChange", {'show': showNotification});
  }
</script>

{#if showNotification}
  <section role="alert" id="flash-container" class={`fixed flex justify-between top-0 right-0`}>
    <p>{message}</p>
    <button class={`hidden ${dismissible && 'visible'}`} on:click={handleClickedOut}>X</button>
  </section>
{/if}


<style>
  .visible {
    display: block !important;
  }
</style>