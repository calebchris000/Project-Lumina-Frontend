<script lang="ts">
  import "iconify-icon";
  export let notificationUnread: boolean = false;
</script>

<div class="notification-holder">
  {#if notificationUnread}
    <i class="notification-dot" />
  {/if}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="dashboard-bell-holder">
    <iconify-icon class="dashboard-bell" icon={`ph:bell-${notificationUnread ? "fill" : "bold"}`} on:click={() => (notificationUnread = !notificationUnread)} />
  </div>
</div>

<style>
  .dashboard-bell-holder {
  }
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
</style>
