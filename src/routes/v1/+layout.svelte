<script lang="ts">
  import Toast from "$lib/core/v1/Notification/Toast.svelte";
  import Sidebar from "$lib/core/v1/Sidebar/Sidebar.svelte";
  import { onDestroy } from "svelte";
  import type { LayoutData } from "./$types";
  import { store } from "src/store/store";
  let darkMode: boolean = false;
  let showToast: boolean;
  let message: string;
  let type: string;
  const unsubscribe = store.subscribe((defaults) => {
    showToast = defaults.toast.showToast;
    message = defaults.toast.message;
    type = defaults.toast.type;
    darkMode = defaults.theme.darkMode
  });

  onDestroy(() => unsubscribe())
  export let data: LayoutData;
</script>

<main class="flex gap-10 m-5 h-[94%]">
  <Toast />
  <Sidebar />
  <slot />
</main>

{#if darkMode}
<style>
  :root {
    background: #101519;
  }
  :root input {
    background: #28353f;
    border-color: #343f4d;
  }

  :root p,
  :root h2,
  :root h3 {
    color: white;
  }



  :root * {
      border-color: #343f4d;
      color: white;
  }
  /* :root section {
      background-color: #101519
  } */
  :root button {
    background-color: #28353f;
  }

  :root .selected {
    color: #28353f !important;
    
  }
</style>
{/if}

<style>
  main {
    flex: 1;
    bac: #343f4d
  }
</style>
