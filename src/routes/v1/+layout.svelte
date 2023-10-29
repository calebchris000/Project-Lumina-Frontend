<script lang="ts">
  import Toast from "$lib/core/v1/Notification/Toast.svelte";
  import Sidebar from "$lib/core/v1/Sidebar/Sidebar.svelte";
  import { store } from "src/store/store";
  let darkMode: boolean;
  $: darkMode = $store.theme.darkMode;
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

    :root * {
      border-color: #445569
    }
    :root section,
    :root nav,
    :root .summary {
      background: #253441;
      color: white;
      border-color: #445569
    }
    :root p,
    :root h1,
    :root h2,
    :root h3,
    :root span {
      color: white;
    }

    :root .clicked {
      background: #101519
    }
    :root .color-calendar {
      background: rgba(0, 0, 0, 0);
    }
    :root .calendar__weekdays .calendar__weekday {
      color: white;
    }
    :root .student-option-tab{
      background: #445569;
    }

    :root .student-profile-bar {
      /* background: #253519 */
    }

    :root .index {
      background: white;
      color: #101519
    }
    :root input {
      background: #253441;
      border-color: #445569
    }

    :root select {
      background: #253441;
      outline: none;
      border: 2px solid white;
      color: white;
    }

    :root iconify-icon {
      color: white;
    }

    :root .selected,
    :root .selected .sidebar-button {
      /* background: #101519; */
      color: #253441;
    }

    :root div + img {
      background: rgba(0, 0, 0, 0);
    }

    :root .apexcharts-text {
      color: red;
    }
  </style>
{/if}

<style>
  :root svg {
    background: white;
  }
</style>
