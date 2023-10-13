<script lang="ts">
  import '$lib/common/app.css'
  import Sidebar from "./../../components/sidebar/sidebar.svelte";
  import type { LayoutData } from "./$types";
  import TopBar from "../../components/topbar/topbar.svelte";
  export let data: LayoutData;
</script>

<main class="dashboard_layout">
  <Sidebar />
  <slot />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800&display=swap");

  main {
    font-family: "Poppins", sans-serif;
  }
  .dashboard_layout {
    display: flex;

  }
</style>
