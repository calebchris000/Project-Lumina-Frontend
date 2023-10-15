<script lang="ts">
    import Sidebar from "$lib/core/v1/Sidebar/Sidebar.svelte";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
  </script>
  
  <main class="flex gap-10 m-5 h-[94%]">
    <Sidebar />
    <slot></slot>
  </main>

  
  <style>
    main {
      flex: 1;
    }
  </style>
  