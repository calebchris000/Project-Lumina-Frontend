<script lang="ts">
  import Sidebar from "$components/sidebar/sidebar.svelte";
  import { globalStore } from "$lib/common/global_store";
  import { onDestroy } from "svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  let isDarkMode: boolean = false;
  const unsubscribe = globalStore.subscribe((value) => (isDarkMode = value["isDarkMode"]));
  onDestroy(unsubscribe);
</script>

{#if isDarkMode}
  <style>
    :root {
      background: #001624;
    }
  </style>
{/if}

<main>
  <Sidebar />
  <slot />
</main>
