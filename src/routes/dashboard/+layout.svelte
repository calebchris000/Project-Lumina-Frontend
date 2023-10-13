<script lang="ts">
  import "$lib/common/app.css";
  import Sidebar from "./../../components/sidebar/sidebar.svelte";
  import type { LayoutData } from "./$types";
  import { globalStore } from "../../global_store";
  import { onDestroy, onMount } from "svelte";
  export let data: LayoutData;
  let isDarkMode: boolean = false;
  const unsubscribe = globalStore.subscribe((value) => (isDarkMode = value["isDarkMode"]));
  onDestroy(unsubscribe);
</script>

<main class="dashboard_layout" class:isDarkMode>
  {#if isDarkMode}
    <style>
      :root {
        background: #001624;
      }
    </style>
  {/if}
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
    /* background-color: red */
  }

  .isDarkMode {
    background-color: #001624;
  }
</style>
