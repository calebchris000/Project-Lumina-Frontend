<script lang="ts">
  import Sidebar from "$lib/core/Sidebar/Sidebar.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<main>
  <Sidebar />
  <slot></slot>
</main>
