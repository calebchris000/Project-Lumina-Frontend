<script lang="ts">
  import Toast from "$lib/core/v1/Notification/Toast.svelte";
  import Sidebar from "$lib/core/v1/Sidebar/Sidebar.svelte";
  import { store } from "src/store/store";
  let darkMode: boolean = $store.theme.darkMode;
</script>

<main class="flex gap-5 h-full p-5 w-full">
  <Toast />
  <Sidebar />
  <slot />
</main>

{#if darkMode}
<style>
  :root {
    background: #101519;
  }
</style>
{/if}