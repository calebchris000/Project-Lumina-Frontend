<script lang="ts">
  import "iconify-icon";
  export let notificationUnread: boolean = false;
  import { onDestroy } from "svelte";
  import { globalStore } from "../../global_store";
  let isDarkMode: boolean = false;

  const unsubscribe = globalStore.subscribe((value) => (isDarkMode = value["isDarkMode"]));
  onDestroy(unsubscribe);
</script>

<div class="notification-holder" class:isDarkMode>
  {#if notificationUnread}
    <i class="notification-dot" />
  {/if}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="dashboard-bell-holder">
    <iconify-icon class="dashboard-bell" class:isDarkMode icon={`ph:bell-${notificationUnread ? "fill" : "bold"}`} on:click={() => (notificationUnread = !notificationUnread)} />
  </div>
</div>

<style>
  .dashboard-bell {
    transform: scale(1.6);
    transition: all 0.3s ease;
  }

  .notification-holder {
    position: relative;
    cursor: pointer;
  }

  .notification-dot {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 10px;
    top: -2px;
    z-index: 99;
    font-weight: 600;
    font-size: 1.2rem;
    color: white;
    font-style: normal;
    font-size: 0.7rem;
  }

  .isDarkMode {
    color: white;
  }
</style>
