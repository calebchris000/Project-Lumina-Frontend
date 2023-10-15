<script lang="ts">
  import Sidebar from "$lib/core/v1/Sidebar/Sidebar.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<main class="flex w-full">
  <slot></slot>
</main>

<svelte:head>
<title>Dashboard</title>
</svelte:head>
